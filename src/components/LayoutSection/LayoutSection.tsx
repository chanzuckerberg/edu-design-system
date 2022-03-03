import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../Layout/Layout.module.css';

export interface Props {
  /**
   * Layout section region
   */
  region?: 'main' | 'sidebar';
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
export const LayoutSection: React.FC<Props> = ({
  children,
  className,
  region,
  ...other
}) => {
  const componentClassName = clsx(styles['layout__section'], className, {
    [styles['layout__section--main']]: region === 'main',
    [styles['layout__section--sidebar']]: region === 'sidebar',
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
