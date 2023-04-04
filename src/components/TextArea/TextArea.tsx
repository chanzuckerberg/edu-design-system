import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import styles from './TextArea.module.css';

export interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * CSS class names that can be appended to the component
   */
  className?: string;
  /**
   * Text default contents of the field
   */
  children?: string;
  /**
   * Whether the disabled stat is active
   */
  disabled?: boolean;
  /**
   * Whether the error state is active
   */
  isError?: boolean;
}

/**
 * Base component, applying styles to a <textarea> tag
 */
export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      children,
      disabled,
      defaultValue = '',
      isError = false,
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['textarea'],
      isError && styles['error'],
      disabled && styles['textarea--disabled'],
      className,
    );

    return (
      <textarea
        className={componentClassName}
        defaultValue={children || defaultValue}
        ref={ref}
        {...other}
      ></textarea>
    );
  },
);
