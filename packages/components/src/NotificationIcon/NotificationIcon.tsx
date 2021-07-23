import * as React from "react";

import { BannerColor } from "../Banner";
import CheckCircleIcon from "../Icons/CheckCircle";
import DangerousRoundedIcon from "../Icons/custom/DangerousRounded";
import ForumIcon from "../Icons/Forum";
import NotificationsIcon from "../Icons/Notifications";
import WarningIcon from "../Icons/Warning";
import styles from "./NotificationIcon.module.css";

type Props = {
  /**
   * Which variant to use. Each variant has a unique icon and color.
   */
  variant: BannerColor;
};

// TODO: get final titles
export const variantToIconAssetsMap = {
  brand: {
    icon: NotificationsIcon,
    style: styles.iconBrand,
    title: "attention",
  },
  neutral: {
    icon: ForumIcon,
    style: styles.iconNeutral,
    title: "notice",
  },
  success: {
    icon: CheckCircleIcon,
    style: styles.iconSuccess,
    title: "success",
  },
  warning: {
    icon: WarningIcon,
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
 * This icon communicates the tone of the notification and is through its image,
 * color, and title text.
 */
const NotificationIcon = ({ variant }: Props) => {
  const iconAssets = variantToIconAssetsMap[variant];

  return (
    <div className={iconAssets.style}>
      <iconAssets.icon role="img" title={iconAssets.title} />
    </div>
  );
};

export default NotificationIcon;
