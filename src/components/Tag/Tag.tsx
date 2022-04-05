import clsx from 'clsx';
import React from 'react';
import styles from './Tag.module.css';
import Text from '../Text';

export const COLORS = [
  'default',
  'go',
  'yield',
  'stop',
  'warning',
  'brand',
] as const;

export type Color = typeof COLORS[number];

type Props = {
  /**
   * The color of the tag. New colors should be supported in the flow type,
   * in the COLORS array, and by its separate style in CSS file.
   */
  color?: Color;
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
   * Style of the tag.
   */
  variant?: 'flat' | 'outline';
};

/**
 * ```ts
 * import {Tag} from "@chanzuckerberg/eds-components";
 * ```
 *
 * This component provides a tag (pill shaped badge) wrapper.
 */
export const Tag = ({
  color = 'default',
  className,
  icon,
  text,
  variant = 'flat',
}: Props) => {
  return (
    <Text
      as="span"
      className={clsx(
        className,
        styles['tag'],
        styles[`tag--color-${color}`],
        variant === 'outline' && styles['tag--outline'],
      )}
      color={color}
      size="sm"
      weight="bold"
    >
      {icon}
      {/* No width space to ensure height of contents */}
      {'\u200B'}
      {text && <span className={styles['tag__body']}>{text}</span>}
    </Text>
  );
};

export default Tag;
