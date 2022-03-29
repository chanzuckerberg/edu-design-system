import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Layout/Layout.module.css';

export interface Props {
  /**
   * Behavioral variations
   */
  behavior?: 'expandable';
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Layout section region
   */
  region?: 'main' | 'sidebar';
}

/**
 * Primary UI component for user interaction
 */
export const LayoutSection: React.FC<Props> = ({
  behavior,
  children,
  className,
  region,
  ...other
}) => {
  const componentClassName = clsx(styles['layout__section'], className, {
    [styles['layout__section--main']]: region === 'main',
    [styles['layout__section--sidebar']]: region === 'sidebar',
    [styles['layout-section--expandable']]: behavior === 'expandable',
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
