import clsx from 'clsx';
import React from 'react';
import styles from './CheckboxLabel.module.css';
import { svgStyle } from '../CheckboxInput';

export type CheckboxLabelProps = {
  /**
   * Text to render in label.
   */
  text: React.ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * ID of input that label is associated with.
   */
  htmlFor: string;
  /**
   * Size of the checkbox label.
   */
  size?: 'sm' | 'md';
  /**
   * Indicates disabled state of the checkbox.
   */
  disabled?: boolean;
};

/**
 * Label element, exported for greater flexibility. Can be used with any form input.
 */
export const CheckboxLabel = ({
  text,
  className,
  htmlFor,
  size = 'md',
  disabled,
}: CheckboxLabelProps) => {
  return (
    <label
      className={clsx(
        className,
        styles['label'],
        size === 'sm' && styles['label--sm'],
        size === 'md' && styles['label--md'],
        disabled && styles['label--disabled'],
      )}
      data-bootstrap-override="label"
      htmlFor={htmlFor}
      style={svgStyle}
    >
      {text}
    </label>
  );
};
