/**
 * HeadlessUI 1.6.0 changed the way components were typed, such that React.ComponentProps no longer correctly inferred props https://github.com/tailwindlabs/headlessui/issues/1394#issuecomment-1120911944.
 * Workaround is to declare own utility type https://github.com/tailwindlabs/headlessui/discussions/601#discussioncomment-1959631
 * Required since React.ComponentProps doesn't think it's a JSXElementConstructor/ReactElement. https://github.com/FB-PLP/traject/pull/11929/files#r948531375
 */
export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
