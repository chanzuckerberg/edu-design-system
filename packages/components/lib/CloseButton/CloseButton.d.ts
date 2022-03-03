import React from "react";
export declare type Variant = "brand" | "neutral" | "success" | "warning" | "alert";
declare type CloseButtonProps = {
    /**
     * The color theme of the icon. Also affects the hover state.
     */
    color?: Variant;
    /**
     * Size of the icon. Does not affect actual button size. The button is larger than the
     * icon to ensure the hit box is large enough (for accessibility).
     *
     * The string should be some number + px, rem, em, vh, etc. Ex: 2rem.
     * Recommendation: use "EdsSizeLineHeight" tokens from
     * @chanzuckerberg/eds-tokens/json/variables.json
     */
    size?: string;
    /**
     * Custom aria-label. If undefined, "close" will be used.
     */
    "aria-label"?: string;
    onClose: () => void;
    className?: string;
};
/**
 * Generic close button.
 */
declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default CloseButton;
