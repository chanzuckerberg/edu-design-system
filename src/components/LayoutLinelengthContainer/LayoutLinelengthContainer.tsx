import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './LayoutLinelengthContainer.module.css';

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
export const LayoutLinelengthContainer: React.FC<Props> = ({
  className,
  children,
  ...other
}) => {
  const componentClassName = clsx(
    styles['layout-linelength-container'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
