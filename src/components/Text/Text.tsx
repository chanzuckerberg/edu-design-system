import clsx from 'clsx';
import React from 'react';
import styles from './Text.module.css';

export type Size =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'sm'
  | 'xs'
  | 'caption'
  | 'overline';

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
  spacing?: 'none' | 'half' | '1x' | '2x';
  tabIndex?: number;
  weight?: 'bold' | 'normal' | null;
} & React.HTMLAttributes<HTMLElement>;

/**
 * ```ts
 * import {Text} from "@chanzuckerberg/eds";
 * ```
 */
export const Text = ({
  as = 'p',
  children,
  className,
  color,
  size = 'body',
  spacing,
  weight,
  /**
   * Components that wrap typography sometimes requires props such as event handlers
   * to be passed down into the element. One example is the tooltip component.  It
   * attaches a onHover and onFocus event to the element to determine when to
   * trigger the overlay.
   */ ...other
}: Props) => {
  const TagName = as;
  return (
    <TagName
      className={clsx(
        className,
        styles['text'],
        styles[`text--${size}`],
        color && styles[`text--${color}`],
        spacing && styles[`text--mb-${spacing}`],
        weight && styles[`text--weight-${weight}`],
      )}
      {...other}
    >
      {children}
    </TagName>
  );
};

export default Text;
