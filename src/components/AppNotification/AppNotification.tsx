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
  color: 'dark' | 'light';

  // Component API
  /**
   * Contents of the component below the title and sub-title (used mainly for `ButtonGroup`)
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
 * `import {AppNotification} from "@chanzuckerberg/eds";`
 *
 * An alert placed at the top of an application which persists across pages.
 */
export const AppNotification = ({
  className,
  children,
  color = 'dark',
  onDismiss,
  subTitle,
  title,
  ...other
}: AppNotificationProps) => {
  const componentClassName = clsx(
    styles['app-notification'],
    color && styles[`app-notification--color-${color}`],
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
          <div className={styles['app-notification__actions']}>{children}</div>
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
            variant={color === 'dark' ? 'inverse' : 'neutral'}
          ></Button>
        )}
      </div>
    </div>
  );
};
