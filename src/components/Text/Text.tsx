import clsx from 'clsx';
import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';
import styles from './Text.module.css';
import LayoutLinelengthContainer from '../LayoutLinelengthContainer';

export type Size =
  | 'body'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xs'
  | 'caption'
  | 'overline'
  | 'callout';

export type Variant =
  | 'inherit'
  | 'neutral-subtle'
  | 'neutral-medium'
  | 'neutral-strong'
  | 'brand'
  | 'success'
  | 'warning'
  | 'error'
  | 'white'
  /**
   * @deprecated Info variant is deprecated.
   */
  | 'info';

export type Props = {
  /**
   * Controls whether to render text inline (defaults to "p");
   * Use "div" to indicate usage of `<Text>` as a text passage,
   * (i.e. wraps <p>, <h1>-<h6>, <a>, <ol>, <ul>, <blockquote>, <hr>)
   */
  as?: 'p' | 'span' | 'div';
  /**
   * Flags if the length of the text passage should be capped.
   * Used only with as="div" and defaults to true
   */
  capLinelength?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  /**
   * Adds margin bottom spacing to the <Text> component.
   */
  spacing?: 'half' | '1x' | '2x';
  tabIndex?: number;
  weight?: 'bold' | 'normal' | null;
} & React.HTMLAttributes<HTMLElement>;

/**
 * `import {Text} from "@chanzuckerberg/eds";`
 *
 * There are two perceived use cases for the text component.
 * One is to decorate `<p>` and `<span>` with thematic variants.
 * Defaults to `<p>` and should pass `as="span"` to set as `<span>`.
 *
 * The second is to provide a wrapper for multiple text elements in usage as a text passage.
 * For such use, should pass as="div" and wrap various elements like `<p>`, `<h1>`-`<h6>`, `<a>`, `<ol>`, `<ul>`, `<blockquote>`, and `<hr>`.
 *
 * Example usage:
 *
 * ```tsx
 * <Text as="div">
 *   <h1>Heading for the text passage</h1>
 *   <p>First paragraph copy of the text passage</p>
 *   <p>Second paragraph copy of the text passage</p>
 * </Text>
 * ```
 */
export const Text = forwardRef(
  (
    {
      as = 'p',
      capLinelength = true,
      children,
      className,
      variant,
      size = 'body',
      spacing,
      weight,
      /**
       * Components that wrap typography sometimes requires props such as event handlers
       * to be passed down into the element. One example is the tooltip component.  It
       * attaches a onHover and onFocus event to the element to determine when to
       * trigger the overlay.
       */ ...other
    }: Props,
    ref: ForwardedRef<HTMLParagraphElement>, // Setting as HTMLParagraphElement to satisfy TS, but unit test covers both span and p cases for sanity
  ) => {
    if (variant === 'info' && process.env.NODE_ENV !== 'production') {
      console.warn(
        'Info variant is deprecated, please consider another variant.',
      );
    }
    const TagName =
      capLinelength && as === 'div' ? LayoutLinelengthContainer : as;
    const componentClassName = clsx(
      styles['text'],
      styles[`text--${size}`],
      variant && styles[`text--${variant}`],
      weight && styles[`text--${weight}-weight`],
      spacing && styles[`text--${spacing}-spacing`],
      as === 'div' && styles['text-passage'],
      as === 'div' && styles[`text-passage--${size}`],
      className,
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);
Text.displayName = 'Text'; // Satisfy eslint
