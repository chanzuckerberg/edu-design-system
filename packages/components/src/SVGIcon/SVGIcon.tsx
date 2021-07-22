import * as React from "react";
import cx from "classnames";
import styles from "./SVGIcon.module.css";

interface IconPropsBase {
  /**
   * If true, the element will be displayed as a block, otherwise
   * default is inline like images
   */
  block?: boolean;
  /**
   * Either a fragment of svg elements (g, path, circle, etc.), or a single
   * svg elment
   */
  children: React.ReactNode;
  /**
   * Classname for additional custom styling in context.
   */
  className?: string;
  /**
   * The SVG Color, expects a valid css color (hex, rgb, etc.). You can use
   * Recommendation: if `currentColor` isn't sufficient, use color tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  color?: string;
  /**
   * The role of the icon.
   * "img" requires a title prop also being passed in
   * "presentation" should not have a title prop because it will be hidden from screenreaders
   */
  role: "img" | "presentation";
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  size?: string;
  /**
   * Configure the viewbox of the svg.
   */
  viewBox?: string;
}

interface FunctionalIconProps extends IconPropsBase {
  role: "img";
  title: string;
}

interface PresentationalIconProps extends IconPropsBase {
  role: "presentation";
}

export type SVGIconProps = PresentationalIconProps | FunctionalIconProps;

export type IconProps =
  | Omit<PresentationalIconProps, "children">
  | Omit<FunctionalIconProps, "children">;

interface SvgStyle extends React.CSSProperties {
  "--svg-icon-size"?: string;
}

/**
 * Render arbitrary SVG path data while enforcing good accessibility practices.
 *
 * If you're looking for specific icon components, look in the `./Icons` directory.
 */
function SVGIcon(props: SVGIconProps) {
  const {
    block = false,
    children,
    className,
    color = "currentColor",
    role,
    size,
    viewBox = "0 0 24 24",
  } = props;

  const style: SvgStyle = {
    "--svg-icon-size": size,
    color,
  };

  const svgCommonProps = {
    className: cx(className, styles.svgIcon, block && styles.displayBlock),
    fill: color,
    height: size,
    /**
     * height/width html properties are overriden by the defaults applied
     * to svg css class
     */
    style,
    viewBox,
    width: size,
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (role === "img") {
    return (
      <svg {...svgCommonProps}>
        {props.title}
        {children}
      </svg>
    );
  } else {
    return <svg {...svgCommonProps}>{children}</svg>;
  }
}

export default SVGIcon;
