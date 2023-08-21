import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
 * `import {DrawerBody} from "@chanzuckerberg/eds";`
 *
 * The main center content of the Drawer component.
 * @deprecated
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
