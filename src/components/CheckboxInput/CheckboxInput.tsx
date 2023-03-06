import clsx from 'clsx';
import React from 'react';
import styles from './CheckboxInput.module.css';

type CheckboxHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'id' | 'size'
>;

export type CheckboxInputProps = CheckboxHTMLElementProps & {
  /**
   * Whether checkbox is checked. Defaults to false.
   * "indeterminate" can be used when a checkbox visually represents
   * a list of checkboxes that is "partially" checked.
   */
  checked?: boolean | 'indeterminate';
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Checkbox ID. Used to connect the input with a label for accessibility purposes.
   */
  id: string;
};

/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  CheckboxInputProps
>(({ checked, className, disabled, ...other }, ref) => {
  // Make indeterminate checkbox visually match the colors of a checked state, but announce itself
  // as "mixed" to screen readers
  //
  // However, https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox)
  // seems to consider `indeterminate` as a separate bit of information than `checked`. They can be
  // in all 4 combinations (only 3 visual states, though).
  //
  // Should we make them separate props?
  const checkedProps =
    checked === 'indeterminate'
      ? {
          'aria-checked': 'mixed' as const,
          checked: true,
        }
      : {
          checked,
        };

  return (
    <input
      className={clsx(className, styles['checkbox__input'])}
      disabled={disabled}
      ref={ref}
      type="checkbox"
      {...checkedProps}
      {...other}
    />
  );
});

CheckboxInput.displayName = 'CheckboxInput';
