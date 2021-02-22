import React, { ReactNode } from "react";
import {
  TypographyColor,
  TypographySize,
  styleFromColor,
  styleFromSize,
} from "../util/typography";
import tw, { styled } from "twin.macro";

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
  /**
   * Specifies font weight as either bold or normal (defaults to bold).
   * TODO: Currently we will allow toggling any size, but in the future
   * we will add stricter enforcement -- e.g. enforcing a boldness
   * for each size or checking for mutually exclusive props.
   */
  bold?: boolean;
  /**
   * The text content to present.
   */
  children: ReactNode;
  /**
   * The color of the heading element. If no color provided, defaults to a base color.
   */
  color?: TypographyColor;
  /**
   * The size of the html element. If no `as` prop is provided, then
   * the component uses this value to determine which html tag to render
   * (e.g. 'h1', 'h2', etc.)
   */
  size: TypographySize;
};

interface BaseHeadingProps {
  bold: boolean;
  color?: TypographyColor;
  size: TypographySize;
}

const HeadingComponent = styled.span<BaseHeadingProps>(
  ({ bold, color, size }) => [
    bold ? tw`font-bold` : tw`font-normal`,
    styleFromColor(color),
    styleFromSize(size),
  ]
);

function Heading({
  as,
  bold = true,
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
    <HeadingComponent as={as || size} bold={bold} size={size} {...rest}>
      {children}
    </HeadingComponent>
  );
}

export default Heading;
