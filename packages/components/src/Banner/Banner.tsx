import Heading, { HeadingElement } from "../Heading";
import NotificationIcon, {
  NotificationVariant,
} from "../common/Notifications/NotificationIcon";
import CloseButton from "../common/CloseButton";
import React from "react";
import Text from "../Text";
import clsx from "clsx";
import styles from "./Banner.module.css";

type Props = {
  /**
   * Additional class names passed in for styling
   */
  className?: string;
  /**
   * The color of the banner, based on EDS defined colors. Also determines the icon used.
   */
  color?: NotificationVariant;
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

<<<<<<< HEAD
=======
type DismissButtonProps = {
  color: BannerColor;
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

>>>>>>> a65fb35... chore(banner): split BannerIcon into separate file
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
      {onDismiss && (
        <CloseButton
          className={styles.dismiss}
          color={color}
          onClose={onDismiss}
          size="28px"
        />
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
