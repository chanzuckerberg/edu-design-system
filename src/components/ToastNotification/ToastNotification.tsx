import clsx from 'clsx';
import React, { useEffect } from 'react';

import { assertEdsUsage } from '../../util/logging';
import type { Status } from '../../util/variant-types';
import Button from '../Button';
import { IconSlot, useSemanticIcon } from '../Icon';
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
   * CSS properties defined for the HTML element.
   */
  style?: ToastNotificationCSSProperties;
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
  status?: Status;
  /**
   * The title/heading of the notification
   */
  title: string;
};

/**
 * Color overrides a toast still honors, kept out of the component's documented API on
 * purpose.
 *
 * `--toast__icon` recolors the status icon, which is the one part of a toast a reader
 * uses to tell severity apart at a glance, and recoloring it away from its status is how
 * a favorable toast ends up looking critical. The other two travel with it. They are not
 * advertised, so nothing points a consumer at them, and the toasts already relying on
 * them keep working.
 */
export interface ToastNotificationCSSProperties extends React.CSSProperties {
  '--toast__bg'?: string;

  '--toast__fg'?: string;

  '--toast__icon'?: string;
}

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Success | Confirms a successful action. | Form submitted, settings saved, message sent. |
 * | Error | Alerts the user to a failure or problem. | Failed save, API error, input validation failure. |
 * | Warning | Warns about potential issues without blocking progress. | Unsaved changes, feature deprecation, connectivity issues. |
 * | Info | Shares neutral or contextual information. | Tip or hint, background updates, non-critical status. |
 *
 * ## Interaction
 *
 * Toast notifications can be manually dismissed or auto-dismissed using the `dismissType` prop; auto toasts are automatically dismissed after 8 seconds. When building with `ToastNotification`, each should slide in and out from the top right of the screen, placed 16px from the bottom and right side of the viewport, fading in with the `eds-anim-fade-long` token and out with the `eds-anim-fade-quick` token.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep the toast to a single, simple message such as a confirmation.
 * * Use simple phrases or sentence fragments, in sentence case.
 * * Aim for 1 line of text or less.
 *
 * ### Don'ts
 *
 * * Don't use more than 2 lines of text; if more is required, find another way to provide the information.
 * * Don't include any information in a toast that may be needed again.
 * * Don't punctuate incomplete sentences, and don't rely on color to convey meaning.
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

  // Both icons here are semantic: the status icon carries the toast's severity, and the
  // dismiss button is the same close affordance used everywhere else. The app sets either
  // one through `IconProvider`, not per toast.
  const statusIcon = useSemanticIcon(status);
  const closeIcon = useSemanticIcon('close');

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
      <IconSlot
        className={styles['toast__icon']}
        content={statusIcon}
        purpose="decorative"
        size="24px"
      />
      <div className={styles['toast__body']}>
        <Text as="span" className={styles['toast__text']} preset="body-md">
          {title}
        </Text>
      </div>
      {onDismiss && (
        <Button
          aria-label="close"
          className={styles['toast__dismiss-button']}
          context="default"
          icon={closeIcon}
          iconLayout="icon-only"
          onClick={onDismiss}
          rank="tertiary"
          size="md"
          variant="inverse"
        />
      )}
    </div>
  );
};
