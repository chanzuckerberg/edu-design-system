import clsx from 'clsx';
import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { Preset } from '../../util/variant-types';

import styles from './Text.module.css';

export type TextProps = {
  /**
   * Controls which component to use when rendering copy: e.g., `p` or `span`.
   *
   * **Default is `"p"`**.
   */
  as?: 'p' | 'span' | 'div';
  children: ReactNode;
  className?: string;
  tabIndex?: number;
  /**
   * Prop to set the desired typography value used in design. Acceptable values
   * match those used across the design system.
   */
  preset?: Preset;
} & React.HTMLAttributes<HTMLElement>; // TODO-AH: add in each possible element and spread in <Markdown>

/**
 * ## Usage
 *
 * `Text` is strictly used to style non-heading tags used in a page. Typography presets cover body
 * copy, labels, captions, overlines, code, and other treatments.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Paragraph | The default. `as="p"` for a standalone block of copy. | Body text, descriptions, help text. |
 * | Span | `as="span"` for text that sits inline within a larger block. | A label beside an icon, inline emphasis. |
 * | Div | `as="div"` when the text needs to wrap other block content. | Text composed alongside nested layout. |
 *
 * Set the treatment with `preset`, which defaults to `body-md`. The preset scale is shared across
 * the design system, so heading-level values appear in it too. Reach for `Heading` when you need
 * heading semantics; `Text` only renders `p`, `span`, and `div`.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `Text` for all typographical treatments, and specify a block (`<div>` / `<p>`) tag, or `<span>` as desired.
 *
 * ### Don'ts
 *
 * * Never use any utility classes on raw HTML tags.
 * * Never use TailwindCSS or other styles on raw HTML tags.
 * * Don't use a heading preset on `Text` to imitate a heading. It changes the look without adding the semantics, so the document outline stays wrong. Use `Heading` instead.
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
    ref: ForwardedRef<HTMLParagraphElement>,
    // Setting as HTMLParagraphElement to satisfy TS, but unit test covers both span and p cases for sanity
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
