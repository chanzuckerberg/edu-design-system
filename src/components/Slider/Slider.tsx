import clsx from 'clsx';
import React, {
  useId,
  type ChangeEventHandler,
  type CSSProperties,
} from 'react';
import Label from '../Label';
import Text from '../Text';
import styles from './Slider.module.css';

const lowestTenMultiplier = (numbers: number[]) => {
  let multiplier = 1;
  while (
    numbers.some((number) => !Number.isInteger((number * multiplier) % 1))
  ) {
    multiplier *= 10;
  }
  return multiplier;
};

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
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
   * List of markers to imply slider value.
   * As 'number', will automatically generate markers based on min, max, and step.
   * As an array of strings, will space the strings apart evenly.
   */
  markers?: 'number' | string[];
  /**
   * Maximum value allowed for the slider.
   */
  max: number;
  /**
   * Minimum value allowed for the slider.
   */
  min: number;
  /**
   * Function that runs on change of the input
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
 * Allows input of a value via dragging a thumb along a track.
 * Strict: This slider requires a visual indicator of value/markers.
 * Please check out our recipes for possible ideas.
 */
export const Slider = ({
  className,
  disabled,
  id,
  label,
  markers,
  max,
  min,
  step,
  value,
  ...other
}: Props) => {
  if (process.env.NODE_ENV !== 'production' && !label && !other['aria-label']) {
    throw new Error('You must provide a visible label or aria-label');
  }

  // Required due to 0.1 + 0.2 != 0.3
  const multiplier = lowestTenMultiplier([max, min, step]);
  const markersCount =
    (max * multiplier - min * multiplier) / (step * multiplier) + 1;
  if (
    process.env.NODE_ENV !== 'production' &&
    markers === 'number' &&
    !Number.isInteger(markersCount)
  ) {
    throw new Error(
      'Number of markers is not an integer. Change step or supply custom markers',
    );
  }

  const componentClassName = clsx(styles['slider'], className);
  const labelClassName = clsx(disabled && styles['slider__label--disabled']);
  const markerClassName = clsx(
    styles['slider__marker'],
    disabled && styles['slider__marker--disabled'],
  );

  const generatedId = useId();
  const sliderId = id || generatedId;

  return (
    <div className={componentClassName}>
      {label && (
        <Label className={labelClassName} htmlFor={sliderId} text={label} />
      )}
      <input
        className={styles['slider__input']}
        disabled={disabled}
        id={sliderId}
        max={max}
        min={min}
        step={step}
        style={
          // calculate value as a ratio to color the track
          { '--ratio': (value - min) / (max - min) } as CSSProperties
        }
        type="range"
        value={value}
        {...other}
      />
      {markers === 'number' && (
        <div aria-hidden className={styles['slider__markers']}>
          {Array(markersCount)
            .fill(null)
            .map((_, index) => {
              const marker =
                (index * multiplier * step + min * multiplier) / multiplier;
              return (
                <Text
                  className={markerClassName}
                  key={'slider-option-' + marker}
                  variant="neutral-medium"
                >
                  {marker}
                </Text>
              );
            })}
        </div>
      )}
      {Array.isArray(markers) && (
        <div aria-hidden className={styles['slider__markers']}>
          {markers.map((marker) => (
            <Text
              className={markerClassName}
              key={'slider-option-' + marker}
              variant="neutral-medium"
            >
              {marker}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
};
