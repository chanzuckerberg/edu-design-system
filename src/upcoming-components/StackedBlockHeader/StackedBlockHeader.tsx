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
export const StackedBlockHeader = ({
  children,
  className,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['stacked-block__header'],
    className,
    {},
  );
  return (
    <header className={componentClassName} {...other}>
      {children}
    </header>
  );
};
