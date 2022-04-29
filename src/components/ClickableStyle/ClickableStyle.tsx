import clsx from "clsx";
import React from "react";
import styles from "./ClickableStyle.module.css";

export type ClickableStyleProps<IComponent extends React.ElementType> = {
  /**
   * CSS class for custom styles.
   */
  className: string;
  /**
   * The color of the element.
   */
  status: "error" | "brand" | "neutral" | "success" | "warning";
  /**
   * The size of the element.
   */
  size: "sm" | "md" | "lg";
  /**
   * A hidden prop for visual testing
   */
  state?: "inactive" | "hover" | "focus" | "active";
  /**
   * The style of the element.
   */
  variant: "primary" | "secondary" | "link" | "icon";
} & React.ComponentProps<IComponent>;

/**
 * A helper component that contains all the styling for buttons and links.
 *
 * If you're styling a `<button>` or `<a>` element, you can use the `Button`
 * and `Link` components (respectively). `ClickableStyle` should only be used
 * directly when styling other elements or components (e.g. `Link` from `react-router`)
 * to look like a button or link.
 *
 * See the `Button` and `Link` stories for usage examples.
 */
const ClickableStyle = React.forwardRef(
  <IComponent extends React.ElementType>(
    {
      as: Component,
      children,
      status,
      size,
      state,
      variant,
      className,
      ...rest
    }: ClickableStyleProps<IComponent>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    return (
      <Component
        className={clsx(
          className,
          styles.button,
          // Sizes
          variant !== "link" && [
            size === "sm" && styles.sizeSmall,
            size === "md" && styles.sizeMedium,
            size === "lg" && styles.sizeLarge,
          ],
          // Variants
          variant === "primary" && styles.variantFlat,
          variant === "secondary" && styles.variantOutline,
          variant === "link" && styles.variantLink,
          variant === "icon" && styles.variantPlain,
          // Statuses
          status === "error" && styles.colorAlert,
          status === "brand" && styles.colorBrand,
          status === "neutral" && styles.colorNeutral,
          status === "success" && styles.colorSuccess,
          status === "warning" && styles.colorWarning,
          // Interactive States (for testing)
          state === "hover" && styles.stateHover,
          state === "focus" && styles.stateFocus,
          state === "active" && styles.stateActive,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

ClickableStyle.displayName = "ClickableStyle";

export default ClickableStyle;
