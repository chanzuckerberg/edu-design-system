import React from "react";
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
export declare type SvgIconProps = DecorativeIconProps | InformativeIconProps;
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
export declare type IconProps = Omit<DecorativeIconProps, "children"> | Omit<InformativeIconProps, "children">;
/**
 * Render arbitrary SVG path data while enforcing good accessibility practices.
 *
 * If you're looking for specific icon components, look in the `../Icons` directory.
 */
declare function SvgIcon(props: SvgIconProps): JSX.Element;
export default SvgIcon;
