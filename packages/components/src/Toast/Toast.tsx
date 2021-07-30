import CloseButton from "../common/CloseButton";
import NotificationIcon from "../common/Notifications/NotificationIcon";
import React from "react";
import Text from "../Text";
import clsx from "clsx";
import colorStyles from "../common/Notification.module.css";
import styles from "./Toast.module.css";

export type Color = "success" | "alert";

type Props = {
  /**
   * Additional class names passed in for styling.
   */
  className?: string;
  /**
   * The contents of the toast.
   */
  children: React.ReactNode;
  /**
   * The color of the Toast, based on EDS defined colors. Also determines the icon used.
   * Note that the Icon mapping matches the style of Banners.
   */
  color: Color;
  /**
   * Callback when Toast is dismissed.
   */
  onDismiss?: () => void;
};

/**
 * A toast used to provide information on the state of the page, usually in response to a
 * user action. Ex: The user updates their profile, and a toast pop-up informs them that the
 * data was successfully saved.
 */
export default function Toast({
  children,
  className,
  color,
  onDismiss,
  // Allow for additional attributes such as aria roles
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        className,
        styles.toastDialog,
        color === "success" && colorStyles.colorSuccess,
        color === "alert" && colorStyles.colorAlert,
      )}
      {...rest}
    >
      <div className={styles.content}>
        <NotificationIcon variant={color} />
        <Text color="inherit" size="sm">
          {children}
        </Text>
      </div>
      {onDismiss && (
        <CloseButton color={color} onClose={onDismiss} size="32px" />
      )}
    </div>
  );
}
