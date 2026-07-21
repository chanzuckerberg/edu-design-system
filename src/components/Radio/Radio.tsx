import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';

import type { EitherInclusive } from '../../util/utility-types';

import Label from '../Label';
import Text from '../Text';

import styles from './Radio.module.css';

type RadioHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'id' | 'name'
>;

type RadioInputProps = RadioHTMLElementProps & {
  /**
   * Whether checkbox is checked.
   */
  checked?: boolean;
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

type RadioProps = RadioInputProps & {
  // Component API
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * The field name to use in a form
   */
  name?: string;
  // Design API
  /**
   * Whether the radio button is in an error state
   */
  isError?: boolean;
  /**
   * Additional descriptive text below the primary label, adding additional detail
   */
  subLabel?: ReactNode;
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
 * Radio input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
const RadioInput = ({
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
      <span className={styles['radio__container']}></span>
      <span className={styles['radio__selected']}></span>
    </span>
  );
};

/**
 * `import {Radio} from "@chanzuckerberg/eds";`
 *
 * ## Usage
 *
 * A radio button is a round control that allows users to choose one option from a set. Also known as Radio.
 *
 * NOTE: This component requires a `label` or `aria-label` prop.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standard | A set of mutually exclusive options where only one can be selected. | Single-choice list of options. |
 * | Horizontal Radio Group | Lays out options in a horizontal row for compact use. | Filters in toolbars. Simple form choices. |
 * | Vertical Radio Group | Stacks options vertically for clarity and accessibility. | Longer option lists. Mobile-friendly forms. |
 * | Disabled | Non-interactive, styled to indicate unavailability. | Feature restrictions. Options based on permissions. |
 * | Preselected | One option is selected by default. | Guides user to the most common or recommended choice. |
 *
 * ### Best Practices
 *
 * * By default, radio buttons should have labels. They may have no visible label only if composed into another component, such as a table row. Like text inputs and select components, radio button group labels can include an "optional" or "required" hint.
 * * Use a radio button when only one item can be selected from a list. When more than one option can be selected, use a checkbox instead.
 * * The radio button group requires error text when `isError: true`.
 * * Radio buttons should never be standalone. Therefore, they should never include their own error text.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use group labels to describe the action to be taken within groups of radio buttons (e.g. "Select the topic that most interests you").
 * * Use helper text to explain the action, or results of the action, when necessary.
 * * Use sentence case for group labels and helper text.
 * * Use end punctuation for helper text.
 * * Keep labels to a few words (ideally 3 or less).
 * * In error messages, describe the issue and what to do about it.
 *
 * ### Dont's
 *
 * * Use helper text by default; consider better group labels first.
 * * Use end punctuation on group labels.
 * * Truncate labels.
 * * Use end punctuation on an error message that is a sentence fragment.
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
  const generatedId = React.useId();
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
      {(label || subLabel) && (
        <div className={styles['radio__labels']}>
          {label && (
            <Label disabled={disabled} htmlFor={radioId} text={label} />
          )}
          {subLabel && (
            <Text
              as="span"
              className={clsx(
                styles['radio__sub-label'],
                disabled && styles['radio--is-disabled'],
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
};

Radio.displayName = 'Radio';
RadioInput.displayName = 'Radio.Input';

Radio.Input = RadioInput;
Radio.Label = Label;
