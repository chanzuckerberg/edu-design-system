import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './DropdownMenu.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const DropdownMenu: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx(styles['eds-c-dropdown'], className);
  return (
    <div className={componentClassName} {...other}>
      <ul className={styles['eds-c-dropdown__list']}>{children}</ul>
    </div>
  );
};
