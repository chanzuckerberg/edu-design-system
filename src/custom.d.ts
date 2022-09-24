declare module '*.svg' {
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
  import type { ReactNode, JSXElementConstructor } from 'react';

  export function allByType<P>(
    children: ReactNode,
    type: JSXElementConstructor<P>,
  ): ReactElement<P>[];

  export function oneByType<P>(
    children: ReactNode,
    type: JSXElementConstructor<P>,
  ): ReactElement<P>;
}
