import clsx from 'clsx';
import React from 'react';
import { assertEdsUsage } from '../../util/logging';
import type { Status } from '../../util/variant-types';

import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './Tag.module.css';

// TODO(next-major): remove these local variants and usages in code and stories
export const VARIANTS = [
  'neutral',
  'error',
  'success',
  'warning',
  'brand',
] as const;
export type Variant = (typeof VARIANTS)[number];

type Props = {
  // Component API
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  // Design API
  // TODO(next-major): remove the below prop
  /**
   * Adds an outline for the tag.
   *
   * **Default is `false`**.
   *
   * ----
   *
   * **This property is deprecated and will be removed in the next major version**
   */
  hasOutline?: boolean;
  /**
   * Icon name from the defined set of EDS icons
   */
  icon?: IconName;
  /**
   * The text contents of the tag, nested inside the component.
   */
  label?: string;
  /**
   * Status for the component state
   */
  status?: Status;
  // TODO(next-major): remove the below prop
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   *
   * ----
   *
   * **This property is deprecated and will be removed in the next major version**
   */
  text?: React.ReactNode;
  // TODO(next-major): remove the below prop
  /**
   * The color variant of the tag. It will update the content colors, background color, and border (when `hasOutline` is set to `true`).
   *
   * **Default is `"neutral"`**.
   *
   * ----
   *
   * **This property is deprecated and will be removed in the next major version**
   */
  variant?: Variant;
};

/**
 * `import {Tag} from "@chanzuckerberg/eds";`
 *
 * Status UI elements that visually represent metadata, attributes, or categorical information about an item. Tags usually represent system-generated information.
 */
export const Tag = ({
  variant,
  className,
  icon,
  text,
  label,
  hasOutline,
  status = 'informational',
}: Props) => {
  const componentClassName = clsx(
    styles['tag'],
    !status && variant && styles[`tag--${variant}`],
    status && styles[`tag--status-${status}`],
    hasOutline && styles['tag--outline'],
    className,
  );

  assertEdsUsage(
    [typeof text !== 'undefined'],
    'text prop is deprecated, please use label instead',
  );

  assertEdsUsage(
    [typeof variant !== 'undefined'],
    'variant prop is deprecated, please use status instead',
  );

  assertEdsUsage(
    [typeof hasOutline !== 'undefined'],
    'hasOutline prop is deprecated. Please check with design for alternatives',
    'error',
  );

  return (
    <Text as="span" className={componentClassName} preset="tag">
      {icon && <Icon name={icon} purpose="decorative" size="1rem" />}
      {!label && text && <span className={styles['tag__body']}>{text}</span>}
      {label && <span className={styles['tag__body']}>{label}</span>}
    </Text>
  );
};
