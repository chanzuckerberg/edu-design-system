import clsx from 'clsx';
import React, {
  useRef,
  type ChangeEventHandler,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { findLowestTenMultiplier } from '../../util/findLowestTenMultiplier';
import { useId } from '../../util/useId';
import type { EitherInclusive } from '../../util/utility-types';
import FieldNote from '../FieldNote';
import Label from '../Label';
import Text from '../Text';
import Tooltip from '../Tooltip';
import styles from './Slider.module.css';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the slider and prevents change.
   */
  disabled?: boolean;
  /**
   * Text under the text input used to describe the slider.
   * Will override the markers if present.
   */
  fieldNote?: ReactNode;
  /**
   * HTML id for the component
   */
  id?: string;
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
   * Content to display in a tooltip above the thumb. Presence toggles Tooltip.
   * Will flip to bottom of Slider if there is more space.
   */
  tooltip?: string;
  /**
   * Value denoted by the slider.
   */
  value: number;
} & EitherInclusive<
    {
      /**
       * Visible text label for the component.
       */
      label: string;
    },
    {
      /**
       * Aria-label to provide an accesible name for the text input if no visible label is provided.
       */
      'aria-label': string;
    }
  >;

/**
 * `import {Slider} from "@chanzuckerberg/eds";`
 *
 * Allows input of a value via dragging a thumb along a track.
 * Strict: This slider requires a visual indicator of value/markers.
 * Please check out our examples for possible ideas.
 *
 * NOTE: This component requires `label` or `aria-label` prop
 *
 * @deprecated
 */
export const Slider = ({
  className,
  disabled,
  fieldNote,
  id,
  label,
  markers,
  max,
  min,
  step,
  tooltip,
  value,
  ...other
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const proxyRef = useRef<HTMLDivElement>(null);

  // Required due to 0.1 + 0.2 != 0.3
  const multiplier = findLowestTenMultiplier([max, min, step]);
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

  const ratio = (value - min) / (max - min);

  const componentClassName = clsx(styles['slider'], className);
  const labelClassName = clsx(disabled && styles['slider__label--disabled']);
  const markerClassName = clsx(
    styles['slider__marker'],
    disabled && styles['slider__marker--disabled'],
  );

  const generatedId = useId();
  const sliderId = id || generatedId;

  const generatedAriaDescribedById = useId();
  const ariaDescribedByVar = fieldNote
    ? other['aria-describedby'] || generatedAriaDescribedById
    : undefined;

  return (
    <div className={componentClassName}>
      {label && (
        <Label className={labelClassName} htmlFor={sliderId} text={label} />
      )}
      <input
        aria-describedby={ariaDescribedByVar}
        className={styles['slider__input']}
        disabled={disabled}
        id={sliderId}
        max={max}
        min={min}
        ref={ref}
        step={step}
        style={
          // calculate value as a ratio to color the track
          { '--ratio': ratio } as CSSProperties
        }
        type="range"
        value={value}
        {...other}
      />
      {tooltip && (
        <Tooltip
          appendTo="parent"
          hideOnClick={false}
          offset={({ reference }) => {
            // rems and pixels has to be converted to number values for the offset
            const thumbSize = parseFloat(
              proxyRef.current
                ? getComputedStyle(proxyRef.current).height
                : '0',
            );

            // offsets the tooltip relative to the position and size of the thumb
            return [(ratio - 0.5) * (reference.width - thumbSize), 0];
          }}
          placement="top"
          reference={ref}
          text={tooltip}
          touch="hold"
        />
      )}
      {fieldNote && (
        <FieldNote disabled={disabled} id={ariaDescribedByVar}>
          {fieldNote}
        </FieldNote>
      )}
      {!fieldNote && markers === 'number' && (
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
                >
                  {marker}
                </Text>
              );
            })}
        </div>
      )}
      {!fieldNote && Array.isArray(markers) && (
        <div aria-hidden className={styles['slider__markers']}>
          {markers.map((marker) => (
            <Text className={markerClassName} key={'slider-option-' + marker}>
              {marker}
            </Text>
          ))}
        </div>
      )}
      {/* Adding slider thumb hidden element so that we can retrieve calculated thumb size in DOM */}
      <div className={styles['slider__thumb-proxy']} ref={proxyRef}></div>
    </div>
  );
};

Slider.displayName = 'Slider';
