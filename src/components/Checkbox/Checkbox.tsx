import clsx from 'clsx';
import React, {
  forwardRef,
  useEffect,
  useRef,
  type RefObject,
  type ForwardedRef,
} from 'react';
import type { ReactNode } from 'react';

import type { EitherInclusive } from '../../util/utility-types';

import Label from '../Label';
import Text from '../Text';

import styles from './Checkbox.module.css';

type CheckboxHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'id' | 'size'
>;

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

function useForwardedRef<T>(ref: ForwardedRef<T>): RefObject<T | null> {
  const innerRef = useRef<T>(null);

  // Keep the internal and forwarded refs in sync.
  useEffect(() => {
    if (!ref) {
      return;
    } else if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  }, [ref]);

  return innerRef;
}

/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ checked, className, disabled, indeterminate, ...other }, ref) => {
    const forwardedRef = useForwardedRef(ref);

    // Make this checkbox indeterminate. Can only be done with JS for some reason.
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes.
    useEffect(() => {
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
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standard | Basic binary control (checked/unchecked). | Accept terms and conditions. Enable/disable a setting. |
 * | Multi-select | Used in a group to select multiple items independently. | Filter lists. Select options in forms. |
 * | Tri-state | Supports three states: checked, unchecked, and indeterminate. | Parent checkbox for nested options. |
 * | Nested | A parent checkbox controls its children; the parent reflects checked, unchecked, or indeterminate. | Selections within categories. |
 * | Inline | Placed within text or small UI elements. | Inline acknowledgement text. Compact forms. |
 * | Disabled | Non-interactive checkbox indicating a fixed or unavailable state. | Unavailable options. Permissions indicator. |
 * | Table | Selects lines or entries in a table. | Rows to perform an action on. |
 *
 * ### Best Practices
 *
 * * By default, checkboxes should have labels.
 * * Checkboxes may have no visible label if they are part of another component, such as a table row.
 * * Checkbox group labels can include an "optional" or "required" hint.
 *
 * ## Interaction
 *
 * Both the checkbox and its label(s) can trigger the interaction; do not limit the touch target to
 * the checkbox alone. Checks work independently of one another—selecting one does not deselect the
 * others unless they have a parent-child relationship. Consider using a radio button if checking one
 * option should deselect all others.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use group labels to describe the action taken within a group of checkboxes.
 * * Keep labels to a few words (ideally 3 or fewer) and use sentence case.
 * * Use the first person when a checkbox indicates the user accepting something, e.g. "I agree to...".
 * * Only use helper text when necessary to explain the action or its results.
 * * In error messages, describe the issue and what to do about it.
 *
 * ### Don'ts
 *
 * * Use helper text by default; consider better group labels first.
 * * Use end punctuation on group labels.
 * * Truncate labels.
 */
export const Checkbox = Object.assign(
  forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    // All remaining props are passed to the `input` element
    const { className, id, isError, label, disabled, subLabel, ...other } =
      props;

    const generatedId = React.useId();
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
        {(label || subLabel) && (
          <div className={styles['checkbox__labels']}>
            {label && (
              <Label
                className={styles['checkbox__label']}
                disabled={disabled}
                htmlFor={checkboxId}
                text={label}
              />
            )}
            {subLabel && (
              <Text
                as="span"
                className={clsx(
                  styles['checkbox__sub-label'],
                  disabled && styles['checkbox--is-disabled'],
                )}
                preset="body-sm"
              >
                {subLabel}
              </Text>
            )}
          </div>
        )}
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
