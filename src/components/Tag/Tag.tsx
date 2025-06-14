import clsx from 'clsx';
import React from 'react';
import type { Status } from '../../util/variant-types';

import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './Tag.module.css';

type Props = {
  // Component API
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  // Design API
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
};

/**
 * `import {Tag} from "@chanzuckerberg/eds";`
 *
 * Status UI elements that visually represent metadata, attributes, or categorical information about an item. Tags usually represent system-generated information.
 */
export const Tag = ({
  className,
  icon,
  label,
  status = 'informational',
}: Props) => {
  const componentClassName = clsx(
    styles['tag'],
    status && styles[`tag--status-${status}`],
    className,
  );

  return (
    <Text as="span" className={componentClassName} preset="label-sm">
      {icon && <Icon name={icon} purpose="decorative" size="16px" />}
      {label && <span className={styles['tag__body']}>{label}</span>}
    </Text>
  );
};
