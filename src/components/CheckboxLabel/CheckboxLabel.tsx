import clsx from 'clsx';
import React from 'react';
import styles from './CheckboxLabel.module.css';

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
  size?: 'md' | 'lg';
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
  size = 'lg',
  disabled,
}: CheckboxLabelProps) => {
  const componentClassName = clsx(
    styles['label'],
    size === 'md' && styles['label--md'],
    size === 'lg' && styles['label--lg'],
    disabled && styles['label--disabled'],
    className,
  );
  return (
    <label
      className={componentClassName}
      data-bootstrap-override="label"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};
