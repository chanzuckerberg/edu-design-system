import clsx from 'clsx';
import React from 'react';
import styles from './InputLabel.module.css';

export type InputLabelProps = {
  /**
   * Text to render in label.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * ID of input that label is associated with.
   */
  htmlFor: string;
  /**
   * Size of the label. Defaults to lg.
   */
  size?: 'md' | 'lg';
  /**
   * Indicates disabled state of the input.
   */
  disabled?: boolean;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {InputLabel} from "@chanzuckerberg/eds";`
 *
 * Label associated with an input element such as a radio or checkbox.
 */
export const InputLabel = ({
  children,
  className,
  htmlFor,
  size = 'lg',
  disabled,
}: InputLabelProps) => {
  const componentClassName = clsx(
    styles['label'],
    size === 'md' && styles['label--md'],
    size === 'lg' && styles['label--lg'],
    disabled && styles['label--disabled'],
    className,
  );
  return (
    <label className={componentClassName} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

InputLabel.displayName = 'InputLabel';
