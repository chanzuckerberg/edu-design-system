import clsx from "clsx";
import React from "react";
import Text from "../Text";
import styles from "./Tag.module.css";

export type Color =
  | "neutral"
  | "alert"
  | "success"
  | "warning"
  | "yellow"
  | "brand";

export const stylesByColor = {
  neutral: styles.colorNeutral,
  warning: styles.colorWarning,
  brand: styles.colorBrand,
  alert: styles.colorAlert,
  yellow: styles.colorYellow,
  success: styles.colorSuccess,
};

type Props = {
  /**
   * The color of the tag. New colors should be supported in the flow type,
   * in the stylesByColor object, and by its separate style in CSS file.
   */
  color: Color;
  /**
   * The contents of the tag in addition to the icon
   */
  children: React.ReactNode;
  /**
   * Additional case-specific styling
   */
  className?: string;
  /**
   * The tag icon (shouldn't provide color or size since those are determined
   * by the color prop).
   */
  icon?: React.ReactNode;
  /**
   * Style of the tag.
   */
  variant?: "flat" | "outline";
};

/**
 * ```ts
 * import {Tag} from "@chanzuckerberg/eds";
 * ```
 *
 * This component provides a tag (pill shaped badge) wrapper.
 */
function Tag({ color, children, className, icon, variant = "flat" }: Props) {
  return (
    <Text
      as="span"
      className={clsx(
        className,
        styles.tag,
        color && stylesByColor[color],
        variant === "outline" && styles.outline,
      )}
      color={color}
      size="sm"
      weight="bold"
    >
      {icon}
      {/* No width space to ensure height of contents */}
      {"\u200B"}
      {children && <span className={styles.body}>{children}</span>}
    </Text>
  );
}

export default Tag;
