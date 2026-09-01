import clsx from 'clsx';
import React, { type ReactNode } from 'react';
import type { Size } from '../../util/variant-types';
import Text from '../Text';

import styles from './FieldLabel.module.css';

export type FieldLabelProps = {
  // Component API
  /**
   * Text to render in label.
   */
  children: ReactNode;
  /**
   * ID of the element
   */
  id?: string;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * ID of input that label is associated with.
   */
  htmlFor?: string;
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
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
};

/**
 * ## Usage
 *
 * `FieldLabel` is used to add a label to EDS's controls (e.g., `InputField`, `TextareaField`,
 * `Select`, `Combobox`). This component should not be used in isolation, but can be used to label
 * any custom input controls.
 *
 * Pair `htmlFor` with the control's `id` so the label and the control are associated. The EDS
 * controls that render a label for you also expose it as a subcomponent, so `InputField.Label` and
 * `TextareaField.Label` are this component.
 *
 * For guidance on how to word a label, see the do's and don'ts on the control itself (for example,
 * `InputField`).
 */
export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ children, className, htmlFor, size = 'lg', disabled, ...other }, ref) => {
    const componentClassName = clsx(
      styles['label'],
      size && styles[`label--${size}`],
      disabled && styles['label--disabled'],
      className,
    );
    return (
      <label
        aria-disabled={disabled ?? undefined}
        className={componentClassName}
        htmlFor={htmlFor}
        ref={ref}
        {...other}
      >
        <Text as="span" preset={`label-${size}`}>
          {children}
        </Text>
      </label>
    );
  },
);

FieldLabel.displayName = 'FieldLabel';
