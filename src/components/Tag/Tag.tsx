import clsx from 'clsx';
import React from 'react';
import Text from '../Text';
import styles from './Tag.module.css';

export const VARIANTS = [
  'neutral',
  'error',
  'success',
  'warning',
  /** @deprecated */
  'yield',
  'brand',
] as const;

export type Variant = (typeof VARIANTS)[number];

type Props = {
  /**
   * The color variant of the tag. It will update the content colors, background color, and border (when `hasOutline` is set to `true`).
   *
   * **NOTE**: `yield` variant is deprecated and will be removed in a future release.
   *
   * **Default is `"neutral"`**.
   */
  variant?: Variant;
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  /**
   * The tag icon
   */
  icon?: React.ReactNode;
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   */
  text?: React.ReactNode;
  /**
   * Adds an outline for the tag.
   *
   * **Default is `false`**.
   */
  hasOutline?: boolean;
};

/**
 * `import {Tag} from "@chanzuckerberg/eds";`
 *
 * This component provides a tag (pill shaped badge). Can contain text and a left-aligned icon.
 */
export const Tag = ({
  variant = 'neutral',
  className,
  icon,
  text,
  hasOutline = false,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['tag'],
    styles[`tag--${variant}`],
    hasOutline && styles['tag--outline'],
    className,
  );

  // TODO: Text component is receiving the tag styles directly, instead of using a wrapper. De-couple
  // and remove deprecated usages
  return (
    <Text
      as="span"
      className={componentClassName}
      size="sm"
      weight="bold"
      {...other}
    >
      {icon}
      {text && <span className={styles['tag__body']}>{text}</span>}
    </Text>
  );
};
