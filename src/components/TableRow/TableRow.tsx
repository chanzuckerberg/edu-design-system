import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Table/Table.module.css';

export interface Props {
  /**
   * Behavior variations:
   * - **clickable** yields a table row that has a click event attached to it
   */
  behavior?: 'clickable';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Stylistic variations:
   * - **bare** yields a table row without any bottom border
   */
  variant?: 'bare';
}

/**
 * Primary UI component for user interaction
 */
export const TableRow: React.FC<Props> = ({
  children,
  className,
  variant,
  behavior,
  ...other
}) => {
  const componentClassName = clsx(styles['table__row'], className, {
    [styles['table__row--bare']]: variant === 'bare',
    [styles['table__row--clickable']]: behavior === 'clickable',
  });

  return (
    <tr className={componentClassName} {...other}>
      {children}
    </tr>
  );
};
