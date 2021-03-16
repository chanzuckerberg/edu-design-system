import React from "react";
import classNames from "classnames/bind";
import styles from "./clickable.module.css";

const cx = classNames.bind(styles);

export type ClickableProps<IComponent extends React.ElementType> = {
  /**
   * The style of the element.
   */
  variant: "flat" | "outline" | "minimal";
  /**
   * The color of the element.
   */
  color: "alert" | "brand" | "neutral" | "success" | "warning";
  /**
   * The size of the element.
   */
  size: "small" | "medium" | "large";
  className: string;
  /**
   * A hidden prop for visual testing
   */
  state?: "inactive" | "hover" | "focus" | "disabled";
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
      className={cx(
        `button`,
        `button--variant-${variant}`,
        `button--size-${size}`,
        `button--color-${color}`,
        {
          // For testing in storybook and percy
          [`button--state-${state}`]: state,
        }
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
