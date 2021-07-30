import Button from "../../Button";
import CloseRoundedIcon from "../../Icons/CloseRounded";
import { NotificationVariant } from "../Notifications/NotificationIcon";
import React from "react";
import clsx from "clsx";
import styles from "./CloseButton.module.css";

type CloseButtonProps = {
  className?: string;
  /**
   * The default color of the icon. Does not effect hover state.
   */
  color: NotificationVariant;
  onClose: () => void;
  /**
   * Size of the icon. Does not button size. The button is larger than the
   * icon to ensure the hit box is large enough (for accessibility).
   *
   * The string should be some number + px, rem, em, vh, etc. Ex: 2rem.
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  size: string;
};

/**
 * Generic close button. Currently only used for notification banners and toasts.
 *
 * Consumers need to set the --close-hover-color variable in their styles
 * in order for the hover state to work correctly.
 */
const CloseButton = ({ className, color, onClose, size }: CloseButtonProps) => (
  <Button
    className={clsx(styles.close, className)}
    color={color}
    onClick={onClose}
    variant="link"
  >
    <CloseRoundedIcon purpose="informative" size={size} title="close" />
  </Button>
);

export default CloseButton;
