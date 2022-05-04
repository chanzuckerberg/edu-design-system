import clsx from "clsx";
import React from "react";
import Text from "../Text";
import styles from "./Tag.module.css";

export type Color =
  | "neutral"
  | "error"
  | "success"
  | "warning"
  | "yield"
  | "brand";

export const stylesByColor = {
  neutral: styles.colorNeutral,
  warning: styles.colorWarning,
  brand: styles.colorBrand,
  error: styles.colorError,
  yield: styles.colorYellow,
  success: styles.colorSuccess,
};

type Props = {
  /**
   * The color variant of the tag. New variants should be supported in the flow type,
   * in the VARIANTS array, and by its separate style in CSS file.
   */
  variant?: Color;
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  /**
   * The tag icon (shouldn't provide color or size since those are determined
   * by the color prop).
   */
  icon?: React.ReactNode;
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   */
  text?: React.ReactNode;
  /**
   * Adds an outline for the tag. Defaulted to no outline.
   */
  hasOutline?: boolean;
};

/**
 * ```ts
 * import {Tag} from "@chanzuckerberg/eds";
 * ```
 *
 * This component provides a tag (pill shaped badge) wrapper.
 */
function Tag({ variant, text, className, icon, hasOutline }: Props) {
  return (
    <Text
      as="span"
      className={clsx(
        className,
        styles.tag,
        variant && stylesByColor[variant],
        hasOutline && styles.outline,
      )}
      size="sm"
      weight="bold"
    >
      {icon}
      {/* No width space to ensure height of contents */}
      {"\u200B"}
      {text && <span className={styles.body}>{text}</span>}
    </Text>
  );
}

export default Tag;
