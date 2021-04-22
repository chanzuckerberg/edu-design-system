import Typography, { TypographyProps } from "../common/typography";

import React from "react";

type TextElement = "p" | "span";

type Props = {
  /**
   * Controls whether to render text inline (defaults to "p");
   */
  as?: TextElement;
  children: TypographyProps<TextElement>["children"];
  className: TypographyProps<TextElement>["className"];
  color?: TypographyProps<TextElement>["color"];
  size: TypographyProps<TextElement>["size"];
  weight?: TypographyProps<TextElement>["weight"];
  spacing?: TypographyProps<TextElement>["spacing"];
};

function Text({
  as,
  children,
  /**
   * Components that wrap typography sometimes requires props such as event handlers
   * to be passed down into the element. One example is the tooltip component.  It
   * attaches a onHover and onFocus event to the element to determine when to
   * trigger the overlay.
   */
  ...rest
}: Props) {
  return (
    <Typography as={as || "p"} {...rest}>
      {children}
    </Typography>
  );
}

export default Text;
