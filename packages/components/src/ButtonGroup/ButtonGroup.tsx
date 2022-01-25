import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./ButtonGroup.module.css";

type Props = {
  /**
   * The buttons. Should not be wrapped in another element – we just want the buttons.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   *
   * This will be applied to the container we're placing around the buttons.
   */
  className?: string;
  /**
   * How much space there should be between the buttons.
   */
  spacing?: "none" | "1x" | "max";
  /**
   * Whether the buttons should be laid out horizontally or stacked vertically.
   */
  orientation?: "horizontal" | "vertical";
};

/**
 * A container for buttons grouped together horizontally or vertically.
 */
export default function ButtonGroup({
  children,
  className,
  spacing = "1x",
  orientation = "horizontal",
}: Props) {
  if (spacing === "max" && orientation === "vertical") {
    console.warn(
      "*** Weird prop combo warning ***: Are you sure you want max spacing *and* vertical orientation? It's a valid combination, but it's extremely unlikely to ever be used intentionally.",
    );
  }

  return (
    <div
      className={clsx(
        className,
        styles.buttonGroup,
        spacing === "1x" && styles.spacing1x,
        spacing === "max" && styles.spacingMax,
        orientation === "vertical" && styles.vertical,
      )}
    >
      {children}
    </div>
  );
}
