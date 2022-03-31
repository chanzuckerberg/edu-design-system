import clsx from 'clsx';
import React, { ReactNode } from 'react';

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
export const TableHeader = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx('eds-c-table__header', className, {});

  return (
    <thead className={componentClassName} {...other}>
      {children}
    </thead>
  );
};
