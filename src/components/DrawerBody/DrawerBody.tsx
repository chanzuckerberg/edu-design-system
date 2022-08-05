import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Drawer/Drawer.module.css';

export type Props = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DrawerBody} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const DrawerBody = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    const componentClassName = clsx(styles['drawer__body'], className);
    return (
      <div className={componentClassName} ref={ref}>
        {children}
      </div>
    );
  },
);
DrawerBody.displayName = 'DrawerBody';
