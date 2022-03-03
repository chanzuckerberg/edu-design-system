import React, { ReactNode } from "react";
export declare type TypographySize = "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "sm" | "xs" | "caption" | "overline";
export declare type TypographyColor = "alert" | "base" | "brand" | "yellow" | "info" | "inherit" | "neutral" | "success" | "warning" | "white";
export declare type TypographyMargin = "none" | "half" | "1x" | "2x";
export declare type TypographyProps<IComponent extends React.ElementType> = {
    /**
     * This prop can be used to specify which element should
     * actually be rendered, in the case that you want to render one HTML element
     * but style it as if it were another. If both an `as` prop
     * and a `size` prop are passed, the `as` will be used to determine the element
     * and the `size` will be used to determine the styling.
     */
    as: IComponent;
    /**
     * The text content to present.
     */
    children: ReactNode;
    /**
     * CSS class for custom styles.
     */
    className?: string;
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
    /**
     * Specifies font weight as either bold or normal.
     * TODO: Currently we will allow toggling any size, but in the future
     * we will add stricter enforcement -- e.g. enforcing a boldness
     * for each size or checking for mutually exclusive props.
     */
    weight?: "bold" | "normal" | null;
    /**
     * Specifies the bottom-margin that should be applied to the typography element
     */
    spacing?: TypographyMargin;
} & React.ComponentProps<IComponent>;
declare const Typography: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLElement>>;
export default Typography;
