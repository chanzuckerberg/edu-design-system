import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

export type Props = {
  /**
   * Child node(s) that can be nested inside component. `DrawerHeader`, `DrawerBody`, and `ModelFooter` are the only permissible children of the Drawer
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * `import {DrawerFooter} from "@chanzuckerberg/eds";`
 *
 * The footer content of the Drawer component. Usually houses interactible component controlling the Drawer functionality.
 * @deprecated
 */
export const DrawerFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx('drawer__footer', className);
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};
