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
 * The glyph each status is drawn with, kept as its own map because `Status` is a union
 * these four have to cover exactly. Spread into the defaults below rather than written out
 * there, so a status added to `Status` fails to compile here instead of silently having no
 * icon.
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
 * This is the only way to change those icons. The components that draw them do not take a
 * per-instance override, because a role that renders one glyph in one place and a
 * different one two screens over stops reading as that role at all.
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

  const value = useMemo(() => ({ ...inherited, ...icons }), [inherited, icons]);

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
