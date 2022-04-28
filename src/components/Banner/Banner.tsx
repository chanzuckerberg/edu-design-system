import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import Button from "../Button";
import Heading, { HeadingElement } from "../Heading";
import Icon from "../Icon";
import Text from "../Text";
import colorStyles from "../common/Notifications/Notification.module.css";
import styles from "./Banner.module.css";

export type Variant = "brand" | "neutral" | "success" | "warning" | "error";

export type BannerProps = {
  /**
   * A button or link that's placed in the banner separately from the main content.
   */
  action?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The description/body text of the banner
   */
  description?: ReactNode;
  /**
   * The element the description renders as
   */
  descriptionAs?: "p" | "span";
  /**
   * Toggles the ability to dismiss the banner via an close button in the top right of the banner
   */
  dismissable?: boolean;
  /**
   * Optional callback to be triggered when the banner is dismissed
   */
  onDismiss?: () => void;
  /**
   * This is deprecated and will be removed in an upcoming release. Please use the default elevation 1
   *
   * The perceived elevation of the banner. An elevation of 0 appears flat against the surface while
   * an elevation of 1 appears to hover slightly. The hover appearance is used to separate the element
   * from the surrounding area. The flat version should only be used on white backgrounds.
   *
   * @deprecated
   */
  isFlat?: boolean;
  /**
   * Controls the layout of the banner
   * - **vertical** renders the banner content center aligned and stacked
   *
   * Vertical banners are used in narrow areas, like sidebars
   */
  orientation?: "vertical";
  /**
   * The title/heading of the banner
   */
  title?: ReactNode;
  /**
   * The element the title renders as
   */
  titleAs?: HeadingElement;
  /**
   * Stylistic variations for the banner type.
   * - **brand** - results in a purple banner
   * - **neutral** - results in a gray banner
   * - **success** - results in a green banner
   * - **warning** - results in a yellow banner
   * - **error** - results in a red banner
   */
  variant?: Variant;
};

const variantToIconAssetsMap: {
  [key: string]: {
    name: "notifications" | "forum" | "check-circle" | "warning" | "dangerous";
    title: string;
  };
} = {
  brand: {
    name: "notifications",
    title: "attention",
  },
  neutral: {
    name: "forum",
    title: "notice",
  },
  success: {
    name: "check-circle",
    title: "success",
  },
  warning: {
    name: "warning",
    title: "warning",
  },
  error: {
    name: "dangerous",
    title: "error",
  },
};

/**
 * ```ts
 * import {Banner} from "@chanzuckerberg/eds";
 * ```
 *
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 *
 * Example usage:
 *
 * ```tsx
 * <Banner
 *   onDismiss={handleDismiss}
 *   title="Some title"
 *   description="Some description"
 *   action={<Button>Some action</Button>}
 * />
 * ```
 */
export const Banner = ({
  action,
  className,
  description,
  descriptionAs = "p",
  dismissable,
  isFlat,
  onDismiss,
  orientation,
  variant = "brand",
  title,
  titleAs = "h3",
  ...other
}: BannerProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (isFlat && process.env.NODE_ENV !== "production") {
    console.warn(
      "The isFlat style is deprecated and will be removed in an upcoming release.\n",
      "Please remove this prop to use the default elevated style (with a border and drop shadow) instead.",
    );
  }

  function handleDismiss(e: any) {
    e.preventDefault();
    onDismiss && onDismiss();
    setDismissed(true);
  }

  if (dismissed) {
    return null;
  }

  const isHorizontal = !orientation;

  const componentClassName = clsx(
    // Base styles
    styles["banner"],
    className,
    // Variants
    variant === "brand" && colorStyles.colorBrand,
    variant === "neutral" && colorStyles.colorNeutral,
    variant === "success" && colorStyles.colorSuccess,
    variant === "warning" && colorStyles.colorWarning,
    variant === "error" && colorStyles.colorAlert,
    // Other options
    isHorizontal && styles["banner--horizontal"],
    dismissable && styles["banner--dismissable"],
    isFlat && styles["banner--flat"],
  );

  return (
    <article className={componentClassName} {...other}>
      {dismissable && (
        <Button
          className={styles["banner__close-btn"]}
          onClick={handleDismiss}
          status={variant}
          variant="icon"
        >
          <Icon name={"close"} purpose="informative" title={"dismiss module"} />
        </Button>
      )}

      <Icon
        className={styles["banner__icon"]}
        name={variantToIconAssetsMap[variant].name}
        purpose="informative"
        title={variantToIconAssetsMap[variant].title}
      />

      <div className={clsx(styles["banner__textAndAction"])}>
        <div className={clsx(styles["banner__textContent"])}>
          {title && (
            <Heading as={titleAs} size="h3" variant="inherit">
              {title}
            </Heading>
          )}
          {description && (
            <Text as={descriptionAs} variant="inherit">
              {description}
            </Text>
          )}
        </div>

        {action && (
          <div className={clsx(styles["banner__action"])}>{action}</div>
        )}
      </div>
    </article>
  );
};
Banner.displayName = "Banner";
