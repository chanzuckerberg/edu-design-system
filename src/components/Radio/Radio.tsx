import clsx from 'clsx';
import React from 'react';
import { useId } from '../../util/useId';
import type { EitherInclusive } from '../../util/utility-types';
import Icon from '../Icon';
import { InputLabel, type InputLabelProps } from '../InputLabel/InputLabel';
import styles from './Radio.module.css';

type RadioProps = RadioInputProps & {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Size of the radio label.
   */
  size?: InputLabelProps['size'];
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
type RadioInputProps = Omit<
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

/**
 * Radio label element, styles and relies on the InputLabel component.
 */
export const RadioLabel = ({
  className,
  size = 'lg',
  ...other
}: InputLabelProps) => {
  const componentClassName = clsx(
    styles['radio__label'],
    styles[`radio__label--${size}`],
    className,
  );

  return <InputLabel className={componentClassName} size={size} {...other} />;
};

/**
 * `import {Radio} from "@chanzuckerberg/eds";`
 *
 * This component provides a radio component and a label for form selection.
 *
 * NOTE: This component requires `label` or `aria-label` prop
 */
export const Radio = ({
  className,
  disabled,
  label,
  id,
  size,
  ...other
}: RadioProps) => {
  const generatedId = useId();
  const radioId = id || generatedId;

  const componentClassName = clsx(styles['radio'], className);

  return (
    <div className={componentClassName}>
      <RadioInput disabled={disabled} id={radioId} {...other} />
      <RadioLabel disabled={disabled} htmlFor={radioId} size={size}>
        {label}
      </RadioLabel>
    </div>
  );
};

Radio.Input = RadioInput;
Radio.Label = RadioLabel;
