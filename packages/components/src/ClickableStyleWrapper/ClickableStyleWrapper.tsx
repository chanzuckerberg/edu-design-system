import clsx from "clsx";
import React from "react";
import styles from "./ClickableStyleWrapper.module.css";

export type ClickableStyleWrapperProps<IComponent extends React.ElementType> = {
  /**
   * CSS class for custom styles.
   */
  className: string;
  /**
   * The color of the element.
   */
  color: "alert" | "brand" | "neutral" | "success" | "warning";
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

/**
 * A helper component that contains all the styling for buttons and links.
 *
 * See the Button stories for usage examples.
 */
const ClickableStyleWrapper = React.forwardRef(
  <IComponent extends React.ElementType>(
    {
      as: Component,
      children,
      color,
      size,
      state,
      variant,
      className,
      ...rest
    }: ClickableStyleWrapperProps<IComponent>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    return (
      <Component
        className={clsx(
          className,
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
          color === "warning" && styles.colorWarning,
          // Interactive States (for testing)
          state === "hover" && styles.stateHover,
          state === "focus" && styles.stateFocus,
          state === "active" && styles.stateActive,
        )}
        ref={ref}
        {...rest}
      >
        {/* No width space to ensure height of contents */}
        {"\u200B"}
        {children}
      </Component>
    );
  },
);

ClickableStyleWrapper.displayName = "ClickableStyleWrapper";

export default ClickableStyleWrapper;
