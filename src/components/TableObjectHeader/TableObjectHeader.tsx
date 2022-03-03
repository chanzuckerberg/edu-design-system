import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../TableObject/TableObject.module.css';

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
 * Primary UI component for user interaction
 */
export const TableObjectHeader: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx(
    styles['table-object__header'],
    className,
    {},
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
