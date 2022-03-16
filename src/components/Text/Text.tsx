import React, { forwardRef } from "react";

import Typography, { TypographyProps } from "../common/typography";

type TextElement = "p" | "span";

type Props = {
  /**
   * Controls whether to render text inline (defaults to "p");
   */
  as?: TextElement;
  children: TypographyProps<TextElement>["children"];
  className?: TypographyProps<TextElement>["className"];
  color?: TypographyProps<TextElement>["color"];
  size?: TypographyProps<TextElement>["size"];
  spacing?: TypographyProps<TextElement>["spacing"];
  tabIndex?: number;
  weight?: TypographyProps<TextElement>["weight"];
} & React.HTMLAttributes<HTMLElement>;

/**
 * ```ts
 * import {Text} from "@chanzuckerberg/eds-components";
 * ```
 */
const Text = forwardRef<HTMLElement, Props>(
  (
    {
      as,
      children,
      size = "body",
      /**
       * Components that wrap typography sometimes requires props such as event handlers
       * to be passed down into the element. One example is the tooltip component.  It
       * attaches a onHover and onFocus event to the element to determine when to
       * trigger the overlay.
       */ ...rest
    }: Props,
    ref,
  ) => (
    <Typography as={as || "p"} ref={ref} size={size} {...rest}>
      {children}
    </Typography>
  ),
);

Text.displayName = "Text"; // Satisfy eslint.

export default Text;
