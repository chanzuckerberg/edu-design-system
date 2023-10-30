import clsx from 'clsx';
import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { Preset } from '../../util/variant-types';

import styles from './Text.module.css';

/** @deprecated */
export type Size =
  | 'body'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xs'
  | 'caption-md'
  | 'caption-lg'
  | 'overline'
  | 'callout';

/**
 * @deprecated  Please use `caption-md` instead
 */
export type DeprecatedSize = 'caption';

/** @deprecated */
export type Variant =
  | 'inherit'
  | 'neutral-subtle'
  | 'neutral-medium'
  | 'neutral-strong'
  | 'brand'
  | 'success'
  | 'warning'
  | 'error'
  | 'white';

/**
 * @deprecated Info variant is deprecated.
 */
export type DeprecatedVariant = 'info';

export type TextProps = {
  /**
   * Controls which component to use when rendering copy: `p` or `span` (defaults to `"p"`).
   */
  as?: 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  tabIndex?: number;
  /**
   * Prop to set the desired typography value used in design. Acceptable values
   * match those used across the design system.
   */
  preset?: Preset;
  /**
   * This prop is **deprecated**.
   * @deprecated
   */
  variant?: Variant | DeprecatedVariant;
  /**
   * This prop is **deprecated**.
   * @deprecated
   */
  size?: Size | DeprecatedSize;
  /**
   * This prop is **deprecated**.
   * @deprecated
   */
  weight?: 'bold' | 'normal' | null;
} & React.HTMLAttributes<HTMLElement>;

/**
 * `import {Text} from "@chanzuckerberg/eds";`
 *
 * The Text component decorates `<p>` and `<span>` with thematic variants. Use
 * typography presets to style the text via `preset`.
 *
 * For headers, please use `Heading`.
 */
export const Text = forwardRef(
  (
    {
      as: TagName = 'p',
      children,
      className,
      preset,
      size = 'body',
      variant,
      weight,
      /**
       * Components that wrap typography sometimes requires props such as event handlers
       * to be passed down into the element. One example is the tooltip component.  It
       * attaches a onHover and onFocus event to the element to determine when to
       * trigger the overlay.
       */ ...other
    }: TextProps,
    ref: ForwardedRef<HTMLParagraphElement>, // Setting as HTMLParagraphElement to satisfy TS, but unit test covers both span and p cases for sanity
  ) => {
    if (variant === 'info' && process.env.NODE_ENV !== 'production') {
      console.warn(
        'Info variant is deprecated, please consider another variant.',
      );
    }
    const componentClassName = clsx(
      styles['text'],
      !preset && size && styles[`text--${size}`],
      !preset && variant && styles[`text--${variant}`],
      !preset && weight && styles[`text--${weight}-weight`],
      preset && styles[`text--${preset}`],
      className,
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);

Text.displayName = 'Text';
