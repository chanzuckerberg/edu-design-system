import clsx from 'clsx';
import React, { useEffect } from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus';
import { assertEdsUsage } from '../../util/logging';
import type { Status } from '../../util/variant-types';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';

import styles from './ToastNotification.module.css';

export type ToastNotificationProps = {
  // Component API
  /**
   * Additional class names that can be appended to the component, passed in for styling.
   */
  className?: string;
  /**
   * Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
  /**
   * Length of time to wait until `onDismiss` is called
   */
  timeout?: number;
  // Design API
  /**
   * Determines whether the toast notification will dismiss on its own, or due to user action. When set to `"auto"`,
   * it will dismiss after 8 seconds.
   *
   * **Default is `"manual"`**.
   */
  dismissType?: 'manual' | 'auto';
  /**
   * Keyword to characterize the state of the notification
   */
  status?: Extract<Status, 'favorable' | 'critical'>;
  /**
   * The title/heading of the notification
   */
  title: string;
};

/**
 * `import {ToastNotification} from "@chanzuckerberg/eds";`
 *
 * Toasts display brief, temporary notifications. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken.
 */
export const ToastNotification = ({
  className,
  dismissType = 'manual',
  onDismiss,
  status = 'favorable',
  timeout = 8000,
  title,
  ...other
}: ToastNotificationProps) => {
  const componentClassName = clsx(
    styles['toast'],
    status && styles[`toast--status-${status}`],
    className,
  );

  assertEdsUsage(
    [!!timeout && typeof onDismiss === 'undefined' && dismissType === 'auto'],
    'When using dismissType=auto, an onDismiss method must be defined',
    'error',
  );

  useEffect(() => {
    const expireId =
      dismissType === 'auto'
        ? setTimeout(() => {
            onDismiss && onDismiss();
          }, timeout)
        : undefined;

    return () => clearTimeout(expireId);
  }, [onDismiss, dismissType, timeout]);

  return (
    <div className={componentClassName} {...other}>
      <Icon
        className={styles['toast__icon']}
        name={getIconNameFromStatus(status)}
        purpose="decorative"
        size="30px"
      />
      <div className={styles['toast__body']}>
        <Text as="span" className={styles['toast__text']} preset="title-md">
          {title}
        </Text>
      </div>
      {onDismiss && (
        <Button
          aria-label="close"
          className={styles['toast__dismiss-button']}
          context="default"
          icon="close"
          iconLayout="icon-only"
          onClick={onDismiss}
          rank="tertiary"
          variant="neutral"
        />
      )}
    </div>
  );
};
