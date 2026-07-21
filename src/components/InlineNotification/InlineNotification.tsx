import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus';
import type { Status } from '../../util/variant-types';

import Icon from '../Icon';
import Text from '../Text';

import styles from './InlineNotification.module.css';

type InlineNotificationProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  // Design API
  /**
   * Keyword to characterize the state of the notification
   *
   * **Default is `"informational"`**.
   */
  status?: Status;
  /**
   * Secondary text used to describe the content in more detail
   */
  subTitle?: ReactNode;
  /**
   * The title/heading of the component
   */
  title: string;
};

/**
 * ## Usage
 *
 * * To provide feedback to users about their actions, such as summarizing form-level errors after server-side validation.
 * * To give significant status updates about a task.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Error | Indicates an error next to a specific form field or UI element. | Invalid form input. Required field left empty. |
 * | Warning | Non-blocking alert about a potential issue. | Weak password. Deprecated selection. |
 * | Success | Confirms a successful user action related to a specific element. | Successfully saved value. |
 * | Hint | Provides guidance or clarification without requiring an action. | Input format guidance. Optional field context. |
 * | Info | Offers neutral, supportive information near the related element. | Explain why a field is disabled. |
 * | Validation feedback | Real-time response to user input as they type or select. | Password strength meters. |
 *
 * ## Interaction
 *
 * Inline notifications appear directly above the content they relate to and disappear once the
 * state that caused the alert has been resolved.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep titles short and descriptive—ideally one line—and communicate the main message in sentence case.
 * * In the body, explain how to resolve the issue in 1-2 sentences (no more than 2 lines) and include links to more info when necessary.
 * * Place the notification close to the relevant screen elements so it is understood in context.
 *
 * ### Dont's
 *
 * * Punctuate the end of the title.
 * * Repeat or summarize the title in the body.
 * * Use without an icon indicating the notification type and severity.
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
        size="16px"
      />
      <div className={styles['inline-notication__body']}>
        <Text
          as="div"
          className={styles[`inline-notification__title`]}
          preset="title-sm"
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
