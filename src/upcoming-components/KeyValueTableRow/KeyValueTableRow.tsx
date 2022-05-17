import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../KeyValueTable/KeyValueTable.module.css';

export interface Props {
  /**
   * Row key
   * 1) The key in the key value pair that sits on the left
   */
  rowKey?: ReactNode;
  /**
   * Row value
   * 1) The value in the key value pair that sits on the right
   */
  rowValue?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {KeyValueTableRow} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const KeyValueTableRow = ({
  className,
  rowKey,
  rowValue,
  ...other
}: Props) => {
  const componentClassName = clsx('key-value-table__row', className, {});
  return (
    <tr className={componentClassName} {...other}>
      <th className={styles['key-value-table__key']} scope="row">
        {rowKey}
      </th>
      <td className={styles['key-value-table__value']}>{rowValue}</td>
    </tr>
  );
};
