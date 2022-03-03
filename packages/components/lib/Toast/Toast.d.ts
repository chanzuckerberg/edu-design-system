import React from "react";
export declare type Color = "success" | "alert";
declare type Props = {
    /**
     * Additional class names passed in for styling.
     */
    className?: string;
    /**
     * The contents of the toast.
     */
    children: React.ReactNode;
    /**
     * The color of the Toast, based on EDS defined colors. Also determines the icon used.
     * Note that the Icon mapping matches the style of Banners.
     */
    color: Color;
    /**
     * Callback when Toast is dismissed.
     */
    onDismiss?: () => void;
};
/**
 * A toast used to provide information on the state of the page, usually in response to a
 * user action. Ex: The user updates their profile, and a toast pop-up informs them that the
 * data was successfully saved.
 */
export default function Toast({ children, className, color, onDismiss, ...rest }: Props): JSX.Element;
export {};
