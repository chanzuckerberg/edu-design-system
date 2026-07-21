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
 * ## Usage
 *
 * Status UI elements that visually represent metadata, attributes, or categorical information about an item. Tags usually represent system-generated information.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | State indicators | Shows the current status of an item or process. | A green "Active" tag for a user profile. |
 * | Availability | Indicates if something is available or not. | "Available" or "Unavailable" tag for a product. |
 * | Progress / Workflow | Marks the stage in a workflow or pipeline. | "In Review," "Draft," or "Completed" tags for a document. |
 * | Urgency / Priority | Highlights critical items needing attention. | "High Priority" or "Urgent" tag in a task list. |
 * | Validation status | Shows whether an item passed or failed validation. | "Valid" or "Error" status tags for form inputs. |
 * | New or updated content | Marks new or recently changed items. | A "New" or "Updated" tag for an article or notification. |
 *
 * ### Best Practices
 *
 * * Use short labels, keeping them to 1-2 words since tags represent discrete pieces of information.
 * * When using multiple tags together, separate them with 16px of space.
 * * Use tag status variants that are appropriate for the tag's content.
 * * Don't use tags solely for their colors or in a semantically incorrect way. If you need color-coded tags that are not tied to a particular status, reach out to EDS.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep labels to 1-2 words.
 * * Remember that tags represent discrete pieces of information.
 *
 * ### Dont's
 *
 * * Don't overload users with excessive content, which increases cognitive load.
 * * Don't rely on just color to communicate status—add text or icons.
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
