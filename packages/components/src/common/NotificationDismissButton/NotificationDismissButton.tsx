import { BannerColor } from "../../Banner";
import Button from "../../Button";
import CloseIcon from "../../Icons/Close";
import React from "react";
import clsx from "clsx";
import styles from "./NotificationDismissButton.module.css";

type DismissButtonProps = {
  className?: string;
  /**
   * The default color of the icon. Does not effect hover state.
   */
  color: BannerColor;
  onDismiss: () => void;
  /**
   * Size of the icon. Does not button size. The button is larger than the
   * icon to ensure the hit box is large enough (for accessibility).
   *
   * The string should be some number + px, rem, em, vh, etc. Ex: 28px.
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  size: string;
};

/**
 * Dismiss button for notification banners and toasts.
 *
 * Consumers need to set the --dismiss-hover-color variable in their styles
 * in order for the hover state to work correctly.
 */
const DismissButton = ({
  className,
  color,
  onDismiss,
  size,
}: DismissButtonProps) => (
  <Button
    className={clsx(styles.dismiss, className)}
    color={color}
    onClick={onDismiss}
    variant="link"
  >
    <CloseIcon role="img" size={size} title="close" />
  </Button>
);

export default DismissButton;
