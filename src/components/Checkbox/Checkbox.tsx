import clsx from 'clsx';
import React, { useId } from 'react';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';
import type { CheckboxInputProps } from '../CheckboxInput';
import CheckboxInput from '../CheckboxInput';
import type { CheckboxLabelProps } from '../CheckboxLabel';
import CheckboxLabel from '../CheckboxLabel';
import styles from './Checkbox.module.css';

// id is required in CheckboxInputProps but optional in CheckboxProps, so we
// first remove `id` from CheckboxInputProps before intersecting.
export type CheckboxProps = Omit<CheckboxInputProps, 'id'> & {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Size of the checkbox label.
   */
  size?: CheckboxLabelProps['size'];
} & EitherInclusive<
    {
      /**
       * Visible text label for the component.
       */
      label: React.ReactNode;
    },
    {
      /**
       * Aria-label to provide an accesible name for the text input if no visible label is provided.
       */
      'aria-label': string;
    }
  >;

type CheckboxType = ForwardedRefComponent<HTMLInputElement, CheckboxProps> & {
  Input?: typeof CheckboxInput;
  Label?: typeof CheckboxLabel;
};

/**
 * `import {Checkbox} from "@chanzuckerberg/eds";`
 *
 * `import {CheckboxInput, CheckboxLabel} from '@chanzuckerberg/eds';`
 *
 * Checkbox control indicating if something is selected or unselected.
 *
 * NOTE: Requires either a visible label or `aria-label` prop.
 */
export const Checkbox: CheckboxType = React.forwardRef((props, ref) => {
  // All remaining props are passed to the `input` element
  const { className, id, label, size = 'lg', disabled, ...other } = props;

  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className={clsx(className, styles.checkbox)}>
      <CheckboxInput disabled={disabled} id={checkboxId} ref={ref} {...other} />
      {label && (
        <CheckboxLabel disabled={disabled} htmlFor={checkboxId} size={size}>
          {label}
        </CheckboxLabel>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.Input = CheckboxInput;
Checkbox.Label = CheckboxLabel;
