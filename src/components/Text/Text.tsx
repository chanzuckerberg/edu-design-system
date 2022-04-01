import clsx from 'clsx';
import React, { forwardRef, ForwardedRef } from 'react';
import styles from './Text.module.css';

export type Size = 'body' | 'sm' | 'md' | 'lg' | 'xs' | 'caption' | 'overline';

export type Color =
  | 'alert'
  | 'base'
  | 'brand'
  | 'info'
  | 'inherit'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'white';

export type Props = {
  /**
   * Controls whether to render text inline (defaults to "p");
   */
  as?: 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  color?: Color;
  size?: Size;
  tabIndex?: number;
  weight?: 'bold' | 'normal' | null;
} & React.HTMLAttributes<HTMLElement>;

/**
 * ```ts
 * import {Text} from "@chanzuckerberg/eds";
 * ```
 */
export const Text = forwardRef(
  (
    {
      as = 'p',
      children,
      className,
      color,
      size = 'body',
      weight,
      /**
       * Components that wrap typography sometimes requires props such as event handlers
       * to be passed down into the element. One example is the tooltip component.  It
       * attaches a onHover and onFocus event to the element to determine when to
       * trigger the overlay.
       */ ...other
    }: Props,
    ref?: ForwardedRef<HTMLParagraphElement>, // Setting as HTMLParagraphElement to satisfy TS, but unit test covers both span and p cases for sanity
  ) => {
    const TagName = as;
    const componentClassName = clsx(
      className,
      styles['text'],
      styles[`text--${size}`],
      color && styles[`text--${color}`],
      weight && styles[`text--${weight}-weight`],
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);
Text.displayName = 'Text'; // Satisfy eslint
