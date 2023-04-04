import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import styles from './Heading.module.css';

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
export type Variant = (typeof VARIANTS)[number];
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
// For now, "h1"-"h6" sizes point to the old type ramp, while
// "headline-*" and "title-*" sizes point to the new type ramp.
// These will be brought in sync with the next major release.
const TOKEN_TO_SIZE = {
  'headline-lg': 'h1',
  'headline-md': 'h2',
  'headline-sm': 'h3',
  'title-md': 'h4',
  'title-sm': 'h5',
  'body-sm': 'h6',
  'body-xs': 'h7',
  'title-xs': 'h5',
};
export type HeadingSize = HeadingElement | 'h7' | keyof typeof TOKEN_TO_SIZE;

type Props = {
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
} & React.HTMLAttributes<HTMLHeadingElement>;

const getComputedAs = (size: HeadingSize) => {
  if (size === 'h7') {
    return 'h6';
  }

  return size in TOKEN_TO_SIZE ? TOKEN_TO_SIZE[size] : size;
};

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
      variant,
      size,
      /**
       * Components that wrap typography sometimes require props such as
       * event handlers, tabIndex, etc. and/or other native heading element
       * attributes to be passed down into the element.
       */ ...other
    }: Props,
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

    const TagName = as || getComputedAs(size);
    const componentClassName = clsx(
      styles['heading'],
      styles[`heading--size-${size}`],
      variant && styles[`heading--${variant}`],
      className,
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);

Heading.displayName = 'Heading'; // Satisfy eslint.
