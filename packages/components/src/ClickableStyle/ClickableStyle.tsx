import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./ClickableStyle.module.css";

type IconPlacement = "left" | "right";

export type ClickableStyleProps<IComponent extends React.ElementType> = {
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
  /**
   * Optional icon that can be positioned to the left or right of the other button contents.
   *
   * Default position is 'left'. Use the iconProps.placement prop to move it to the right side.
   *
   * See the full list of available icons here:
   * https://chanzuckerberg.github.io/edu-design-system/?path=/story/svgicon--all-icons
   */
  icon?: ReactNode;
  iconProps?: {
    /*
     * Whether the icon should be on the left or right side of the button's other contents.
     *
     * Default is "left".
     *
     * If the button has no other contents, this prop will be ignored.
     */
    placement?: IconPlacement;
    /*
     * Margin to be added to icon's left and right sides.
     *
     * Icons typically have a little extra space between the path and the edge of the viewbox.
     * Negative left and right margin can be used to remove this extra space.
     */
    horizontalMargin?: string;
  };
} & React.ComponentProps<IComponent>;

/**
 * A helper component that contains all the styling for buttons and links.
 *
 * See the Button stories for usage examples.
 */
const ClickableStyle = React.forwardRef(
  <IComponent extends React.ElementType>(
    {
      as: Component,
      children,
      color,
      size,
      state,
      variant,
      className,
      icon,
      iconProps,
      ...rest
    }: ClickableStyleProps<IComponent>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    const renderIcon = (placement: IconPlacement) => {
      const horizontalMargin = (iconProps && iconProps.horizontalMargin) || 0;

      return (
        <div
          className={clsx(
            styles.icon,
            !!children && placement === "left" && styles.iconLeft,
            !!children && placement === "right" && styles.iconRight,
          )}
          style={{ margin: `0 ${horizontalMargin}` }}
        >
          {icon}
        </div>
      );
    };

    const iconSide = (iconProps && iconProps.placement) || "left";

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

        {icon && iconSide === "left" && renderIcon("left")}

        {children}

        {icon && iconSide === "right" && renderIcon("right")}
      </Component>
    );
  },
);

ClickableStyle.displayName = "ClickableStyle";

export default ClickableStyle;
