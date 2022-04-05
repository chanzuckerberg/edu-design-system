import clsx from "clsx";
import React from "react";
import Button from "../Button";
import Heading, { HeadingElement } from "../Heading";
import CloseRoundedIcon from "../Icons/CloseRounded";
import Text from "../Text";
import colorStyles from "../common/Notifications/Notification.module.css";
import NotificationIcon, {
  NotificationVariant,
} from "../common/Notifications/NotificationIcon";
import styles from "./Banner.module.css";

export type BannerProps = {
  /**
   * Additional class names passed in for styling
   */
  className?: string;
  /**
   * The color of the banner, based on EDS defined colors. Also determines the icon used.
   */
  color?: NotificationVariant;
  /**
   * The text content of the banner.
   *
   * Please note that this can contain text links, but block buttons should be passed in via the `action` prop.
   */
  textContent: React.ReactNode;
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

/**
 * ```ts
 * import {Banner} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 *
 * Example usage:
 *
 * ```tsx
 * <Banner
 *   onDismiss={handleDismiss}
 *   textContent={
 *     <>
 *       <Banner.Title>{bannerTitle}</Banner.Title>
 *       <Banner.Message>{bannerMessage}</Banner.Message>
 *     </>
 *   }
 * />
 * ```
 */
export default function Banner({
  className,
  color = "brand",
  textContent,
  action,
  onDismiss,
  orientation = "horizontal",
  elevation = 1,
}: BannerProps) {
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
        color === "brand" && colorStyles.colorBrand,
        color === "neutral" && colorStyles.colorNeutral,
        color === "success" && colorStyles.colorSuccess,
        color === "warning" && colorStyles.colorWarning,
        color === "alert" && colorStyles.colorAlert,
      )}
    >
      {onDismiss && (
        <Button
          className={styles.dismiss}
          color={color}
          onClick={onDismiss}
          variant="plain"
        >
          <CloseRoundedIcon
            purpose="informative"
            size={"1.75rem"}
            title={"dismiss banner"}
          />
        </Button>
      )}

      <NotificationIcon variant={color} />

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
          {textContent}
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
Banner.displayName = "Banner";

type TitleProps = {
  children?: React.ReactNode;
  as: HeadingElement;
};
/**
 * This should import a Heading element type
 */
const BannerTitle: React.FC<TitleProps> = (props: TitleProps) => {
  return props.children ? (
    <Heading as={props.as} color={"inherit"} size="h3">
      {props.children}
    </Heading>
  ) : null;
};
Banner.Title = BannerTitle;
Banner.Title.displayName = "Banner.Title";

type MessageProps = {
  children?: React.ReactNode;
};
/**
 * This should import a Text element type
 */
const BannerMessage: React.FC<MessageProps> = (props: MessageProps) => {
  return props.children ? (
    <Text color={"inherit"} size="body">
      {props.children}
    </Text>
  ) : null;
};
Banner.Message = BannerMessage;
Banner.Message.displayName = "Banner.Message";
