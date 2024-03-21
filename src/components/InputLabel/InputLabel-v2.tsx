import clsx from 'clsx';
import React, { type ReactNode } from 'react';
import type { Size } from '../../util/variant-types';
import styles from './InputLabel-v2.module.css';

export type InputLabelProps = {
  // Component API
  /**
   * Text to render in label.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * ID of input that label is associated with.
   */
  htmlFor: string;
  // Design API
  /**
   * Size of the label.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'md' | 'lg'>;
  /**
   * Indicates disabled state of the input.
   */
  disabled?: boolean;
};

/**
 * `import {InputLabel} from "@chanzuckerberg/eds";`
 *
 * Label associated with an input element such as a radio or checkbox.
 */
export const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ children, className, htmlFor, size = 'lg', disabled }, ref) => {
    const componentClassName = clsx(
      styles['label'],
      size === 'md' && styles['label--md'],
      size === 'lg' && styles['label--lg'],
      disabled && styles['label--disabled'],
      className,
    );
    return (
      <label className={componentClassName} htmlFor={htmlFor} ref={ref}>
        {children}
      </label>
    );
  },
);

InputLabel.displayName = 'InputLabel';
