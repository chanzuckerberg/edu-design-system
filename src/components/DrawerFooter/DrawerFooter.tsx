import clsx from 'clsx';
import React, { ReactNode } from 'react';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DrawerFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const DrawerFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx('drawer__footer', className);
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};
