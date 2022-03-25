import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from '../Popover/Popover.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. `PopoverHeader`, `PopoverBody`, and `ModelFooter` are the only permissible children of the Popover
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * onClick function that can be passed in
   */
  onClick?: MouseEventHandler;
  /**
   * Slot for node to appear to the right of the page title. Typically used to include a Badge, Button, or other component
   */
  titleAfter?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const PopoverHeader: React.FC<Props> = ({
  className,
  onClick,
  titleAfter,
  children,
  ...other
}) => {
  const componentClassName = clsx([styles['popover__header']], className, {});
  return (
    <header className={componentClassName} {...other}>
      <div className={styles['popover__header-content']}>
        {children}
        {titleAfter && (
          <span className={styles['popover__header-title-after']}>
            {titleAfter}
          </span>
        )}
      </div>
    </header>
  );
};
