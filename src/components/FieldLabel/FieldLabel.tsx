import clsx from 'clsx';
import React, { type ReactNode } from 'react';
import type { Size } from '../../util/variant-types';
import styles from './FieldLabel.module.css';

export type FieldLabelProps = {
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
   * Indicates disabled state of the input.
   */
  disabled?: boolean;
  /**
   * Size of the label.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'md' | 'lg'>;
};

/**
 * `import {FieldLabel} from "@chanzuckerberg/eds";`
 *
 * Label associated with an input element or field.
 */
export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ children, className, htmlFor, size = 'lg', disabled }, ref) => {
    const componentClassName = clsx(
      styles['label'],
      size === 'md' && styles['label--md'],
      size === 'lg' && styles['label--lg'],
      disabled && styles['label--disabled'],
      className,
    );
    return (
      <label
        aria-disabled={disabled ?? undefined}
        className={componentClassName}
        htmlFor={htmlFor}
        ref={ref}
      >
        {children}
      </label>
    );
  },
);

FieldLabel.displayName = 'FieldLabel';
