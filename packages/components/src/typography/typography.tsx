import React, { ReactNode } from "react";
import tw, { TwStyle, styled } from "twin.macro";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

type TypographySize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "sm"
  | "xs"
  | "button"
  | "caption"
  | "overline";

type TypographyColor =
  | "alert"
  | "base"
  | "brand"
  | "info"
  | "success"
  | "warning"
  | "white";

function elementFromSize(size: TypographySize): TypographyElement {
  switch (size) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
      return size;
    default:
      return "p";
  }
}

function styleFromColor(color: TypographyColor): TwStyle {
  switch (color) {
    case "alert":
      return tw`text-alert-700`;
    case "brand":
      return tw`text-brand-700`;
    case "info":
      return tw`text-info-700`;
    case "success":
      return tw`text-success-700`;
    case "warning":
      return tw`text-warning-700`;
    case "white":
      return tw`text-white`;
    default:
      return tw`text-font-base`;
  }
}

function styleFromSize(size: TypographySize): TwStyle {
  switch (size) {
    case "h1":
      return tw`text-h1 leading-h1`;
    case "h2":
      return tw`text-h2 leading-h2`;
    case "h3":
      return tw`text-h3 leading-h3`;
    case "h4":
      return tw`text-h4 leading-h4`;
    case "h5":
      return tw`text-h5 leading-body`;
    case "body":
      return tw`text-body leading-body`;
    case "sm":
      return tw`text-sm leading-sm`;
    case "xs":
      return tw`text-xs leading-xs`;
    case "button":
      return tw`text-sm leading-body`;
    case "caption":
      return tw`text-xs leading-sm`;
    case "overline":
      return tw`text-xs leading-sm uppercase`;
  }
}

interface BaseTypographyProps {
  bold: boolean;
  color: TypographyColor;
  size: TypographySize;
}

const TypographyComponent = styled.span<BaseTypographyProps>(
  ({ bold, color, size }) => [
    tw`font-arimo`,
    bold ? tw`font-bold` : tw`font-normal`,
    styleFromColor(color),
    styleFromSize(size),
  ]
);

type TypographyProps = {
  /**
   * This prop can be used to specify which size text element should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the styling.
   */
  as?: TypographyElement;
  /**
   * Specifies font weight as either bold or normal (defaults to normal).
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
   * The color of the text element. If no color provided, defaults to a base color.
   */
  color?: TypographyColor;
  /**
   * The size of the html element. If no `as` prop is provided, then
   * the component uses this value to determine which html tag to render
   * (e.g. 'h1', 'h2', etc.)
   */
  size: TypographySize;
};

function Typography(props: TypographyProps): JSX.Element {
  const {
    as,
    bold = false,
    children,
    color = "base",
    size,
    /**
     * Components that wrap typography sometimes requires props such as event handlers
     * to be passed down into the element. One example is the tooltip component.  It
     * attaches a onHover and onFocus event to the element to determine when to
     * trigger the overlay.
     */
    ...rest
  } = props;

  return (
    <TypographyComponent
      as={as || elementFromSize(size)}
      bold={bold}
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </TypographyComponent>
  );
}

export default Typography;
