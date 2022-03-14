/* TODO: point to internal exports once fully migrated */
// import { Text, CloseButton } from '@chanzuckerberg/eds';
// import colorStyles from '@chanzuckerberg/eds/lib/common/Notifications/Notification.module.css';
// import NotificationIcon from '@chanzuckerberg/eds/lib/common/Notifications/NotificationIcon';

import clsx from 'clsx';
import React from 'react';
import styles from './Toast.module.css';

export type Variant = 'success' | 'alert';

export type Props = {
  /**
   * Additional class names passed in for styling.
   */
  className?: string;
  /**
   * The contents of the toast.
   */
  text: React.ReactNode;
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
  text,
  className,
  variant,
  onDismiss,
  // Allow for additional attributes such as aria roles
  ...rest
}: Props) => {
  return (
    <div
      className={clsx(
        className,
        styles.toast,
        /* TODO: uncomment and point to corresponding style classes once Notifications is fully migrated */
        // variant === 'success' && colorStyles.colorSuccess,
        // variant === 'alert' && colorStyles.colorAlert,
      )}
      {...rest}
    >
      <div className={styles['toast--content']}>
        {/* TODO: point to internal Text and NotificaitonIcon once fully migrated */}
        {/* <NotificationIcon variant={variant} />
        <Text color="inherit" size="sm">
          {text}
        </Text> */}
        <p>{text}</p> {/* replace this */}
      </div>
      {/* TODO: point to internal CloseButton once fully migrated */}
      {/* {onDismiss && <CloseButton color={variant} onClose={onDismiss} />} */}
      {onDismiss && <button onClick={onDismiss}>temp close tooltip</button>}
    </div>
  );
};

export default Toast;
