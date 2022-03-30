import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './KeyValueTable.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles component that fills the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Available _stylistic_ variations available for the component
   */
  variant?: 'lined';
}

/**
 * Primary UI component for user interaction
 */
export const KeyValueTable: React.FC<Props> = ({
  children,
  className,
  variant,
  fullWidth,
  ...other
}) => {
  const componentClassName = clsx(
    styles['key-value-table'],
    className,
    variant === 'lined' && styles['key-value-table--lined'],
    fullWidth && styles['key-value-table--full-width'],
  );
  return (
    <table className={componentClassName} {...other}>
      <tbody className={styles['key-value-table__body']}>{children}</tbody>
    </table>
  );
};
