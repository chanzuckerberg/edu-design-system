import * as React from 'react';
import type { ReactNode } from 'react';

type ReactChildArray = ReturnType<typeof React.Children.toArray>;

export function flattenReactChildren(children: ReactNode): ReactChildArray {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce((flatChildren: ReactChildArray, child) => {
    if ((child as React.ReactElement<any>).type === React.Fragment) {
      return flatChildren.concat(
        flattenReactChildren((child as React.ReactElement<any>).props.children),
      );
    }
    flatChildren.push(child);
    return flatChildren;
  }, []);
}
