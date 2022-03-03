import React from "react";
export declare type ClickableStyleProps<IComponent extends React.ElementType> = {
    /**
     * CSS class for custom styles.
     */
    className: string;
    /**
     * The color of the element.
     */
    color: "alert" | "brand" | "neutral" | "success" | "warning";
    /**
     * The size of the element.
     */
    size: "small" | "medium" | "large";
    /**
     * A hidden prop for visual testing
     */
    state?: "inactive" | "hover" | "focus" | "active";
    /**
     * The style of the element.
     */
    variant: "flat" | "outline" | "link" | "plain";
} & React.ComponentProps<IComponent>;
/**
 * A helper component that contains all the styling for buttons and links.
 *
 * If you're styling a `<button>` or `<a>` element, you can use the `Button`
 * and `Link` components (respectively). `ClickableStyle` should only be used
 * directly when styling other elements or components (e.g. `Link` from `react-router`)
 * to look like a button or link.
 *
 * See the `Button` and `Link` stories for usage examples.
 */
declare const ClickableStyle: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLElement>>;
export default ClickableStyle;
