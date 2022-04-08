import clsx from 'clsx';
import React from 'react';
import { useUID } from 'react-uid';
import styles from './Checkbox.module.css';
import CheckboxInput, { svgStyle } from '../CheckboxInput';
import type { CheckboxInputProps } from '../CheckboxInput';

type LabelProps = {
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
  size?: 'small' | 'medium';
};

// id is required in CheckboxInputProps but optional in CheckboxProps, so we
// first remove `id` from CheckboxInputProps before intersecting.
export type CheckboxProps = Omit<CheckboxInputProps, 'id'> & {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Visible text label for the checkbox.
   */
  label?: React.ReactNode;
  /**
   * Size of the checkbox label.
   */
  size?: LabelProps['size'];
};

/**
 * ```ts
 * import {Checkbox} from "@chanzuckerberg/eds-components";
 * ```
 * ```ts
 * import Checkbox, {CheckboxInput, Label} from '@chanzuckerberg/eds-components/lib/Checkbox';
 * ```
 *
 * Checkbox control indicating if something is selected or unselected.
 *
 * Requires either a visible label or an accessible name.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    // All remaining props are passed to the `input` element
    const { className, id, label, size, ...other } = props;

    // When possible, use a visible label through the `label` prop instead.
    // In rare cases where there's no visible label, you must provide an
    // `aria-label` for screen readers.
    if (
      process.env.NODE_ENV !== 'production' &&
      !label &&
      !props['aria-label']
    ) {
      throw new Error('You must provide a visible label or aria-label');
    }
    const generatedId = useUID();
    const checkboxId = id || generatedId;

    return (
      <div className={clsx(className, styles['checkbox'])}>
        <CheckboxInput id={checkboxId} ref={ref} {...other} />
        {label && <Label htmlFor={checkboxId} size={size} text={label} />}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

/**
 * Label element, exported for greater flexibility. Can be used with any form input.
 */
export const Label = ({
  text,
  className,
  htmlFor,
  size = 'medium',
}: LabelProps) => {
  return (
    <label
      className={clsx(
        className,
        styles['label'],
        size === 'small' && styles['label--sm'],
        size === 'medium' && styles['label--md'],
      )}
      data-bootstrap-override="label"
      htmlFor={htmlFor}
      style={svgStyle}
    >
      {text}
    </label>
  );
};
