import clsx from 'clsx';
import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { Preset } from '../../util/variant-types';

import styles from './Text.module.css';

export type TextProps = {
  /**
   * Controls which component to use when rendering copy: `p` or `span`.
   *
   * **Default is `"p"`**.
   */
  as?: 'p' | 'span';
  children: ReactNode;
  className?: string;
  tabIndex?: number;
  /**
   * Prop to set the desired typography value used in design. Acceptable values
   * match those used across the design system.
   */
  preset?: Preset;
} & React.HTMLAttributes<HTMLElement>;

/**
 * `import {Text} from "@chanzuckerberg/eds";`
 *
 * The Text component decorates `<p>` and `<span>` with typographic variants. Use
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
      preset = 'body-md',
      ...other
    }: TextProps,
    ref: ForwardedRef<HTMLParagraphElement>, // Setting as HTMLParagraphElement to satisfy TS, but unit test covers both span and p cases for sanity
  ) => {
    const componentClassName = clsx(
      styles['text'],
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
