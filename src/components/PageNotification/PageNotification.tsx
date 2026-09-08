import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus';
import type { Status } from '../../util/variant-types';

import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';
import Text from '../Text';

import styles from './PageNotification.module.css';

export type PageNotificationProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'style'
> & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
  /**
   * CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:
   *
   * - `--page-notification__bg`
   * - `--page-notification__fg`
   */
  style?: PageNotificationCSSProperties;
  // Design API
  /**
   * Whether the button layout for the call to action is vertical or horizontal.
   */
  buttonLayout?: 'vertical' | 'horizontal';
  /**
   * Slot for a button or other interactive element to direct a user to a follow-up action
   */
  callToAction?: ReactNode;
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
  title?: string;
};

export interface PageNotificationCSSProperties extends React.CSSProperties {
  /**
   * Custom property to customize the background color of this component (e.g., background color)
   */
  '--page-notification__bg'?: string;

  /**
   * Custom property to customize the foreground color of this component (e.g., text, icon, etc.)
   */
  '--page-notification__fg'?: string;
}

/**
 * ## Usage
 *
 * * Notifications related to a section of a page (like a card, popover, or modal) should use an Inline Notification.
 * * Page Notifications are intended to display short messages. Ideally, a max of 3 lines.
 *
 * ## Interaction
 *
 * Designers can specify whether the notification is dismissible or not. A dismissible notification renders with a close icon in the top right.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Focus on a single message or piece of information.
 * * Ensure users can get the basic message and take action by scanning just the heading and CTA(s).
 * * Title: be short and descriptive, communicate the main message, and use sentence case.
 * * Body: keep to 1-2 sentences and use sentence case.
 *
 * ### Don'ts
 *
 * * Don't rely on color to convey meaning.
 * * Don't punctuate the end of the title.
 * * Don't repeat or paraphrase information from the heading in the body.
 * * Don't truncate content; if more information is needed, link to it or consider a different component.
 */
export const PageNotification = ({
  buttonLayout = 'vertical',
  callToAction,
  className,
  subTitle,
  onDismiss,
  status = 'informational',
  title,
  ...other
}: PageNotificationProps) => {
  const componentClassName = clsx(
    // Base styles
    styles['page-notification'],
    status && styles[`page-notification--status-${status}`],
    // Other options
    onDismiss && styles['page-notification--dismissable'],
    className,
  );

  return (
    <aside className={componentClassName} {...other}>
      <Icon
        className={styles['page-notification__icon']}
        name={getIconNameFromStatus(status)}
        purpose="decorative"
        size="24px"
      />

      <div
        className={clsx(
          styles['page-notification__body'],
          buttonLayout && styles[`page-notification--has-${buttonLayout}-cta`],
        )}
      >
        <div
          className={clsx(
            styles['page-notification__text'],
            subTitle && styles['page-notification--with-subTitle'],
          )}
        >
          {title && (
            <Heading as="h3" preset="title-md">
              {title}
            </Heading>
          )}
          {subTitle && (
            <Text
              as="p"
              className={styles['page-notification__sub-title']}
              preset="body-sm"
            >
              {subTitle}
            </Text>
          )}
        </div>
        {callToAction && (
          <div className={styles['page-notification__call-to-action']}>
            {callToAction}
          </div>
        )}
      </div>
      {onDismiss && (
        <Button
          aria-label="Dismiss the notification"
          className={styles['page-notification__close-button']}
          icon="close"
          iconLayout="icon-only"
          onClick={onDismiss}
          rank="tertiary"
          size="lg"
          variant="neutral"
        ></Button>
      )}
    </aside>
  );
};

PageNotification.displayName = 'PageNotification';
