import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Footer for the Popover component.
 */
export const PopoverFooter: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx(styles['popover__footer'], className, {});
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};
