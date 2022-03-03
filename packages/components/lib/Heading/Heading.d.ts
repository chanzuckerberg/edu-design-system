import React from "react";
import { TypographyProps } from "../common/typography";
export declare type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
declare type Props = {
    /**
     * This prop can be used to specify which size heading should
     * actually be rendered, in the case that you want to render an element
     * as one heading but style it as if it were another. If both an `as` prop
     * and a `size` prop are passed, the `as` will be used to determine the element
     * and the `size` will be used to determine the styling.
     */
    as?: HeadingElement;
    children: TypographyProps<HeadingElement>["children"];
    className?: TypographyProps<HeadingElement>["className"];
    color?: TypographyProps<HeadingElement>["color"];
    size: TypographyProps<HeadingElement>["size"];
    spacing?: TypographyProps<HeadingElement>["spacing"];
    tabIndex?: number;
    weight?: TypographyProps<HeadingElement>["weight"];
};
declare const Heading: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default Heading;
