import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './ButtonGroup.module.css';

export interface Props {
  /**
   * Align variations for ButtonGroup
   * - **right** aligns the button group along the right side of its container
   */
  align?: 'right';
  /**
   * Weather the buttons have spacing or if they're attached/segmented
   * Defaults to false
   */
  attached?: boolean;
  /**
   * Behavioral variations for ButtonGroup.
   * - **responsive** results in a ButtonGroup that stacks on small screens, but displays side by side on larger screens
   * - **stacked** results in a ButtonGroup that stacks on all screen sizes
   */
  behavior?: 'responsive' | 'stacked';
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
export const ButtonGroup = ({
  align,
  children,
  className,
  behavior,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['button-group'],
    className,
    behavior === 'responsive' && styles['button-group--responsive'],
    behavior === 'stacked' && styles['button-group--stacked'],
    align === 'right' && styles['button-group--align-right'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
