import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../StackedBlock/StackedBlock.module.css';

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
export const StackedBlockBody: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx(styles['stacked-block__body'], className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
