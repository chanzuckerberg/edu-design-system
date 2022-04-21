import clsx from "clsx";
import React, { forwardRef } from "react";
import styles from "./Heading.module.css";

export const VARIANTS = [
  "error",
  "base",
  "brand",
  "inherit",
  "neutral",
  "success",
  "warning",
  "white",
  /**
   * @deprecated Info variant is deprecated.
   */ "info",
] as const;
export type Variant = typeof VARIANTS[number];
export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  /**
   * This prop can be used to specify which size heading should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the styling.
   */
  as?: HeadingElement;
  children: React.ReactNode;
  className?: string;
  size: HeadingElement;
  tabIndex?: number;
  variant?: Variant;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * ```ts
 * import {Heading} from "@chanzuckerberg/eds";
 * ```
 */

export const Heading = forwardRef(
  (
    {
      as,
      children,
      className,
      variant,
      size,
      /**
       * Components that wrap typography sometimes require props such as
       * event handlers, tabIndex, etc. and/or other native heading element
       * attributes to be passed down into the element.
       */ ...other
    }: Props,
    ref: React.ForwardedRef<HTMLHeadingElement>,
  ) => {
    if (variant === "info" && process.env.NODE_ENV !== "production") {
      console.warn(
        "Info variant is deprecated and will be removed in an upcoming release. Please use the consider another variant instead.",
      );
    }
    const TagName = as || size;
    const componentClassName = clsx(
      className,
      styles["heading"],
      styles[`heading--size-${size}`],
      variant && styles[`heading--${variant}`],
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);

Heading.displayName = "Heading"; // Satisfy eslint.

export default Heading;
