import clsx from 'clsx';
import React from 'react';
import styles from './Tag.module.css';
import Text from '../Text';

export type Color =
  | 'neutral'
  | 'alert'
  | 'success'
  | 'warning'
  | 'revise'
  | 'brand';

export const stylesByColor = {
  neutral: styles[`tag--color-neutral`],
  warning: styles[`tag--color-warning`],
  brand: styles[`tag--color-brand`],
  alert: styles[`tag--color-alert`],
  revise: styles[`tag--color-revise`],
  success: styles[`tag--color-success`],
};

type Props = {
  /**
   * The color of the tag. New colors should be supported in the flow type,
   * in the stylesByColor object, and by its separate style in CSS file.
   */
  color: Color;
  /**
   * The child node(s) contents of the tag, nested inside the component, in addition to the icon.
   */
  children: React.ReactNode;
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
function Tag({ color, children, className, icon, variant = 'flat' }: Props) {
  return (
    <Text
      as="span"
      className={clsx(
        className,
        styles['tag'],
        color && styles[`tag--color-${color}`],
        variant === 'outline' && styles['tag--outline'],
      )}
      color={color}
      size="sm"
      weight="bold"
    >
      {icon}
      {/* No width space to ensure height of contents */}
      {'\u200B'}
      {children && <span className={styles['tag__body']}>{children}</span>}
    </Text>
  );
}

export default Tag;
