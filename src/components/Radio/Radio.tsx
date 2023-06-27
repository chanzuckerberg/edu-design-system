import clsx from 'clsx';
import React from 'react';
import { useId } from '../../util/useId';
import type { EitherInclusive } from '../../util/utility-types';
import type { RadioInputProps } from '../RadioInput';
import RadioInput from '../RadioInput';
import type { RadioLabelProps } from '../RadioLabel';
import RadioLabel from '../RadioLabel';
import styles from './Radio.module.css';

export type RadioProps = RadioInputProps & {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Size of the radio label.
   */
  size?: RadioLabelProps['size'];
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
