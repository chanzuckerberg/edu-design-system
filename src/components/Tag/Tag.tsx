import clsx from 'clsx';
import React from 'react';
import styles from './Tag.module.css';
import Text from '../Text';

export const VARIANTS = [
  'neutral',
  'success',
  'yield',
  'error',
  'warning',
  'brand',
] as const;

export type Variant = typeof VARIANTS[number];

type Props = {
  /**
   * The color variant of the tag. New variants should be supported
   * in the VARIANTS array and by its separate style in CSS file.
   */
  variant?: Variant;
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  /**
   * The tag icon (shouldn't provide color or size since those are determined
   * by the color prop).
   */
  icon?: React.ReactNode;
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   */
  text?: React.ReactNode;
  /**
   * Adds an outline for the tag. Defaulted to no outline.
   */
  hasOutline?: boolean;
};

/**
 * ```ts
 * import {Tag} from "@chanzuckerberg/eds";
 * ```
 *
 * This component provides a tag (pill shaped badge) wrapper.
 */
export const Tag = ({
  variant = 'neutral',
  className,
  icon,
  text,
  hasOutline = false,
}: Props) => {
  const componentClassName = clsx(
    className,
    styles['tag'],
    styles[`tag--${variant}`],
    hasOutline && styles['tag--outline'],
  );

  return (
    <Text as="span" className={componentClassName} size="sm" weight="bold">
      {icon}
      {text && <span className={styles['tag__body']}>{text}</span>}
    </Text>
  );
};

export default Tag;
