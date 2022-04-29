import clsx from "clsx";
import React from "react";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import colorStyles from "../common/Notifications/Notification.module.css";
import NotificationIcon from "../common/Notifications/NotificationIcon";
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
 * ```ts
 * import {Toast} from "@chanzuckerberg/eds";
 * ```
 *
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
  // While the v0 to v1 migration is happening, the Button and Toast will briefly
  // be out of sync regarding the name of the red component style.
  const buttonStatus = color === "alert" ? "error" : color;

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
        <Text size="sm" variant="inherit">
          {children}
        </Text>
      </div>
      {onDismiss && (
        <Button onClick={onDismiss} status={buttonStatus} variant="icon">
          <Icon
            name="close"
            purpose="informative"
            size={"2rem"}
            title={"dismiss message"}
          />
        </Button>
      )}
    </div>
  );
}
