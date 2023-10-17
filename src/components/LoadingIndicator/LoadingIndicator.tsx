import clsx from 'clsx';
import React from 'react';

import styles from './LoadingIndicator.module.css';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;

  /**
   * Layout size of the loader. This affects the overall size and associated
   * stroke width.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Aria label of the oval. Default is "loading". Will be overridden if ariaLabel is passed in props
   */
  ariaLabel?: string;

  /**
   * Whether the oval is visible. Default is true.
   */
  visible?: boolean;
};

// Pixel sizes corresponding to EDS size units
const loaderSize = {
  sm: 24, // --eds-size-2-and-half
  md: 40, // --eds-size-5
  lg: 56, // --eds-size-7
};

// Given a loader size, the stroke widths can change
const loaderStrokeSize = {
  sm: 2,
  md: 3,
  lg: 4,
};

// The viewport changes based on adjustments to handle the stroke width
const loaderViewportSize = {
  sm: '-20 -20 42 42',
  md: '-20.5 -20.5 43 43',
  lg: '-21 -21 44 44',
};

/**
 * `import {LoadingIndicator} from "@chanzuckerberg/eds";`
 *
 * Loading indicators inform users about the wait time, reason, and status of ongoing processes when the layout is unknown
 *
 * For screen readers, add a custom `aria-label` to describe what is loading.
 */
export const LoadingIndicator = ({
  ariaLabel = 'loading',
  className,
  size = 'md',
  visible = true,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['loading-indicator'],
    !visible && styles['loading-indicator--invisible'],
    className,
  );

  // setting the colors to be transparent since we override in CSS
  // (and have a lint rule prevent token variable use in components)
  return (
    <div
      aria-busy="true"
      aria-label={ariaLabel}
      className={componentClassName}
      data-testid="oval-loading"
      role="status"
      {...other}
    >
      <svg
        data-testid="oval-svg"
        height={loaderSize[size]}
        stroke="transparent"
        viewBox={loaderViewportSize[size]}
        width={loaderSize[size]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <g
            data-testid="oval-secondary-group"
            strokeWidth={loaderStrokeSize[size]}
            transform="translate(1 1)"
          >
            <circle
              cx="0"
              cy="0"
              r="20"
              stroke="transparent"
              strokeOpacity=".5"
              strokeWidth={loaderStrokeSize[size]}
            ></circle>
            <path d="M20 0c0-9.94-8.06-20-20-20">
              <animateTransform
                attributeName="transform"
                dur="1s"
                from="0 0 0"
                repeatCount="indefinite"
                to="360 0 0"
                type="rotate"
              ></animateTransform>
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
};

LoadingIndicator.displayName = 'LoadingIndicator';
