import clsx from 'clsx';
import React from 'react';
import type { ReactNode, InputHTMLAttributes } from 'react';
import { useId } from '../../util/useId';
import type { EitherInclusive } from '../../util/utility-types';
import Icon, { type IconName } from '../Icon';
import { InputLabel, type InputLabelProps } from '../InputLabel/InputLabel';
import Text from '../Text';
import styles from './Radio-v2.module.css';

type RadioProps = RadioInputProps & {
  // Component API
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  // Design API
  /**
   * Whether the radio button is in an error state
   */
  isError?: boolean;
  /**
   * Additional descriptive text below the primary label, adding additional detail
   */
  subLabel?: string;
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

type RadioInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
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
  /**
   * Whether the radio button is in an error state
   */
  isError?: boolean;
};

const RadioSvg = ({ checked }: Pick<RadioProps, 'checked'>) => {
  const iconClassName = clsx(styles['radio__icon']);
  const icon: IconName = checked ? 'radio-selected' : 'radio-unselected';
  return (
    <Icon
      className={iconClassName}
      name={icon}
      purpose="decorative"
      size="1.5rem"
    />
  );
};

/**
 * Radio input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export const RadioInput = ({
  checked,
  className,
  disabled,
  isError,
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
        className={clsx(
          className,
          isError && styles['radio--error'],
          styles['radio__input'],
        )}
        disabled={disabled}
        type="radio"
        {...other}
      />
      <RadioSvg checked={checked} />
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
 * Radio control indicating if one item is selected or unselected from a set of other options. Uncontrolled by default, it can be used in place of a select field in form data.
 *
 * NOTE: This component requires `label` or `aria-label` prop *
 */
export const Radio = ({
  className,
  disabled,
  label,
  id,
  isError = false,
  subLabel,
  ...other
}: RadioProps) => {
  const generatedId = useId();
  const radioId = id || generatedId;

  const componentClassName = clsx(
    styles['radio'],
    isError && styles['radio--error'],
    className,
  );

  return (
    <div className={componentClassName}>
      <RadioInput
        disabled={disabled}
        id={radioId}
        isError={isError}
        {...other}
      />
      <div className={styles['radio__labels']}>
        <RadioLabel disabled={disabled} htmlFor={radioId}>
          {label}
        </RadioLabel>
        {subLabel && (
          <Text
            as="span"
            className={styles['radio__sub-label']}
            preset="body-sm"
          >
            {subLabel}
          </Text>
        )}
      </div>
    </div>
  );
};

Radio.displayName = 'Radio';
RadioInput.displayName = 'Radio.Input';
RadioLabel.displayName = 'Radio.Label';

Radio.Input = RadioInput;
Radio.Label = RadioLabel;
