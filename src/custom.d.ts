declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css';

declare module '*.md';

// Reference https://github.com/tshelburne/react-children-by-type
declare module 'react-children-by-type' {
  import type * as React from 'react';

  export function allByType<P>(
    children: React.ReactNode,
    type: React.JSXElementConstructor<P>,
  ): React.ReactElement<P>[];

  export function oneByType<P>(
    children: React.ReactNode,
    type: React.JSXElementConstructor<P>,
  ): React.ReactElement<P>;

  export function withoutTypes<P>(
    children: React.ReactNode,
    ...types: React.JSXElementConstructor<P>[]
  ): React.ReactElement<P>;
}

/**
 * `@types/react-syntax-highlighter` declares this path without a file
 * extension, but the package has no `exports` map, so Node's ESM resolver
 * needs the explicit `/index.js`. Re-export the typed module under the
 * specifier we actually import.
 */
declare module 'react-syntax-highlighter/dist/esm/styles/prism/index.js' {
  export * from 'react-syntax-highlighter/dist/esm/styles/prism';
}
