import React from "react";
export declare type Color = "neutral" | "alert" | "success" | "warning" | "yellow" | "brand";
export declare const stylesByColor: {
    neutral: string;
    warning: string;
    brand: string;
    alert: string;
    yellow: string;
    success: string;
};
declare type Props = {
    /**
     * The color of the tag. New colors should be supported in the flow type,
     * in the stylesByColor object, and by its separate style in CSS file.
     */
    color: Color;
    /**
     * The contents of the tag in addition to the icon
     */
    children: React.ReactNode;
    /**
     * Additional case-specific styling
     */
    className?: string;
    /**
     * The tag icon (shouldn't provide color or size since those are determined
     * by the color prop).
     */
    icon?: React.ReactNode;
    /**
     * Style of the tag.
     */
    variant?: "flat" | "outline";
};
/**
 * This component provides a tag (pill shaped badge) wrapper.
 */
declare function Tag({ color, children, className, icon, variant }: Props): JSX.Element;
export default Tag;
