import type { ReactNode } from 'react';
import type { IconName } from '../components/Icon';

/**
 * HeadlessUI 1.6.0 changed the way components were typed, such that React.ComponentProps no longer correctly inferred props https://github.com/tailwindlabs/headlessui/issues/1394#issuecomment-1120911944.
 * Workaround is to declare own utility type https://github.com/tailwindlabs/headlessui/discussions/601#discussioncomment-1959631
 * Required since React.ComponentProps doesn't think it's a JSXElementConstructor/ReactElement. https://github.com/FB-PLP/traject/pull/11929/files#r948531375
 */
export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

/**
 * Given two object types, only the first is a valid object type.
 *
 * @example
 * Given A { keyA: string } and B { keyB: number }, Only<A, B> becomes
 *
 * { keyA: string, keyB?: never }
 */
export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

/**
 * Given two object types, specify that only one of them can be in
 * the structure at a given time.
 */
export type EitherExclusive<T, U> = Only<T, U> | Only<U, T>;

/**
 * Given two object types, specify that one or both of them can be in
 * the structure at a given time.
 *
 * TypeScript will hint to apply the first type, T, if both are missing
 */
export type EitherInclusive<T, U> = EitherExclusive<T, U> | (T & U);

/**
 * The return type of React.forwardRef, and utilized similarly by passing <RefAttachedElement, Props>.
 * Used to be extended to include sub-components. i.e.: type InputFieldType = ForwardedRefComponent<HTMLInputElement, Props> * {Input?: typeof Input};
 */
export type ForwardedRefComponent<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

/**
 * Utility type used when defining custom render props. Uses a type parameter to define the
 * members of the render prop when not a `ReactNode`.
 */
export type RenderProps<RenderPropArgs> = {
  children: ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

/**
 * Navigation Utility Types
 */
/**
 * A nav group is a set of navigation items of the types listed below
 */
export type NavGroup = {
  /**
   * Identifier for the nav group (used to distinguish it from other navigation groups)
   */
  name: string;
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavSeparator | NavMenu | NavTree)[];
};

/**
 * Abstract type for every possible navigation bar item in an `AppHeader`. This should not be used directly.
 */
export type NavItem = {
  /**
   * Identifier for the nav item (used to distinguish it from other navigation items)
   */
  name: string;
  /**
   * Icon from the set of defined EDS icon set, when `iconLayout` is used.
   */
  icon?: IconName;

  /**
   * Allows configuration of the icon's positioning within `AppHeader`.
   *
   * - When set to a value besides `"none"`, an icon must be specified.
   * - When `"icon-only"`, `aria-label` must be given a value.
   */
  iconLayout?: 'none' | 'left' | 'right' | 'icon-only';
  /**
   * Support for metadata in nav item entries
   */
  meta?: { [key: string]: string | number | boolean };
};

/**
 * Nav links are a type of nav item, that can be used for directing users to different locations.
 * They should not be used for modifying or acting on the contents of a given page.
 */
export type NavLink = NavItem & {
  /**
   * Defines the type of nav item as a link, with the appropriate / related properties.
   */
  type: 'link';
  /**
   * Link: whether the associated nav item is marking the current page / location
   */
  isCurrent?: boolean;
  /**
   * Link: marks when an item will navigate to an external resource.
   */
  isExternal?: boolean;
  /**
   * Link: the target URL for the navigation item
   */
  href: string;
};

/**
 * Nav buttons are a type of nav item, that can be wired to trigger an interaction. They should not
 * be used for navigation.
 */
export type NavButton = NavItem & {
  /**
   * Defines the type of nav item as a button, with the appropriate / related properties.
   */
  type: 'button';
};

/**
 * Separators exist as a separate and distinct Nav item, for maximum customizability
 */
export type NavSeparator = NavItem & {
  type: 'separator';
};

/**
 * Nav menus are a set of nested navigation items (of the same type as a NavGroup's navItems)
 */
export type NavMenu = NavItem & {
  type: 'menu';
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavMenuLabel | NavSeparator)[];
};

/**
 * Nav trees are just like menus but appear as expanded when in a vertical orientation
 */
export type NavTree = NavItem & {
  type: 'tree';
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavSeparator)[];
};

/**
 * Menus can have non-interactive labels
 */
export type NavMenuLabel = NavItem & {
  type: 'label';
};
