import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './KeyValueTable.module.css';

export interface Props {
  /* Child node(s) that can be nested inside component */
  children: ReactNode;
  /* CSS class names that can be appended to the component. */
  className?: string;
  /* Toggles component that fills the full width of its container */
  fullWidth?: boolean;
  /* Available _stylistic_ variations available for the component */
  variant?: 'lined';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {KeyValueTable} from "@chanzuckerberg/eds";
 * ```
 *
 * Component presents the table for KeyValue items ,with styles defined based on the props variant and fullWidth and addtional
 * style props passed in.
 */
export const KeyValueTable = ({
  children,
  className,
  variant,
  fullWidth,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['key-value-table'],
    variant === 'lined' && styles['key-value-table--lined'],
    fullWidth && styles['key-value-table--full-width'],
    className,
  );
  return (
    <table className={componentClassName} {...other}>
      <tbody>{children}</tbody>
    </table>
  );
};
