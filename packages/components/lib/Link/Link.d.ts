import React, { ReactNode } from "react";
import { ClickableStyleProps } from "../ClickableStyle";
declare type LinkHTMLElementProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "disabled">;
export declare type LinkProps = LinkHTMLElementProps & {
    /**
     * The link contents or label.
     */
    children: ReactNode;
    color?: ClickableStyleProps<"a">["color"];
    "data-testid"?: string;
    size?: ClickableStyleProps<"a">["size"];
    variant?: ClickableStyleProps<"a">["variant"];
};
/**
 * Component for making anchor tags.
 *
 * This component is called Link because it should be used to make `<a>` elements;
 * however, it can be styled to look like a button.
 *
 * If you need to style a `<button>` element to look like a link, please use the `Button` component.
 * If you need to style a different element or component (e.g. `Link` from `react-router`) to
 * look like a button or link, you can use the `ClickableStyle` component.
 *
 * In terms of the look and feel of the component in the UI, the `Button`, and `Link`, and `ClickableStyle`
 * components are exactly the same.
 */
declare const Link: React.ForwardRefExoticComponent<LinkHTMLElementProps & {
    /**
     * The link contents or label.
     */
    children: ReactNode;
    color?: "alert" | "brand" | "neutral" | "success" | "warning" | undefined;
    "data-testid"?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    variant?: "link" | "flat" | "outline" | "plain" | undefined;
} & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
