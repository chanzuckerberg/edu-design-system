import clsx from 'clsx';
import React from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus-v2';
import type { Status } from '../../util/variant-types';

import { IconV2 as Icon } from '../Icon';
import Text from '../Text';

import styles from './InlineNotification-v2.module.css';

type InlineNotificationProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  // Design API
  /**
   * Keyword to characterize the state of the notification
   */
  status?: Status;
  /**
   * Secondary text used to describe the notification in more detail
   */
  subTitle?: string;
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   */
  title: string;
};

/**
 * `import {InlineNotification} from "@chanzuckerberg/eds";`
 *
 * An alert placed within a section of a page to provide a contextual notification. For example, an error which applies to multiple fields within a form.
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
          <Text as="div" preset="body-xs">
            {subTitle}
          </Text>
        )}
      </div>
    </div>
  );
};

InlineNotification.displayName = 'InlineNotification';
