import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';

import styles from './PopoverContainer.module.css';

export type PopoverContainerProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
};

export const PopoverContainer = React.forwardRef<
  HTMLDivElement,
  PopoverContainerProps
>(({ className, children, ...other }, ref) => {
  const componentClassName = clsx(styles['popover-container'], className);

  return (
    <div className={componentClassName} {...other} ref={ref}>
      {children}
    </div>
  );
});

PopoverContainer.displayName = 'PopoverContainer';
