import React, { ReactNode } from "react";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import tw from "twin.macro";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

type TypographySize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "sm"
  | "xs"
  | "default";

// Matches color token categories
type TypographyColor =
  | "alert"
  | "success"
  | "info"
  | "warning"
  | "brand"
  | "black"
  | "white";

type TypographyProps = {
  /**
   * This prop can be used to specify which size text element should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the classname.
   */
  as?: TypographyElement;
  /**
   * The text content to present.
   */
  children: ReactNode;
  /**
   * The color of the text element. If no color provided, a default color
   * will be used.
   */
  color?: TypographyColor;
  /**
   * The size of the html element. If no `as` prop is provided, then
   * the component uses this value to determine which html tag to render
   * (e.g. 'h1', 'h2', etc.)
   */
  size: TypographySize;
};

const h3 = css`
  ${tw`font-sans text-black text-h3 leading-h3`}
`;

const body = css`
  ${tw`font-sans text-black text-default leading-default`}
`;

function elementFromSize(size: TypographySize): TypographyElement {
  switch (size) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
      return size;
    case "default":
    case "sm":
    case "xs":
      return "p";
    default:
      throw new TypeError(`Received invalid size option '${size}'`);
  }
}

function classNameFromSize(size: TypographySize) {
  switch (size) {
    case "h3":
      return h3;
    case "default":
      return body;
    default:
      throw new TypeError(`Received invalid size option '${size}'`);
  }
}

function Typography(props: TypographyProps): JSX.Element {
  const {
    as,
    children,
    color,
    size,
    /**
     * Components that wrap typography sometimes requires props such as event handlers
     * to be passed down into the element. One example is the tooltip component.  It
     * attaches a onHover and onFocus event to the element to determine when to
     * trigger the overlay.
     */
    ...rest
  } = props;

  const TypographyComponent = as || elementFromSize(size);
  return (
    <TypographyComponent
      className={classNameFromSize(size)}
      color={color}
      {...rest}
    >
      {children}
    </TypographyComponent>
  );
}

export default Typography;
