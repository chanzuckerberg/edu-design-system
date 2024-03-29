import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus';
import type { Status } from '../../util/variant-types';
import Heading from '../Heading';
import Icon from '../Icon';
import Text from '../Text';

import styles from './BannerNotification.module.css';

export type BannerNotificationProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
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
   */
  status?: Status;
  /**
   * Secondary text used to describe the notification in more detail
   */
  subTitle?: string;
  /**
   * The title/heading of the notification
   */
  title?: string;
};

/**
 * `import {BannerNotification} from "@chanzuckerberg/eds";`
 *
 * An alert placed at the top of a page which impacts the entire experience on a screen.
 */
export const BannerNotification = ({
  buttonLayout = 'vertical',
  callToAction,
  className,
  subTitle,
  onDismiss,
  status = 'informational',
  title,
}: BannerNotificationProps) => {
  const componentClassName = clsx(
    // Base styles
    styles['banner'],
    status && styles[`banner-notification--status-${status}`],
    // Other options
    onDismiss && styles['banner--dismissable'],
    className,
  );

  return (
    <aside className={componentClassName}>
      <Icon
        className={styles['banner-notification__icon']}
        name={getIconNameFromStatus(status)}
        purpose="decorative"
        size="1.5rem"
      />

      <div
        className={clsx(
          styles['banner-notification__body'],
          buttonLayout &&
            styles[`banner-notification--has-${buttonLayout}-cta`],
        )}
      >
        <div className={styles['banner-notification__text']}>
          {/* TODO-AH: apply aria-live? */}
          {title && (
            <Heading as="h3" preset="title-md">
              {title}
            </Heading>
          )}
          {subTitle && (
            <Text
              as="p"
              className={styles['banner-notification__sub-title']}
              preset="body-sm"
            >
              {subTitle}
            </Text>
          )}
        </div>
        {callToAction && (
          <div className={styles['banner-notification__call-to-action']}>
            {callToAction}
          </div>
        )}
      </div>
      {/* TODO-AH: Use `Button` properly */}
      {onDismiss && (
        <button
          className={styles['banner-notification__close-button']}
          onClick={onDismiss}
        >
          <Icon
            name="close"
            purpose="informative"
            size="1.5rem"
            title="dismiss notification"
          />
        </button>
      )}
    </aside>
  );
};

BannerNotification.displayName = 'BannerNotification';
