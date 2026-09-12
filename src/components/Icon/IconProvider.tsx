import React, { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { willRenderSlotContent } from './IconSlot';
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
   * Every entry has to draw something. An icon name the spritemap does not have, or a value
   * that renders nothing — `null`, `false`, `undefined`, `[]`, `<></>` — throws rather than
   * quietly falling back, because a role resolving to nothing leaves whatever draws it in a
   * state no component can make sense of, and inheriting instead would hide the mistake
   * behind an icon nobody chose.
   *
   * So to leave a role alone, leave it out. Build a conditional override by adding the key
   * only when it applies:
   *
   * ```tsx
   * <IconProvider icons={{ ...(isCustom && { close: <Custom /> }) }}>
   * ```
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
/**
 * Whether a key in a consumer's map names a role this provider knows.
 *
 * An own-property check against the shipped defaults, which is the list of roles. Both
 * halves matter: a key that is not a role has to be dropped rather than merged, or an
 * untyped `{ toString: 'custom' }` would put `toString` on the map as an own property and
 * let it be read back as though it were a role.
 */
function isSemanticIconName(key: string): key is SemanticIconName {
  return Object.prototype.hasOwnProperty.call(defaultSemanticIcons, key);
}

/**
 * Names an empty value in an error, since `String(value)` alone reads poorly for the ones
 * that turn up here: an array or a fragment both stringify to something unhelpful.
 */
function describeEmpty(icon: unknown): string {
  if (Array.isArray(icon)) {
    return 'an array with nothing in it';
  }

  if (React.isValidElement(icon)) {
    return 'an element with no children';
  }

  return `\`${String(icon)}\``;
}

export const IconProvider = ({ children, icons }: IconProviderProps) => {
  const inherited = useContext(IconProviderContext);

  const unknownRoles = Object.keys(icons ?? {}).filter(
    (key) => !isSemanticIconName(key),
  );

  // A misspelled role used to do nothing at all, in silence: the key was merged, no
  // component ever asked for it, and the icon the consumer meant to change kept its
  // default. Asserted out here rather than in the merge below, so it is not a side effect
  // inside a `useMemo` that React may run more than once.
  assertEdsUsage(
    [unknownRoles.length > 0],
    `IconProvider: ${unknownRoles
      .map((role) => `"${role}"`)
      .join(
        ', ',
      )} ${unknownRoles.length === 1 ? 'is not a semantic icon role' : 'are not semantic icon roles'}, so ${unknownRoles.length === 1 ? 'it does' : 'they do'} nothing. The roles are: ${Object.keys(
      defaultSemanticIcons,
    )
      .sort()
      .join(', ')}.`,
  );

  // Every entry has to draw something. A role that resolves to nothing leaves whatever
  // draws it in a state no component can make sense of — most of these sit in controls
  // whose only content is the icon, so an empty one is a button still clickable and no
  // longer visible — and inheriting instead would hide the mistake behind an icon the
  // consumer did not choose. Thrown rather than warned because it is a configuration error
  // with one fix, and because a provider is set up once at a root: it surfaces on the first
  // render in development long before it could reach anyone.
  const emptyRole = Object.keys(icons ?? {}).find(
    (key) => isSemanticIconName(key) && !willRenderSlotContent(icons?.[key]),
  );

  if (emptyRole !== undefined) {
    const icon = icons?.[emptyRole as SemanticIconName];
    const fault =
      typeof icon === 'string'
        ? `is set to "${icon}", which is not an EDS icon name`
        : `is set to ${describeEmpty(icon)}, which renders nothing`;

    throw new Error(
      `IconProvider: the \`${emptyRole}\` role ${fault}. Every entry has to be an EDS icon name or content that renders; a role cannot be emptied here. To leave a role as it is, omit it rather than passing an empty value: \`{...(isCustom && { ${emptyRole}: <Custom /> })}\` rather than \`{ ${emptyRole}: isCustom ? <Custom /> : null }\`.`,
    );
  }

  const value = useMemo(() => {
    const merged = { ...inherited };

    // Safe to take as given: anything that would not render threw above, and a key that is
    // not a role was reported and is skipped here.
    for (const key of Object.keys(icons ?? {})) {
      if (isSemanticIconName(key)) {
        merged[key] = icons?.[key];
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

  // No check on the value: `IconProvider` throws for an entry that would not render, and
  // the defaults are all real icons, so anything reaching here draws something. Only the
  // role name can be wrong at this point, which is what the assert above covers.
  return isRole ? icons[name] : undefined;
}
