import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Accordion.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Inverted variant
   * 1) Used for dark backgrounds
   */
  inverted?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({
  children,
  className,
  inverted,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['accordion'], className, {
    [styles['accordion--inverted']]: inverted === true,
  });
  return (
    <dl className={componentClassName} {...other}>
      {children}
    </dl>
  );
};
