import clsx from 'clsx';
import React, { type ReactNode } from 'react';
import Button from '../Button';
import Text from '../Text';

import styles from './AppNotification.module.css';

export type AppNotificationProps = {
  // Design API
  /**
   * The title/heading of the notification
   */
  title: string;
  /**
   * Secondary text used to describe the notification in more detail
   */
  subTitle: ReactNode;
  /**
   * Treatment for component (whether it is dark on light text, or light on dark text)
   */
  variant: 'default' | 'inverse';

  // Component API
  /**
   * Contents of the component below the title and sub-title (used mainly for `ButtonGroup` containing ranked `Buttons`)
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback when banner is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
};

/**
 * ## Usage
 *
 * * Use app notifications sparingly for global messages that affect an entire system.
 * * Don't use them for engagement messaging, upselling a new feature, or feedback messaging. Use an inline notification or a toast notification instead.
 * * Don't use for quick confirmation messages. Use a toast component instead because they appear and disappear with little disruption.
 *
 * ### Best Practices
 *
 * * Do use for a global condition required for the website or app to function, for example, maintenance updates.
 * * Don't use for quick confirmation messages.
 *
 * ## Interaction
 *
 * App notifications follow users from screen to screen and remain until dismissed or until the state that caused the notification is resolved. Designers can specify whether the notification is dismissable or persistent. When dismissable, an "X" appears in the top right corner.
 *
 * ## Content & Accessibility
 *
 * App notification titles should be concise, ideally no more than two lines long.
 *
 * ### Do's
 *
 * * Focus on a single message or piece of information.
 * * Ensure users can get the basic message and take action by scanning just the heading and CTA(s).
 * * Keep the title short and descriptive, communicating the main message in sentence case.
 * * Keep the body to 1-2 sentences, using sentence case.
 *
 * ### Don'ts
 *
 * * Don't rely on color to convey meaning.
 * * Don't punctuate the end of the title.
 * * Don't repeat or paraphrase information in the heading.
 * * Don't truncate content; if more information is needed, link to it or consider a different component.
 */
export const AppNotification = ({
  className,
  children,
  onDismiss,
  subTitle,
  title,
  variant = 'default',
  ...other
}: AppNotificationProps) => {
  const componentClassName = clsx(
    styles['app-notification'],
    variant && styles[`app-notification--variant-${variant}`],
    className,
  );

  return (
    <div className={componentClassName} role="status" {...other}>
      <div className={styles['app-notification__content']}>
        <section>
          <Text
            as="div"
            className={styles['app-notification__title']}
            preset="headline-sm"
          >
            {title}
          </Text>
          <Text
            as="span"
            className={styles['app-notification__sub-title']}
            preset="body-md"
          >
            {subTitle}
          </Text>
          {children && (
            <div className={styles['app-notification__actions']}>
              {children}
            </div>
          )}
        </section>
        {onDismiss && (
          <Button
            aria-label="close"
            className={styles['app-notification__close-btn']}
            context="default"
            icon="close"
            iconLayout="icon-only"
            onClick={onDismiss}
            rank="tertiary"
            variant={variant === 'inverse' ? 'neutral' : 'inverse'}
          ></Button>
        )}
      </div>
    </div>
  );
};
