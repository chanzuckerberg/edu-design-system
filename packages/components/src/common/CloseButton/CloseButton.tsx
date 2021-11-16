import clsx from "clsx";
import React from "react";
import Button from "../../Button";
import CloseRoundedIcon from "../../Icons/CloseRounded";
import styles from "./CloseButton.module.css";

export type Variant = "brand" | "neutral" | "success" | "warning" | "alert";

type CloseButtonProps = {
  /**
   * The color theme of the icon. Also affects the hover state.
   */
  color: Variant;
  /**
   * Size of the icon. Does not affect actual button size. The button is larger than the
   * icon to ensure the hit box is large enough (for accessibility).
   *
   * The string should be some number + px, rem, em, vh, etc. Ex: 2rem.
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  size?: string;
  "aria-label"?: string;
  onClose: () => void;
  className?: string;
};

/**
 * Generic close button. Currently only used for notification banners and toasts.
 *
 * Consumers need to set the --close-hover-color variable in their styles
 * in order for the hover state to work correctly.
 */
const CloseButton = ({
  className,
  color = "neutral",
  onClose,
  size = "2rem",
  "aria-label": ariaLabel = "close",
  ...rest
}: CloseButtonProps) => (
  <Button
    className={clsx(
      styles.button,
      className,
      // Color props
      color === "brand" && styles.colorBrand,
      color === "neutral" && styles.colorNeutral,
      color === "success" && styles.colorSuccess,
      color === "warning" && styles.colorWarning,
      color === "alert" && styles.colorAlert,
    )}
    color={color}
    onClick={onClose}
    variant="link"
    {...rest}
  >
    <CloseRoundedIcon purpose="informative" size={size} title={ariaLabel} />
  </Button>
);

export default CloseButton;
