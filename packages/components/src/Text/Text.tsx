import React, { ReactNode } from "react";
import {
  TypographyColor,
  TypographySize,
  styleFromColor,
  styleFromSize,
} from "../util/typography";
import tw, { styled } from "twin.macro";

interface BaseTextProps {
  bold: boolean;
  color?: TypographyColor;
  size: TypographySize;
}

const TextComponent = styled.p<BaseTextProps>(({ bold, color, size }) => [
  bold ? tw`font-bold` : tw`font-normal`,
  styleFromColor(color),
  styleFromSize(size),
]);

type Props = {
  /**
   * Specifies font weight as either bold or normal (defaults to normal).
   * TODO: We may add stricter enforcement of mutually exclusive props.
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
   * The size of the html element. If used as a Heading and no `as` prop is provided,
   * then the component uses this value to determine which html tag to render
   * (e.g. 'h1', 'h2', etc.)
   */
  size: TypographySize;
};

function Text(props: Props) {
  const {
    bold = false,
    children,
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
    <TextComponent bold={bold} size={size} {...rest}>
      {children}
    </TextComponent>
  );
}

export default Text;
