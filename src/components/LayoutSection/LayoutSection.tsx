import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './LayoutSection.module.css';

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
export const LayoutSection = ({
  children,
  className,
  region,
  ...other
}: Props) => {
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
