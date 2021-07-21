// @flow
import * as React from "react";
import cx from "classnames";
import styles from "./SvgIcon.module.css";

type BaseProps = {
  /**
   * The SVG Color, expects a valid css color (hex, rgb, etc.). You can use
   * Recommendation: if `currentColor` isn't sufficient, use color tokens from
   * `import Tokens from '@chanzuckerberg/eds-tokens/json/variables.json';`
   */
  color?: string;
  /**
   * Either a fragment of svg elements (g, path, circle, etc.), or a single
   * svg elment
   */
  children: React.ReactNode;
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   * Recommendation: use line-height tokens from
   * `import Tokens from '@chanzuckerberg/eds-tokens/json/variables.json';`
   */
  size?: string;
  /**
   * Classname for additional custom styling in context.
   */
  className?: string;
  /**
   * The role of the icon. Should be 'presentation' for icons that don't provide
   * any information on their own - for example, when an icon doesn't add any
   * additional information to page text. Should be 'img' for icons that stand
   * alone and have no other accompanying information - these will require you
   * to provide `title` text that provides meaning to assistive technology.
   */
  role: "presentation" | "img";
  /**
   * Boolean, if true, the element will be displayed as a block, otherwise
   * default is inline like images
   */
  block?: boolean;
};

type PresentationProps = BaseProps & {
  role: "presentation";
};

type ImgProps = BaseProps & {
  role: "img";
  /**
   * Accessible title that will be read out with screen readers.
   */
  title: string;
};

export type SvgIconProps = PresentationProps | ImgProps;

interface SvgStyle extends React.CSSProperties {
  "--svg-icon-size"?: string;
}

const SvgIcon = React.forwardRef<SVGElement, SvgIconProps>(
  (
    {
      block = false,
      children,
      color = "currentColor",
      size,
      className,
      ...rest
    }: SvgIconProps,
    ref: any,
  ) => {
    const style: SvgStyle = {
      "--svg-icon-size": size,
    };

    return (
      <svg
        className={cx(className, styles.svgIcon, block && styles.displayBlock)}
        fill={color}
        height={size}
        ref={ref}
        /**
         * height/width html properties are overriden by the defaults applied
         * to svg css class
         */
        style={style}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {rest.role === "img" && <title>{rest.title}</title>}
        {children}
      </svg>
    );
  },
);

SvgIcon.displayName = "SvgIcon"; // Satisfy eslint.

export default SvgIcon;
