import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
import styles from './RadioInput.module.css';

export type RadioInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'id' | 'size'
> & {
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Radio ID. Used to connect the input with a label for accessibility purposes.
   */
  id?: string;
};

const RadioSvg = ({
  checked,
  disabled,
}: {
  checked?: boolean;
  disabled?: boolean;
}) => {
  const iconClassName = clsx(
    styles['radio__icon'],
    disabled && styles['radio__icon--disabled'],
  );
  return (
    <Icon
      className={iconClassName}
      name={checked ? 'radio-selected' : 'radio-unselected'}
      purpose="decorative"
      size="1.625rem"
    />
  );
};

/**
 * Radio input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export const RadioInput = ({
  checked = false,
  className,
  disabled,
  ...other
}: RadioInputProps) => {
  return (
    <span
      className={clsx(
        styles['input__wrapper'],
        disabled && styles['input__wrapper--disabled'],
      )}
    >
      <input
        checked={checked}
        className={clsx(className, styles['radio__input'])}
        disabled={disabled}
        type="radio"
        {...other}
      />
      <RadioSvg checked={checked} disabled={disabled} />
    </span>
  );
};
