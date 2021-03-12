import Typography, { TypographyProps } from "../util/typography";

import React from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  /**
   * This prop can be used to specify which size heading should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the styling.
   */
  as?: HeadingElement;
  children: TypographyProps<HeadingElement>["children"];
  color?: TypographyProps<HeadingElement>["color"];
  size: TypographyProps<HeadingElement>["size"];
  weight?: TypographyProps<HeadingElement>["weight"];
};

function Heading({
  as,
  children,
  size,
  /**
   * Components that wrap typography sometimes require props such as
   * event handlers, tabIndex, etc. to be passed down into the element.
   * TODO: add better typing or documentation for optional props,
   * e.g. React.HTMLAttributes<HTMLHeadingElement>
   */
  ...rest
}: Props) {
  return (
    <Typography as={as || size} size={size} {...rest}>
      {children}
    </Typography>
  );
}

export default Heading;
