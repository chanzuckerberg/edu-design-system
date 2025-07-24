import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import useForwardedRef from '../../util/useForwardedRef';
import { useId } from '../../util/useId';
import type { EitherInclusive } from '../../util/utility-types';

import Label from '../Label';
import Text from '../Text';

import styles from './Checkbox.module.css';

type CheckboxHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'id' | 'size'
>;

// TODO(next-major): rename sub-label props to be camelCase
type CheckboxInputProps = CheckboxHTMLElementProps & {
  // Component API
  /**
   * Whether checkbox is checked.
   */
  checked?: boolean;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Checkbox ID. Used to connect the input with a label for accessibility purposes.
   */
  id: string;
  /**
   * Whether the checkbox is "indeterminate". Neither checked nor unchecked. The most common use
   * case for this is when a checkbox has sub-checkboxes, to represent a "partially checked" state.
   */
  indeterminate?: boolean;
  // Design API
  /**
   * Whether the radio button is in an error state
   */
  isError?: boolean;
  /**
   * Additional descriptive text below the primary label, adding additional detail
   */
  subLabel?: ReactNode;
};

// id is required in CheckboxInputProps but optional in CheckboxProps, so we
// first remove `id` from CheckboxInputProps before intersecting.
type CheckboxProps = Omit<CheckboxInputProps, 'id'> & {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
} & EitherInclusive<
    {
      /**
       * Visible text label for the component.
       */
      label: ReactNode;
    },
    {
      /**
       * Aria-label to provide an accesible name for the text input if no visible label is provided.
       */
      'aria-label': string;
    }
  >;

/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ checked, className, disabled, indeterminate, ...other }, ref) => {
    const forwardedRef = useForwardedRef(ref);

    // Make this checkbox indeterminate. Can only be done with JS for some reason.
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes.
    React.useEffect(() => {
      if (forwardedRef.current) {
        forwardedRef.current.indeterminate = !!indeterminate;
      }
    }, [forwardedRef, indeterminate]);

    return (
      <input
        checked={checked}
        className={clsx(className, styles['checkbox__input'])}
        disabled={disabled}
        ref={forwardedRef}
        type="checkbox"
        {...other}
      />
    );
  },
);

/**
 * `import {Checkbox} from "@chanzuckerberg/eds";`
 *
 * Checkbox control indicating if something is selected or unselected. Uncontrolled by default,
 * it can be used in place of boolean-like form data.
 *
 * **NOTE**: Requires either a visible `label` or `aria-label` prop.
 */
export const Checkbox = Object.assign(
  forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    // All remaining props are passed to the `input` element
    const { className, id, isError, label, disabled, subLabel, ...other } =
      props;

    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div
        className={clsx(
          className,
          styles.checkbox,
          isError && styles['checkbox--error'],
        )}
      >
        <CheckboxInput
          disabled={disabled}
          id={checkboxId}
          ref={ref}
          {...other}
        />
        <div className={styles['checkbox__labels']}>
          {label && (
            <Label disabled={disabled} htmlFor={checkboxId} text={label} />
          )}
          {subLabel && (
            <Text
              as="span"
              className={styles['checkbox__sub-label']}
              preset="body-sm"
            >
              {subLabel}
            </Text>
          )}
        </div>
      </div>
    );
  }),
  {
    Input: CheckboxInput,
    Label: Label,
  },
);

Checkbox.displayName = 'Checkbox';
CheckboxInput.displayName = 'CheckboxInput';
