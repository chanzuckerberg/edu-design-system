import React from "react";
import clsx from "clsx";
import styles from "./clickable.module.css";

export type ClickableProps<IComponent extends React.ElementType> = {
  /**
   * CSS class for custom styles.
   */
  className: string;
  /**
   * The color of the element.
   */
  color: "alert" | "brand" | "neutral" | "success";
  /**
   * The size of the element.
   */
  size: "small" | "medium" | "large";
  /**
   * A hidden prop for visual testing
   */
  state?: "inactive" | "hover" | "focus" | "active";
  /**
   * The style of the element.
   */
  variant: "flat" | "outline" | "link";
} & React.ComponentProps<IComponent>;

function Clickable<IComponent extends React.ElementType>({
  as,
  children,
  color,
  size,
  state,
  variant,
  ...rest
}: ClickableProps<IComponent>) {
  const Component = as;
  return (
    <Component
      className={clsx(
        styles.button,
        // Sizes
        variant !== "link" && [
          size === "small" && styles.sizeSmall,
          size === "medium" && styles.sizeMedium,
          size === "large" && styles.sizeLarge,
        ],
        // Variants
        variant === "flat" && styles.variantFlat,
        variant === "outline" && styles.variantOutline,
        variant === "link" && styles.variantLink,
        // Colors
        color === "alert" && styles.colorAlert,
        color === "brand" && styles.colorBrand,
        color === "neutral" && styles.colorNeutral,
        color === "success" && styles.colorSuccess,
        // Interactive States (for testing)
        state === "inactive" && styles.stateInactive,
        state === "hover" && styles.stateHover,
        state === "focus" && styles.stateFocus,
        state === "active" && styles.stateActive,
      )}
      {...rest}
    >
      {/* No width space to ensure height of contents */}
      {"\u200B"}
      {children}
    </Component>
  );
}

export default Clickable;
