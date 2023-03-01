import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
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

const checkboxIconNameMap = {
  indeterminate: 'checkbox-indeterminate',
  true: 'checkbox-checked',
  false: 'checkbox-unchecked',
};
const CheckboxSvg = ({
  checked,
  disabled,
}: {
  checked: boolean | 'indeterminate';
  disabled?: boolean;
}) => {
  const iconClassName = clsx(
    styles['checkbox__icon'],
    disabled && styles['checkbox__icon--disabled'],
  );
  return (
    <Icon
      className={iconClassName}
      name={
        checkboxIconNameMap[`${checked}`] as
          | 'checkbox-indeterminate'
          | 'checkbox-checked'
          | 'checkbox-unchecked'
      }
      purpose="decorative"
      size="1.5rem"
    />
  );
};

/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  CheckboxInputProps
>(({ checked = false, className, disabled, ...other }, ref) => {
  // Make indeterminate checkbox visually match the colors of a
  // checked state, but announce itself as "mixed" to screen readers
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
    <span
      className={clsx(
        styles['input__wrapper'],
        disabled && styles['input__wrapper--disabled'],
      )}
    >
      <input
        className={clsx(className, styles['checkbox__input'])}
        data-bootstrap-override="checkbox"
        disabled={disabled}
        ref={ref}
        type="checkbox"
        {...checkedProps}
        {...other}
      />
      <CheckboxSvg checked={checked} disabled={disabled} />
    </span>
  );
});

CheckboxInput.displayName = 'CheckboxInput';
