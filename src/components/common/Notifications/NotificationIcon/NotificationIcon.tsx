import clsx from "clsx";
import * as React from "react";

import Icon, { IconProps } from "../../../Icon";
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
    icon: (args: IconProps) => <Icon name="notifications" {...args} />,
    style: styles.iconBrand,
    title: "attention",
  },
  neutral: {
    icon: (args: IconProps) => <Icon name="forum" {...args} />,
    style: styles.iconNeutral,
    title: "notice",
  },
  success: {
    icon: (args: IconProps) => <Icon name="check-circle" {...args} />,
    style: styles.iconSuccess,
    title: "success",
  },
  warning: {
    icon: (args: IconProps) => <Icon name="warning" {...args} />,
    style: styles.iconWarning,
    title: "warning",
  },
  alert: {
    icon: (args: IconProps) => <Icon name="dangerous" {...args} />,
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
