/* TODO: point to internal exports once fully migrated */
// import NotificationIcon from '@chanzuckerberg/eds/lib/common/Notifications/NotificationIcon';

import clsx from 'clsx';
import React from 'react';
import styles from './Toast.module.css';
import { Button } from '../Button/Button';

export type Variant = 'success' | 'alert';

export type Props = {
  /**
   * Additional class names that can be appended to the component, passed in for styling.
   */
  className?: string;
  /**
   * The child node(s) contains the toast message. Note: the toast message is displayed inside a TextPassage, so children can contain raw HTML
   */
  children: React.ReactNode;
  /**
   * The color of the Toast, based on EDS defined colors. Also determines the icon used.
   * Note that the Icon mapping matches the style of Banners.
   */
  variant: Variant;
  /**
   * Callback when Toast is dismissed.
   */
  onDismiss?: () => void;
};

/**
 * ```ts
 * import {Toast} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A toast used to provide information on the state of the page, usually in response to a
 * user action. Ex: The user updates their profile, and a toast pop-up informs them that the
 * data was successfully saved.
 */
export const Toast = ({
  children,
  className,
  variant,
  onDismiss,
  // Allow for additional attributes such as aria roles
  ...other
}: Props) => {
  const componentClassName = clsx(
    className,
    styles['toast'],
    variant === 'success' && styles['toast--success'],
    variant === 'alert' && styles['toast--alert'],
  );
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['toast__content']}>
        {/* TODO: point to internal NotificationIcon once fully migrated */}
        <svg fill="currentColor" width="16px" height="16px">
          <path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z" />
        </svg>
        {/* <NotificationIcon variant={variant} /> */}
        <p className={styles['toast__text']}>{children}</p>
      </div>
      {/* TODO: point to internal CloseButton once fully migrated */}
      {/* {onDismiss && <CloseButton color={variant} onClose={onDismiss} />} */}
      {onDismiss && <Button onClick={onDismiss}>close</Button>}
    </div>
  );
};

export default Toast;
