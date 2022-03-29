import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './DefinitionList.module.css';

export interface Props {
  /**
   * Behavioral variations
   */
  behavior?: 'horizontal';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Available size variations for the button
   */
  size?: 'sm';
}

/**
 * Primary UI component for user interaction
 */
export const DefinitionList = ({
  behavior,
  className,
  children,
  size,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['definition-list'], className, {
    [styles['definition-list--horizontal']]: behavior === 'horizontal',
    [styles['definition-list--sm']]: size === 'sm',
  });
  return (
    <dl className={componentClassName} {...other}>
      {children}
    </dl>
  );
};
