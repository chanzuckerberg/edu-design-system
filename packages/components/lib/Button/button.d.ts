import React, { ReactNode } from "react";
import { ClickableStyleProps } from "../ClickableStyle";
declare type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare type ButtonProps = ButtonHTMLElementProps & {
    /**
     * The button contents or label.
     */
    children: ReactNode;
    color?: ClickableStyleProps<"button">["color"];
    "data-testid"?: string;
    size?: ClickableStyleProps<"button">["size"];
    variant?: ClickableStyleProps<"button">["variant"];
};
/**
 * Component for making buttons that do not navigate the user to another page.
 *
 * This component is called `Button` because it should be used to make `<button>` elements;
 * however, it can be styled to look like a link.
 *
 * If you need to style an `<a>` element to look like a button, please use the `Link` component.
 * If you need to style a different element or component (e.g. `Link` from `react-router`) to
 * look like a button or link, you can use the `ClickableStyle` component.
 *
 * In terms of the look and feel of the component in the UI, the `Button`, and `Link`, and `ClickableStyle`
 * components are exactly the same.
 */
declare const Button: React.ForwardRefExoticComponent<ButtonHTMLElementProps & {
    /**
     * The button contents or label.
     */
    children: ReactNode;
    color?: "alert" | "brand" | "neutral" | "success" | "warning" | undefined;
    "data-testid"?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    variant?: "link" | "flat" | "outline" | "plain" | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
export default Button;
