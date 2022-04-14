import clsx from "clsx";
import React from "react";
import styles from "./SvgIcon.module.css";

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
   * @chanzuckerberg/eds/lib/tokens/ts/colors
   */
  color?: string;
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds/lib/tokens/ts/colors
   */
  size?: string;
  /**
   * Configure the viewbox of the svg.
   */
  viewBox?: string;
}

interface InformativeIconProps extends IconPropsBase {
  /**
   * The role of the icon.
   *
   * Use "informative" when the icon **_does_** provide additional meaning to other text on the
   * page. You'll be required to pass in a title to label the icon.
   */
  purpose: "informative";
  title: string;
}

interface DecorativeIconProps extends IconPropsBase {
  /**
   * The role of the icon.
   *
   * Use "decorative" when the icon **_does not_** provide any additional context or meaning to
   * associated text. Basically the icon is for show and people don't need it to understand what's
   * on the page.
   */
  purpose: "decorative";
}

export type SvgIconProps = DecorativeIconProps | InformativeIconProps;

/**
 * SvgIcon props, except `children`. Useful for creating specific icon components.
 *
 * @example
 *
 * function CircleIcon(props: IconProps) {
 *   return (
 *     <SvgIcon {...props}>
 *       <circle cx="50" cy="50" r="50" />
 *     </SvgIcon>
 *   )
 * }
 */
export type IconProps =
  | Omit<DecorativeIconProps, "children">
  | Omit<InformativeIconProps, "children">;

interface SvgStyle extends React.CSSProperties {
  "--svg-icon-size"?: string;
}

/**
 * Render arbitrary SVG path data while enforcing good accessibility practices.
 *
 * If you're looking for specific icon components, look in the `../../icons` directory.
 */
function SvgIcon(props: SvgIconProps) {
  const {
    block = false,
    children,
    className,
    color = "currentColor",
    size,
    viewBox = "0 0 24 24",
  } = props;

  const style: SvgStyle = {
    "--svg-icon-size": size,
  };

  const svgCommonProps = {
    className: clsx(className, styles.svgIcon, block && styles.displayBlock),
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

  if (props.purpose === "informative") {
    return (
      <svg {...svgCommonProps} role="img">
        <title>{props.title}</title>
        {children}
      </svg>
    );
  } else {
    return (
      <svg {...svgCommonProps} aria-hidden>
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
