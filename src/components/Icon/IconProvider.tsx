import React, { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { hasSlotContent, willRenderSlotContent } from './IconSlot';
import type { IconName } from '../../icons/spritemap';
import { assertEdsUsage } from '../../util/logging';
import type { IconOrContent } from '../../util/utility-types';
import type { Status } from '../../util/variant-types';

/**
 * The roles a component fills with an icon it picks itself.
 *
 * These are not slots a consumer fills per instance. Each one has a single, well-defined
 * job, so the same role has to look the same everywhere it appears: every close button in
 * an app is the same glyph, whether it closes a `Modal`, an `InputChip`, or a
 * `PageNotification`.
 *
 * The four status names are the `Status` union, so a component holding a `Status` can
 * look its icon up directly.
 */
export type SemanticIconName =
  | Status
  | 'back'
  | 'close'
  | 'collapse'
  | 'copy'
  | 'expand'
  | 'forward'
  | 'menu'
  | 'open-in-new';

/**
 * A full set of semantic icons. Each role takes an EDS icon name or a node, on the same
 * terms as any other content slot.
 *
 * A string here cannot be narrowed to `IconName` by the type system: `IconOrContent` unions
 * it with `ReactNode`, and even excluding `ReactNode`'s own `string` member leaves
 * `Iterable<ReactNode>`, which a string satisfies structurally. So a name that is not in the
 * spritemap type-checks, and `Icon` warns and renders nothing when it reaches one.
 */
export type SemanticIconMap = Record<SemanticIconName, IconOrContent>;

/**
 * The glyph each status is drawn with.
 *
 * Kept as its own map, typed `Record<Status, IconName>`, so it has to name every member of
 * `Status` — no more and no fewer. Spread into the defaults below rather than written out
 * among them, because a status added to `Status` then fails to compile here until it is
 * given an icon, instead of quietly having none.
 */
const statusIcons: Record<Status, IconName> = {
  informational: 'info-encircled-filled',
  critical: 'critical-encircled-filled',
  warning: 'warning-filled',
  favorable: 'checkmark-encircled-filled',
};

/**
 * The icons EDS draws each semantic role with when no provider supplies its own.
 *
 * Exported so a consumer can build a partial override on top of the set EDS ships, and
 * so they can point at a single role's default without hard-coding the glyph. Read it,
 * spread it, index it — but it is frozen, because it is also the context's default value:
 * assigning to it would change what every tree without an override renders, from anywhere
 * in an app, which is the opposite of the consistency the provider is for. Build a new
 * object and hand it to an `IconProvider` instead.
 */
export const defaultSemanticIcons: Readonly<SemanticIconMap> = Object.freeze({
  back: 'chevron-left',
  close: 'close',
  collapse: 'chevron-up',
  copy: 'copy',
  expand: 'chevron-down',
  forward: 'chevron-right',
  menu: 'menu',
  'open-in-new': 'open-in-new',
  ...statusIcons,
});

/**
 * Holds the semantic icon set in effect for the tree below it.
 *
 * Defaults to the full EDS set, so a component reading from it renders an icon whether or
 * not the app wrapped anything in an `IconProvider`.
 */
const IconProviderContext =
  createContext<Readonly<SemanticIconMap>>(defaultSemanticIcons);

export type IconProviderProps = {
  /**
   * The tree the icon set applies to.
   */
  children?: ReactNode;
  /**
   * Semantic roles to draw with something other than the EDS default. Anything left out
   * keeps the icon it inherits, so overriding one role does not mean restating the rest.
   *
   * Each value takes an EDS icon name or a node, matching the content slots elsewhere in
   * the system.
   *
   * `undefined`, `null`, and `false` all read the same as leaving the role out, so it
   * inherits. That is what lets a map be built conditionally: an entry like
   * `{ close: isDismissible ? <Custom /> : null }` falls back to the icon from above rather
   * than emptying the role.
   *
   * There is deliberately no way to turn a role off here. A role says which glyph draws it,
   * not whether the thing drawing it exists — and most of these sit in controls whose only
   * content is the icon, so an empty one is a button a person can still click and no longer
   * see. Whether such a control exists belongs to the component that owns it:
   * `Modal`'s `hideCloseButton`, a notification's `onDismiss`, `CodeBlock`'s `copyStyle`.
   *
   * @example
   * ```tsx
   * <IconProvider icons={{ expand: 'chevron-down', close: <CustomGlyph /> }}>
   *   <App />
   * </IconProvider>
   * ```
   */
  icons?: Partial<SemanticIconMap>;
};

/**
 * ## Usage
 *
 * Swaps the icons EDS uses for the roles it fills on its own behalf: the chevron on a
 * `Menu.Button`, the close button in a `Modal`, the status icon on a `ToastNotification`,
 * and so on. Wrap the app once and every component below it picks the new glyph up.
 *
 * This is how those icons are set. The components that draw them do not take a per-instance
 * override, because a role that renders one glyph in one place and a different one two
 * screens over stops reading as that role at all.
 *
 * One exception: `FieldNote.icon` still wins over the `warning` and `critical` defaults for
 * a single note. That slot predates these roles and stays a content slot, so a note can
 * carry the status treatment and its own content at once. It warns when used without a
 * status, since an icon on a note with nothing to report reads as a status the note does
 * not have.
 *
 * Nesting merges: an inner provider only has to name the roles it changes, and inherits
 * the rest from the provider around it.
 *
 * ### Don'ts
 *
 * * Don't give a role a glyph that reads as a different role (a checkmark for `close`).
 * * Don't define the map inline in render if the tree below it is large. A new object
 *   every render re-renders every component reading from it; hoist it to a module
 *   constant instead.
 */
export const IconProvider = ({ children, icons }: IconProviderProps) => {
  const inherited = useContext(IconProviderContext);

  const value = useMemo(() => {
    const merged = { ...inherited };

    // Only a value that will draw something overrides. Anything that would not — `null`,
    // `false`, `undefined`, an empty array — reads the same as leaving the role out, so it
    // inherits. Spreading `icons` wholesale would write those over the inherited value
    // instead, and a conditional map like `{ close: isDismissible ? <X /> : null }` would
    // empty every close affordance in the tree rather than falling back. No value here
    // empties a role, because nothing here can; see the note on `icons`.
    //
    // Strings are the exception, the empty one included: they are icon names, and they are
    // kept so the hook below can report one the spritemap does not have rather than
    // silently inheriting over a typo.
    for (const role of Object.keys(icons ?? {}) as SemanticIconName[]) {
      const icon = icons?.[role];

      if (typeof icon === 'string' || hasSlotContent(icon)) {
        merged[role] = icon;
      }
    }

    return merged;
  }, [inherited, icons]);

  return (
    <IconProviderContext.Provider value={value}>
      {children}
    </IconProviderContext.Provider>
  );
};

IconProvider.displayName = 'IconProvider';

/**
 * Reads the icon in effect for one semantic role.
 *
 * For EDS components' own use. Consumers change what this returns with `IconProvider`
 * rather than calling it themselves, so it is not exported from the package root.
 *
 * Takes `undefined` for the components whose role depends on runtime state and is
 * sometimes no role at all, so they can resolve the icon in one unconditional call
 * instead of reading a role they will not render.
 *
 * Returns something renderable or nothing: a role set to a name the spritemap does not have
 * comes back as `undefined`, after being reported here.
 *
 * @param name the semantic role being drawn, or `undefined` to draw nothing
 * @returns the icon name or node to hand to `IconSlot`, or `undefined` if the role resolves
 * to nothing renderable
 */
export function useSemanticIcon(
  name: SemanticIconName | undefined,
): IconOrContent {
  const icons = useContext(IconProviderContext);

  // An own-property check, because the map inherits from `Object.prototype`: a role name
  // that is not one — reachable from untyped code, e.g. `Link icon="toString"` — used to
  // resolve to the inherited function, get handed to `IconSlot` as content, and reach React
  // as a child it cannot render.
  const isRole =
    name !== undefined && Object.prototype.hasOwnProperty.call(icons, name);

  assertEdsUsage(
    [name !== undefined && !isRole],
    `IconProvider: "${String(name)}" is not a semantic icon role, so nothing renders for it.`,
  );

  const icon = isRole ? icons[name] : undefined;

  // Reported here rather than left to `Icon`, because a component may reasonably decide not
  // to render a role that resolves to nothing — `Menu.Button` drops its icon layout so the
  // padding does not outlive the icon — and then `Icon` never runs to complain. This sees
  // the value whatever the component does with it.
  //
  // Every string is read as an icon name, the empty one included. A role cannot be emptied
  // from here, so `''` is a value that failed to resolve rather than an intent to draw
  // nothing, and it used to be the one invalid string that passed without comment.
  const namesNoIcon = typeof icon === 'string' && !willRenderSlotContent(icon);

  assertEdsUsage(
    [namesNoIcon],
    `IconProvider: the \`${name}\` role is set to "${String(icon)}", which is not an EDS icon name, so nothing renders for it. Pass an icon name or a node.`,
  );

  // Handed back as nothing rather than passed along, so the bad name stops here. Returned
  // unchanged it reached `Icon` through whichever slot drew it, which reported the same
  // value again in weaker terms — and only from the components that got as far as rendering
  // it, so one bad override produced one warning or two depending on which component drew
  // it. `Icon` keeps its own check for callers that name an icon directly.
  return namesNoIcon ? undefined : icon;
}
