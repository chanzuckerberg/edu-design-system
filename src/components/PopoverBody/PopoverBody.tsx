import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Popover/Popover.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Body for the Popover component.
 */
export const PopoverBody: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx(styles['popover__body'], className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
