import type React from 'react';

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
 * Used to be extended to include subcomponents. i.e.: type InputFieldType = ForwardedRefComponent<HTMLInputElement, Props> * {Input?: typeof Input};
 */
export type ForwardedRefComponent<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

/**
 * Utility type used when defining custom render props. Uses a type parameter to define the
 * members of the render prop when not a `ReactNode`.
 */
export type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};
