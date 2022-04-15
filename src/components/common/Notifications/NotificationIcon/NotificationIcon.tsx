import clsx from "clsx";
import * as React from "react";

import CheckCircleRoundedIcon from "../../../../icons/CheckCircleRounded";
import ForumRoundedIcon from "../../../../icons/ForumRounded";
import NotificationsRoundedIcon from "../../../../icons/NotificationsRounded";
import WarningRoundedIcon from "../../../../icons/WarningRounded";
import DangerousRoundedIcon from "../../../../icons/custom/DangerousRounded";
import styles from "./NotificationIcon.module.css";

export type NotificationVariant =
  | "brand"
  | "neutral"
  | "success"
  | "warning"
  | "alert";

type Props = {
  /**
   * Which variant to use. Each variant has a unique icon and color.
   */
  variant: NotificationVariant;
};

export const variantToIconAssetsMap = {
  brand: {
    icon: NotificationsRoundedIcon,
    style: styles.iconBrand,
    title: "attention",
  },
  neutral: {
    icon: ForumRoundedIcon,
    style: styles.iconNeutral,
    title: "notice",
  },
  success: {
    icon: CheckCircleRoundedIcon,
    style: styles.iconSuccess,
    title: "success",
  },
  warning: {
    icon: WarningRoundedIcon,
    style: styles.iconWarning,
    title: "warning",
  },
  alert: {
    icon: DangerousRoundedIcon,
    style: styles.iconAlert,
    title: "alert",
  },
};

/**
 * An icon that appears in notifcation components (Banner and Toast).
 * This icon communicates the tone of the notification through its image,
 * color, and title text.
 */
const NotificationIcon = ({ variant }: Props) => {
  const iconAssets = variantToIconAssetsMap[variant];

  return (
    <div className={clsx(styles.iconContainer, iconAssets.style)}>
      <iconAssets.icon purpose="informative" title={iconAssets.title} />
    </div>
  );
};

export default NotificationIcon;
