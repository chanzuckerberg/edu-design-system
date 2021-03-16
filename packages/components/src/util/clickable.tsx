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
} & React.ComponentProps<IComponent>;

function Clickable<IComponent extends React.ElementType>({
  as,
  children,
  color,
  size,
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
        `button--color-${color}`
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Clickable;
