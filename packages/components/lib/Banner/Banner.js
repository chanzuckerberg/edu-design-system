"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const CloseButton_1 = __importDefault(require("../CloseButton"));
const Heading_1 = __importDefault(require("../Heading"));
const Text_1 = __importDefault(require("../Text"));
const Notification_module_css_1 = __importDefault(require("../common/Notifications/Notification.module.css"));
const NotificationIcon_1 = __importDefault(require("../common/Notifications/NotificationIcon"));
const Banner_module_css_1 = __importDefault(require("./Banner.module.css"));
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
function Banner({ className, color = "brand", textContent, action, onDismiss, orientation = "horizontal", elevation = 1, }) {
    const isHorizontal = orientation === "horizontal";
    return (react_1.default.createElement("article", { className: (0, clsx_1.default)(className, Banner_module_css_1.default.bannerDialog, isHorizontal && Banner_module_css_1.default.horizontal, elevation === 0 && Banner_module_css_1.default.elevation0, onDismiss && Banner_module_css_1.default.dismissable, 
        // Color props
        color === "brand" && Notification_module_css_1.default.colorBrand, color === "neutral" && Notification_module_css_1.default.colorNeutral, color === "success" && Notification_module_css_1.default.colorSuccess, color === "warning" && Notification_module_css_1.default.colorWarning, color === "alert" && Notification_module_css_1.default.colorAlert) },
        onDismiss && (react_1.default.createElement(CloseButton_1.default, { className: Banner_module_css_1.default.dismiss, color: color, onClose: onDismiss, size: "1.75rem" })),
        react_1.default.createElement(NotificationIcon_1.default, { variant: color }),
        react_1.default.createElement("div", { className: (0, clsx_1.default)(Banner_module_css_1.default.textAndAction, isHorizontal && Banner_module_css_1.default.horizontal) },
            react_1.default.createElement("div", { className: (0, clsx_1.default)(Banner_module_css_1.default.textContent, isHorizontal && Banner_module_css_1.default.horizontal) }, textContent),
            action && (react_1.default.createElement("div", { className: (0, clsx_1.default)(Banner_module_css_1.default.action, isHorizontal && Banner_module_css_1.default.horizontal) }, action)))));
}
exports.default = Banner;
Banner.displayName = "Banner";
/**
 * This should import a Heading element type
 */
const BannerTitle = (props) => {
    return props.children ? (react_1.default.createElement(Heading_1.default, { as: props.as, color: "inherit", size: "h3" }, props.children)) : null;
};
Banner.Title = BannerTitle;
Banner.Title.displayName = "Banner.Title";
/**
 * This should import a Text element type
 */
const BannerMessage = (props) => {
    return props.children ? (react_1.default.createElement(Text_1.default, { color: "inherit", size: "body" }, props.children)) : null;
};
Banner.Message = BannerMessage;
Banner.Message.displayName = "Banner.Message";
//# sourceMappingURL=Banner.js.map