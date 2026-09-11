import React, { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { IconName } from '../../icons/spritemap';
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
 * so they can point at a single role's default without hard-coding the glyph.
 */
export const defaultSemanticIcons: SemanticIconMap = {
  back: 'chevron-left',
  close: 'close',
  collapse: 'chevron-up',
  copy: 'copy',
  expand: 'chevron-down',
  forward: 'chevron-right',
  menu: 'menu',
  'open-in-new': 'open-in-new',
  ...statusIcons,
};

/**
 * Holds the semantic icon set in effect for the tree below it.
 *
 * Defaults to the full EDS set, so a component reading from it renders an icon whether or
 * not the app wrapped anything in an `IconProvider`.
 */
const IconProviderContext =
  createContext<SemanticIconMap>(defaultSemanticIcons);

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
   * Two values mean something particular, which is what lets a map be built conditionally:
   *
   * - `undefined` reads the same as leaving the role out, so it inherits. A conditional
   *   entry like `{ close: isDismissible ? <Custom /> : undefined }` falls back to the icon
   *   from above rather than blanking the role.
   * - `null` and `false` draw nothing, matching how the content slots read them. Use one to
   *   turn a role off deliberately.
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

    // A role set to `undefined` means the same as a role left out: inherit it. Spreading
    // `icons` wholesale would instead write the `undefined` over the inherited value, so a
    // conditional map like `{ close: isDismissible ? <X /> : undefined }` would blank every
    // close affordance in the tree rather than falling back.
    //
    // `null` and `false` are left alone. Those are how `IconSlot` spells "render nothing",
    // so an app can still use them to turn a role off deliberately.
    for (const role of Object.keys(icons ?? {}) as SemanticIconName[]) {
      const icon = icons?.[role];

      if (icon !== undefined) {
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
 * @param name the semantic role being drawn, or `undefined` to draw nothing
 * @returns the icon name or node to hand to `IconSlot`
 */
export function useSemanticIcon(
  name: SemanticIconName | undefined,
): IconOrContent {
  const icons = useContext(IconProviderContext);

  return name ? icons[name] : undefined;
}
