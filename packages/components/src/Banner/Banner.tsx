import Heading, { HeadingElement } from "../Heading";
import Button from "../Button";
import CheckCircleIcon from "../Icons/CheckCircle";
import CloseIcon from "../Icons/Close";
import ForumIcon from "../Icons/Forum";
import NotificationsIcon from "../Icons/Notifications";
import React from "react";
import SentimentVeryDissatisfiedIcon from "../Icons/SentimentVeryDissatisfied";
import Text from "../Text";
import WarningIcon from "../Icons/Warning";
import clsx from "clsx";
import styles from "./Banner.module.css";

type Color = "brand" | "neutral" | "success" | "warning" | "alert";

type Props = {
  /**
   * Additional class names passed in for styling
   */
  className?: string;
  /**
   * The color of the banner, based on EDS defined colors. Also determines the icon used.
   */
  color?: Color;
  /**
   * The contents of the banner in addition to the icon
   */
  children: React.ReactNode;
  /**
   * A button or link that's placed in the banner separately from the main content.
   */
  action?: React.ReactNode;
  /**
   * Callback when banner is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
  /**
   * Whether the card is laid out horizontally or stacked vertically.
   * The vertical orientation makes the banner look more like a card. It has the same styling as
   * the horizontal banner in mobile view. This format is intended to be used in sidebars or
   * other horizontally limited spaces.
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The perceived elevation of the banner. An elevation of 0 appears flat against the surface while
   * an elevation of 1 appears to hover slightly. The hover appearance is used to separate the element
   * from the surrounding area. The flat version should only be used on white backgrounds.
   */
  elevation?: 0 | 1;
};

export const BannerIcon = ({ color }: { color: Color }) => {
  // TODO: get final titles
  const colorToIconMap = {
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
      // TODO: get final icon
      icon: SentimentVeryDissatisfiedIcon,
      style: styles.iconAlert,
      title: "alert",
    },
  };

  const iconAssets = colorToIconMap[color];

  return (
    <div className={clsx(styles.icon, iconAssets.style)}>
      <iconAssets.icon role="img" title={iconAssets.title} />
    </div>
  );
};

type DismissButtonProps = {
  color: Color;
  onDismiss: () => void;
};

const DismissButton = ({ color, onDismiss }: DismissButtonProps) => (
  <Button
    className={styles.dismiss}
    color={color}
    onClick={onDismiss}
    variant="link"
  >
    <CloseIcon role="img" size="28px" title="close" />
  </Button>
);

/**
 * This should import a Heading element type
 */
Banner.Title = function BannerTitle(props: {
  children?: React.ReactNode;
  as: HeadingElement;
}) {
  return props.children ? (
    <Heading as={props.as} color={"inherit"} size="h3">
      {props.children}
    </Heading>
  ) : null;
};

/**
 * This should import a Text element type
 */
Banner.Body = function BannerBody(props: { children?: React.ReactNode }) {
  return props.children ? (
    <Text color={"inherit"} size="body">
      {props.children}
    </Text>
  ) : null;
};

/**
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 */
export default function Banner({
  className,
  color = "brand",
  children,
  action,
  onDismiss,
  orientation = "horizontal",
  elevation = 1,
}: Props) {
  const isHorizontal = orientation === "horizontal";

  return (
    <article
      className={clsx(
        className,
        styles.bannerDialog,
        isHorizontal && styles.horizontal,
        elevation === 0 && styles.elevation0,
        onDismiss && styles.dismissable,
        // Color props
        color === "brand" && styles.colorBrand,
        color === "neutral" && styles.colorNeutral,
        color === "success" && styles.colorSuccess,
        color === "warning" && styles.colorWarning,
        color === "alert" && styles.colorAlert,
      )}
    >
      {onDismiss && <DismissButton color={color} onDismiss={onDismiss} />}

      <BannerIcon color={color} />

      <div
        className={clsx(
          styles.textAndAction,
          isHorizontal && styles.horizontal,
        )}
      >
        <div
          className={clsx(
            styles.textContent,
            isHorizontal && styles.horizontal,
          )}
        >
          {children}
        </div>
        {action && (
          <div
            className={clsx(styles.action, isHorizontal && styles.horizontal)}
          >
            {action}
          </div>
        )}
      </div>
    </article>
  );
}
