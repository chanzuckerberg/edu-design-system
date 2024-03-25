import clsx from 'clsx';
import React from 'react';

import type { Status } from '../../util/variant-types';

import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './InlineNotification-v2.module.css';

/**
 * TODO-AH:
 * - feedback on api naming in figma
 * - handling of aria-live for a11y
 */

type InlineNotificationProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  // Design API
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   */
  title: string;
  /**
   * Text used for the main description of the notification
   */
  status?: Status;
  /**
   * Secondary text used to describe the notification in more detail
   */
  subTitle?: string;
};

/**
 * Map statuses to existing icon names
 * @param status component status
 * @returns the matching icon name
 */
function getIconNameFromStatus(status: Status): IconName {
  const map: Record<Status, IconName> = {
    informational: 'info',
    critical: 'dangerous',
    warning: 'warning',
    favorable: 'check-circle',
  };
  return map[status];
}

/**
 * `import {InlineNotification} from "@chanzuckerberg/eds";`
 *
 * This component provides an inline banner accompanied with an icon for messaging users.
 */
export const InlineNotification = ({
  className,
  status = 'informational',
  subTitle,
  title,
  ...other
}: InlineNotificationProps) => {
  const componentClassName = clsx(
    styles['inline-notification'],
    status && styles[`inline-notification--status-${status}`],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      <Icon
        className={styles['inline-notification__icon']}
        name={getIconNameFromStatus(status)}
        purpose="decorative"
        size="1rem"
      />
      <div className={styles['inline-notication__body']}>
        <Text
          as="div"
          className={styles[`inline-notification__title`]}
          preset="title-xs"
        >
          {title}
        </Text>
        {subTitle && (
          <Text
            as="div"
            className={styles[`inline-notification__sub-title`]}
            preset="body-xs"
          >
            {subTitle}
          </Text>
        )}
      </div>
    </div>
  );
};

InlineNotification.displayName = 'InlineNotification';
