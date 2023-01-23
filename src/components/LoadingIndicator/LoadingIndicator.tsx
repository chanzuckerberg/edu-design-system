import clsx from 'clsx';
import React from 'react';

import { Oval } from 'react-loader-spinner';
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
   * (Shadowed from OvalProps)
   *
   * See: https://mhnpd.github.io/react-loader-spinner/docs/components/oval
   */
  ariaLabel?: string;

  /**
   * Whether the oval is visible. Default is true.
   * (Shadowed from OvalProps)
   *
   * See: https://mhnpd.github.io/react-loader-spinner/docs/components/oval
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

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {LoadingIndicator} from "@chanzuckerberg/eds";`
 *
 * Loading indicators inform users about the wait time, reason, and status of ongoing processes when the layout is unknown
 *
 * For screen readers, add an `aria-label` to describe what is loading.
 *
 */
export const LoadingIndicator = ({
  ariaLabel = 'loading',
  className,
  size = 'md',
  visible = true,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['loading-indicator'], className);

  // setting the colors to be transparent since we override in CSS
  // (and have a lint rule prevent token variable use in components)
  return (
    <Oval
      ariaLabel={ariaLabel}
      color="transparent"
      height={loaderSize[size]}
      secondaryColor="transparent"
      strokeWidth={loaderStrokeSize[size]}
      strokeWidthSecondary={loaderStrokeSize[size]}
      visible={visible}
      width={loaderSize[size]}
      wrapperClass={componentClassName}
      {...other}
    />
  );
};
