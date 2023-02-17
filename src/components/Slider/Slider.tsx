import clsx from 'clsx';
import React, { useId, type ChangeEventHandler } from 'react';
import styles from './Slider.module.css';
import Label from '../Label';

export type Props = {
  /**
   * Aria-label to provide an accesible name for the text input if no visible label is provided.
   */
  'aria-label'?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the input and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Function that runs on change of the input
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Optional markers to be placed in order under the slider. The markers are placed space-between under the slider.
   * Defaults to the min and max values at opposite ends.
   */
  markers?: { label: string; value: number }[];
  /**
   * Maximum value allowed for the slider.
   */
  max: number;
  /**
   * Minimum value allowed for the slider.
   */
  min: number;
  /**
   * Amount to increment each step by.
   */
  step: number;
  /**
   * Value denoted by the slider.
   */
  value: number;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Slider} from "@chanzuckerberg/eds";`
 *
 * Strict: This slider requires a visual indicator of value/markers.
 * Please check out our recipes for possible ideas.
 *
 * TODO: update this comment with a description of the component.
 */
export const Slider = ({
  className,
  disabled,
  id,
  label,
  markers,
  max,
  min,
  ...other
}: Props) => {
  if (process.env.NODE_ENV !== 'production' && !label && !other['aria-label']) {
    throw new Error('You must provide a visible label or aria-label');
  }
  const componentClassName = clsx(styles['slider'], className);

  const generatedId = useId();
  const sliderId = id || generatedId;

  const options = markers || [
    { label: String(min), value: min },
    { label: String(max), value: max },
  ];
  const datalist = (
    <datalist className="flex w-full justify-between">
      {options.map((option) => (
        <option
          key={'slider-option-' + option.label}
          label={option.label}
          value={option.value}
        />
      ))}
    </datalist>
  );

  return (
    <div className={componentClassName}>
      {label && <Label htmlFor={sliderId} text={label} />}
      <div>
        <input
          className={styles['slider__input']}
          disabled={disabled}
          id={sliderId}
          max={max}
          min={min}
          type="range"
          {...other}
        />
        {datalist}
      </div>
    </div>
  );
};
