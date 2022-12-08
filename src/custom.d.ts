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
}
