// @flow

import * as React from "react";
import Text from "../Text";
import { TypographyColor } from "../common/typography";
import cx from "classnames";
import styles from "./Tag.module.css";

export type Color = Omit<
  TypographyColor,
  "white" | "base" | "info" | "inherit"
>;

export const stylesByColor: { [K in Color]: string } = {
  neutral: styles.colorNeutral,
  warning: styles.colorWarning,
  brand: styles.colorBrand,
  alert: styles.colorAlert,
  gradingYellow: styles.colorGradingYellow,
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
 * This component provides a tag (pill shaped badge) wrapper.
 */
function Tag({ color, children, icon, variant = "flat" }: Props) {
  return (
    <Text
      as="span"
      className={cx(
        styles.tag,
        color && stylesByColor[color],
        variant === "outline" && styles.outline,
      )}
      color={color}
      size="sm"
      spacing="none"
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
