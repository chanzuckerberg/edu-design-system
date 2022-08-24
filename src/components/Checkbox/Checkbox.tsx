import clsx from 'clsx';
import React from 'react';
import { useUID } from 'react-uid';
import styles from './Checkbox.module.css';
import CheckboxInput, { CheckboxInputProps } from '../CheckboxInput';
import CheckboxLabel, { CheckboxLabelProps } from '../CheckboxLabel';

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
  size?: CheckboxLabelProps['size'];
};

/**
 * ```ts
 * import {Checkbox} from "@chanzuckerberg/eds";
 * ```
 * ```ts
 * import {CheckboxInput, CheckboxLabel} from '@chanzuckerberg/eds';
 * ```
 *
 * Checkbox control indicating if something is selected or unselected.
 *
 * Requires either a visible label or an accessible name.
 *
 * NOTE: usually, we would re-export subcomponents with
 *   Checkbox.Input = CheckboxInput;
 *   Checkbox.Label = CheckboxLabel;
 * but this does not compile with Typescript since Checkbox itself is a
 * forwarded ref component. Thus Input and Label must be imported separately.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    // All remaining props are passed to the `input` element
    const { className, id, label, size = 'lg', disabled, ...other } = props;

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

    const componentClassName = clsx(styles['checkbox'], className);

    return (
      <div className={componentClassName}>
        <CheckboxInput
          disabled={disabled}
          id={checkboxId}
          ref={ref}
          {...other}
        />
        {label && (
          <CheckboxLabel disabled={disabled} htmlFor={checkboxId} size={size}>
            {label}
          </CheckboxLabel>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
