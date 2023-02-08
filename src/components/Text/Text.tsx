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
   * Controls whether to render text inline (defaults to "p").
   *
   * "div" variant is deprecated.
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
   * Deprecated. Adds margin bottom spacing to the <Text> component. Use utility classes instead.
   * @deprecated
   */
  spacing?: 'half' | '1x' | '2x';
  tabIndex?: number;
  weight?: 'bold' | 'normal' | null;
} & React.HTMLAttributes<HTMLElement>;

/**
 * `import {Text} from "@chanzuckerberg/eds";`
 *
 * The Text component decorates `<p>` and `<span>` with thematic variants.
 * Defaults to `<p>` and should pass `as="span"` to set as `<span>`.
 *
 * Example usage:
 *
 * ```tsx
 * <Text>
 *  Text paragraph copy
 * </Text>
 *
 * <Text as="span">
 *  Text inline copy
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
