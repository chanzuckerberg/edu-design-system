import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus';
import type { Status } from '../../util/variant-types';

import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';
import Text from '../Text';

import styles from './PageNotification.module.css';

export type PageNotificationProps = React.HTMLAttributes<HTMLElement> & {
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
   * Secondary text used to describe the content in more detail
   */
  subTitle?: ReactNode;
  /**
   * The title/heading of the component
   */
  title?: string;
};

/**
 * `import {PageNotification} from "@chanzuckerberg/eds";`
 *
 * An alert placed at the top of a page which impacts the entire experience on a screen.
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
        <div className={styles['page-notification__text']}>
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
