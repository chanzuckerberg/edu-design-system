import clsx from 'clsx';
import React from 'react';
import styles from './Tag.module.css';
import Text from '../Text';

export const VARIANTS = [
  'default',
  'go',
  'yield',
  'stop',
  'warning',
  'brand',
] as const;

export type Variant = typeof VARIANTS[number];

type Props = {
  /**
   * The color variant of the tag. New variants should be supported in the flow type,
   * in the VARIANTS array, and by its separate style in CSS file.
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
  variant = 'default',
  className,
  icon,
  text,
  hasOutline = false,
}: Props) => {
  return (
    <Text
      as="span"
      className={clsx(
        className,
        styles['tag'],
        styles[`tag--${variant}`],
        hasOutline && styles['tag--outline'],
      )}
      size="sm"
      weight="bold"
    >
      {icon}
      {text && <span className={styles['tag__body']}>{text}</span>}
    </Text>
  );
};

export default Tag;
