import React from "react";
import { HeadingElement } from "../Heading";
import { NotificationVariant } from "../common/Notifications/NotificationIcon";
export declare type BannerProps = {
    /**
     * Additional class names passed in for styling
     */
    className?: string;
    /**
     * The color of the banner, based on EDS defined colors. Also determines the icon used.
     */
    color?: NotificationVariant;
    /**
     * The text content of the banner.
     *
     * Please note that this can contain text links, but block buttons should be passed in via the `action` prop.
     */
    textContent: React.ReactNode;
    /**
     * A button or link that's placed in the banner separately from the main content.
     */
    action?: React.ReactNode;
    /**
     * Callback when banner is dismissed. When passed in, renders banner with a close icon in the top right.
     */
    onDismiss?: () => void;
    /**
     * Whether the card is laid out horizontally or stacked vertically.
     * The vertical orientation makes the banner look more like a card. It has the same styling as
     * the horizontal banner in mobile view. This format is intended to be used in sidebars or
     * other horizontally limited spaces.
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The perceived elevation of the banner. An elevation of 0 appears flat against the surface while
     * an elevation of 1 appears to hover slightly. The hover appearance is used to separate the element
     * from the surrounding area. The flat version should only be used on white backgrounds.
     */
    elevation?: 0 | 1;
};
/**
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 *
 * Example usage:
 *
 * ```tsx
 * <Banner
 *   onDismiss={handleDismiss}
 *   textContent={
 *     <>
 *       <Banner.Title>{bannerTitle}</Banner.Title>
 *       <Banner.Message>{bannerMessage}</Banner.Message>
 *     </>
 *   }
 * />
 * ```
 */
declare function Banner({ className, color, textContent, action, onDismiss, orientation, elevation, }: BannerProps): JSX.Element;
declare namespace Banner {
    var displayName: string;
    var Title: React.FC<TitleProps>;
    var Message: React.FC<MessageProps>;
}
export default Banner;
declare type TitleProps = {
    children?: React.ReactNode;
    as: HeadingElement;
};
declare type MessageProps = {
    children?: React.ReactNode;
};
