import clsx from 'clsx';
import React from 'react';
import { assertEdsUsage } from '../../util/logging';
import type { Emphasis, Status } from '../../util/variant-types';

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
   * Controls how much the tag stands out. **NOTE**: emphasis can only be set to "low" when status is "informational".
   *
   * **Default is `"high"`**.
   */
  emphasis?: Emphasis;
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
 *
 * Usage and content:
 * * As a best practice, keep labels to 1-2 words. Remember that tags represent discrete pieces of information Don’t overload users with excessive content, which will increase cognitive load.
 * * Use tag status variants which are appropriate for the tag’s content.
 * * Tags should not be used in a semantically incorrect way.Do not select tag status soley based on their color. If clients need color-coded tags which are not tied to a particular status, reach out the EDS.
 * * When using multiple tabs together, separate them with spacing-size-2. This provides sufficient white space for readability.
 */
export const Tag = ({
  className,
  emphasis = 'high',
  icon,
  label,
  status = 'informational',
}: Props) => {
  const componentClassName = clsx(
    styles['tag'],
    emphasis && styles[`tag--emphasis-${emphasis}`],
    status && styles[`tag--status-${status}`],
    className,
  );

  assertEdsUsage(
    [status !== 'informational' && emphasis === 'low'],
    'Emphasis can only be set to low when status is "informational"',
  );

  return (
    <Text as="span" className={componentClassName} preset="tag">
      {icon && <Icon name={icon} purpose="decorative" size="16px" />}
      {label && <span className={styles['tag__body']}>{label}</span>}
    </Text>
  );
};
