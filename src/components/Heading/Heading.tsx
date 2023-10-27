import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { Preset } from '../../util/variant-types';
import styles from './Heading.module.css';

/**
 * @deprecated
 */
export const VARIANTS = [
  'inherit',
  'neutral-subtle',
  'neutral-medium',
  'neutral-strong',
  'brand',
  'success',
  'warning',
  'error',
  'white',
  /**
   * @deprecated Info variant is deprecated.
   */ 'info',
] as const;

/**
 * @deprecated
 */
export type Variant = (typeof VARIANTS)[number];

/**
 * @deprecated
 */
export type HeadingElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | /** @deprecated */ 'h6';

/**
 * @deprecated
 */
export type TokenSize =
  | 'headline-lg'
  | 'headline-md'
  | 'headline-sm'
  | 'title-md'
  | 'title-sm'
  | 'body-sm'
  | 'body-xs'
  | 'title-xs';

/**
 * @deprecated
 */
export type HeadingSize = HeadingElement | TokenSize | /** @deprecated */ 'h7';

// For now, "h1"-"h6" sizes point to the old type ramp, while
// "headline-*" and "title-*" sizes point to the new type ramp.
// These will be brought in sync with the next major release.
/**
 * @deprecated
 */
const TOKEN_TO_SIZE: Record<HeadingSize, HeadingElement> = {
  'headline-lg': 'h1',
  'headline-md': 'h2',
  'headline-sm': 'h3',
  'title-md': 'h4',
  'title-sm': 'h5',
  'body-sm': 'h6',
  'body-xs': 'h6',
  'title-xs': 'h5',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
};

type HeadingProps = {
  /**
   * This prop can be used to specify which size heading should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the styling.
   */
  as?: HeadingElement;
  children: React.ReactNode;
  className?: string;
  size: HeadingSize;
  tabIndex?: number;
  variant?: Variant;
  preset?: Preset;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * `import {Heading} from "@chanzuckerberg/eds";`
 *
 * A component for styling heading text (`<h1>`-`<h6>`).
 *
 * Be careful to pass the correct heading element via the `as` prop to avoid skipping heading levels because [heading levels increasing by only one level at a time is important for screen reader users.](https://www.w3.org/WAI/tutorials/page-structure/headings/)
 */
export const Heading = forwardRef(
  (
    {
      as,
      children,
      className,
      preset,
      size,
      variant,
      /**
       * Components that wrap typography sometimes require properties such as
       * event handlers, tabIndex, etc. and/or other native heading element
       * attributes to be passed down into the element.
       */ ...other
    }: HeadingProps,
    ref: React.ForwardedRef<HTMLHeadingElement>,
  ) => {
    if (process.env.NODE_ENV !== 'production') {
      if (variant === 'info') {
        console.warn(
          'Info variant is deprecated and will be removed in an upcoming release. Please use the consider another variant instead.',
        );
      }
      if (size === 'h6' || size === 'h7') {
        console.warn(
          `The ${size} size is deprecated and will be removed in an upcoming release.\n`,
          'Please bump this heading up to a larger size if possible.',
        );
      }
    }

    const TagName = as || TOKEN_TO_SIZE[size];
    const componentClassName = clsx(
      styles['heading'],
      preset && styles[`heading--${preset}`],
      !preset && size && styles[`heading--size-${size}`],
      !preset && variant && styles[`heading--${variant}`],
      className,
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);

Heading.displayName = 'Heading';
