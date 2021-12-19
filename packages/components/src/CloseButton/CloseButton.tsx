import clsx from "clsx";
import React, { forwardRef } from "react";
import Button from "../Button";
import CloseRoundedIcon from "../Icons/CloseRounded";
import styles from "./CloseButton.module.css";

export type Variant = "brand" | "neutral" | "success" | "warning" | "alert";

type CloseButtonProps = {
  /**
   * The color theme of the icon. Also affects the hover state.
   */
  color?: Variant;
  /**
   * Size of the icon. Does not affect actual button size. The button is larger than the
   * icon to ensure the hit box is large enough (for accessibility).
   *
   * The string should be some number + px, rem, em, vh, etc. Ex: 2rem.
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  size?: string;
  /**
   * Custom aria-label. If undefined, "close" will be used.
   */
  "aria-label"?: string;
  onClose: () => void;
  className?: string;
};

/**
 * Generic close button.
 */
const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      className,
      color = "neutral",
      onClose,
      size = "2rem",
      "aria-label": ariaLabel = "close",
      ...rest
    },
    ref,
  ) => (
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
      ref={ref}
      {...rest}
    >
      <CloseRoundedIcon purpose="informative" size={size} title={ariaLabel} />
    </Button>
  ),
);
CloseButton.displayName = "CloseButton";

export default CloseButton;
