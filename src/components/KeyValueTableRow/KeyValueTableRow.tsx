import React, { ReactNode } from 'react';
import clsx from 'clsx';
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
 * Primary UI component for user interaction
 */
export const KeyValueTableRow: React.FC<Props> = ({
  className,
  rowKey,
  rowValue,
  ...other
}) => {
  const componentClassName = clsx('key-value-table__row', className, {});
  return (
    <tr className={componentClassName} {...other}>
      <th scope="row" className={styles['key-value-table__key']}>
        {rowKey}
      </th>
      <td className={styles['key-value-table__value']}>{rowValue}</td>
    </tr>
  );
};
