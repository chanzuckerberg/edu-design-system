import clsx from 'clsx';
import React, {
  useId,
  type ChangeEventHandler,
  type CSSProperties,
} from 'react';
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
   * Disables the slider and prevents change.
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
  id,
  label,
  max,
  min,
  value,
  ...other
}: Props) => {
  if (process.env.NODE_ENV !== 'production' && !label && !other['aria-label']) {
    throw new Error('You must provide a visible label or aria-label');
  }
  const componentClassName = clsx(styles['slider'], className);

  const generatedId = useId();
  const sliderId = id || generatedId;

  return (
    <div className={componentClassName}>
      {label && <Label htmlFor={sliderId} text={label} />}
      <input
        className={styles['slider__input']}
        id={sliderId}
        max={max}
        min={min}
        style={
          // calculate value as a ratio to color the track
          { '--ratio': (value - min) / (max - min) } as CSSProperties
        }
        type="range"
        value={value}
        {...other}
      />
    </div>
  );
};
