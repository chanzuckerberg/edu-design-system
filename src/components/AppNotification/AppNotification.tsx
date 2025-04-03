import clsx from 'clsx';
import React, { type ReactNode } from 'react';
import { assertEdsUsage } from '../../util/logging';
import Button from '../Button';
import Text from '../Text';

import styles from './AppNotification.module.css';

// TODO(next-major): change export to type for consistency
export interface AppNotificationProps {
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
   *
   * ----
   *
   * @deprecated
   * TODO(next-major): Do not use this prop. It is deprecated and will be removed in v17 of EDS. Use `variant` instead.
   */
  color?: 'dark' | 'light';

  /**
   * Treatment for component (whether it is dark on light text, or light on dark text)
   */
  variant: 'default' | 'inverse';

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
}

/**
 * `import {AppNotification} from "@chanzuckerberg/eds";`
 *
 * An alert placed at the top of an application which persists across pages.
 */
export const AppNotification = ({
  className,
  children,
  color,
  onDismiss,
  subTitle,
  title,
  variant = 'default',
  ...other
}: AppNotificationProps) => {
  const componentClassName = clsx(
    styles['app-notification'],
    color && styles[`app-notification--color-${color}`],
    variant && styles[`app-notification--variant-${variant}`],
    className,
  );

  assertEdsUsage(
    [typeof color !== 'undefined'],
    '`color` is deprecated, and should not be used. Use `variant` instead.',
  );

  let variantValue = variant;

  if (typeof color !== 'undefined') {
    switch (color) {
      case 'dark':
        variantValue = 'default';
        break;
      case 'light':
        variantValue = 'inverse';
        break;
    }
  }

  return (
    <div className={componentClassName} role="status" {...other}>
      <div className={styles['app-notification__content']}>
        <section>
          <Text
            as="div"
            className={styles['app-notification__title']}
            preset="headline-sm-bold"
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
            variant={variantValue === 'inverse' ? 'neutral' : 'inverse'}
          ></Button>
        )}
      </div>
    </div>
  );
};
