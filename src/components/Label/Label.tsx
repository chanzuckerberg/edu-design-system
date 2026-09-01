import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

import Text from '../Text';
import styles from './Label.module.css';

export type LabelProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Indicates disabled state of the input.
   */
  disabled?: boolean;
  /**
   * HTML `for` attribute, which maps the label to an associated input `id`
   */
  htmlFor?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter?: ReactNode;
  /**
   * Indicates that field is required for form to be successfully submitted.
   */
  required?: boolean;
  /**
   * The label text string
   */
  text: ReactNode;
};

/**
 * ## Usage
 *
 * Text styling used for selection controls like `Radio` and `Checkbox`. This component should not
 * generally be used, except on custom radio or checkbox components.
 *
 * Pair `htmlFor` with the control's `id` so the label and the control are associated. `Radio.Label`
 * is this component, and `Checkbox` and `Toggle` render it for you.
 *
 * `labelAfter` is a trailing slot beside the label text, typically used for a `Tooltip`.
 */
export const Label = ({
  className,
  disabled,
  htmlFor,
  id,
  labelAfter,
  required = true,
  text,
  ...other
}: LabelProps) => {
  const componentClassName = clsx(
    styles['label'],
    disabled && styles['label--disabled'],
    className,
  );

  return (
    <label className={componentClassName} htmlFor={htmlFor} id={id} {...other}>
      <Text as="span" preset="body-md">
        {text}
      </Text>{' '}
      {labelAfter && (
        <Text as="span" preset="body-sm">
          {labelAfter}
        </Text>
      )}
    </label>
  );
};

Label.displayName = 'Label';
