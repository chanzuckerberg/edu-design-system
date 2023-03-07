import clsx from 'clsx';
import React from 'react';
import useForwardedRef from '../../util/useForwardedRef';
import styles from './CheckboxInput.module.css';

type CheckboxHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'id' | 'size'
>;

export type CheckboxInputProps = CheckboxHTMLElementProps & {
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
};

/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  CheckboxInputProps
>(({ checked, className, disabled, indeterminate, ...other }, ref) => {
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
});

CheckboxInput.displayName = 'CheckboxInput';
