/// <reference types="react" />
export declare type NotificationVariant = "brand" | "neutral" | "success" | "warning" | "alert";
declare type Props = {
    /**
     * Which variant to use. Each variant has a unique icon and color.
     */
    variant: NotificationVariant;
};
export declare const variantToIconAssetsMap: {
    brand: {
        icon: (props: import("../../..").IconProps) => JSX.Element;
        style: string;
        title: string;
    };
    neutral: {
        icon: (props: import("../../..").IconProps) => JSX.Element;
        style: string;
        title: string;
    };
    success: {
        icon: (props: import("../../..").IconProps) => JSX.Element;
        style: string;
        title: string;
    };
    warning: {
        icon: (props: import("../../..").IconProps) => JSX.Element;
        style: string;
        title: string;
    };
    alert: {
        icon: (props: import("../../..").IconProps) => JSX.Element;
        style: string;
        title: string;
    };
};
/**
 * An icon that appears in notifcation components (Banner and Toast).
 * This icon communicates the tone of the notification through its image,
 * color, and title text.
 */
declare const NotificationIcon: ({ variant }: Props) => JSX.Element;
export default NotificationIcon;
