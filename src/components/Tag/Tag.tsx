import clsx from 'clsx';
import React from 'react';
import type { IconName } from '../Icon';
import Icon from '../Icon';
import Text from '../Text';

import styles from './Tag.module.css';

export const VARIANTS = [
  'neutral',
  'error',
  'success',
  'warning',
  'brand',
] as const;

export type Variant = (typeof VARIANTS)[number];

type Props = {
  /**
   * The color variant of the tag. It will update the content colors, background color, and border (when `hasOutline` is set to `true`).
   *
   * **Default is `"neutral"`**.
   */
  variant?: Variant;
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  /**
   * Icon name from the defined set of EDS icons
   */
  icon?: IconName;
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
}: Props) => {
  const componentClassName = clsx(
    styles['tag'],
    styles[`tag--${variant}`],
    hasOutline && styles['tag--outline'],
    className,
  );

  return (
    <Text as="span" className={componentClassName} preset="tag">
      {icon && <Icon name={icon} purpose="decorative" />}
      {text && <span className={styles['tag__body']}>{text}</span>}
    </Text>
  );
};
