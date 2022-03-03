import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Table.module.css';

export interface Props {
  /**
   * Behavior variations:
   * - **overflow-sm** Removes the min-width from the table for tables with few columns
   * - **overflow-lg** Used for tables with lots of table rows to overflow at a larger breakpoint
   */
  behavior?: 'overflow';
  /**
   * HTML caption property for table
   */
  caption: string;
  /**
   * Child node(s) that can be nested inside component. `TableHeader`, `TableFooter`, and `TableBody` are the only permissable children of Table
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Boolean to determine if caption should be displayed visibly.
   */
  hideCaption?: boolean;
  /**
   * Stylistic variations:
   * - **zebra** yields a data table alternating colors every row
   */
  variant?: 'zebra';
}

/**
 * Primary UI component for user interaction
 */
export const Table: React.FC<Props> = ({
  behavior,
  caption,
  children,
  className,
  hideCaption = true,
  variant,
  ...other
}) => {
  const componentClassName = clsx(styles['table'], className, {
    [styles['table--zebra']]: variant === 'zebra',
    [styles['table--overflow']]: behavior === 'overflow',
  });

  const captionClassName = clsx('table__caption', {
    [styles['u-is-vishidden']]: hideCaption,
  });

  return (
    <table className={componentClassName} {...other}>
      <caption className={captionClassName}>{caption}</caption>
      {children}
    </table>
  );
};
