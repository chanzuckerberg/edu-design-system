"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.variantToIconAssetsMap = void 0;
const clsx_1 = __importDefault(require("clsx"));
const React = __importStar(require("react"));
const CheckCircleRounded_1 = __importDefault(require("../../../Icons/CheckCircleRounded"));
const ForumRounded_1 = __importDefault(require("../../../Icons/ForumRounded"));
const NotificationsRounded_1 = __importDefault(require("../../../Icons/NotificationsRounded"));
const WarningRounded_1 = __importDefault(require("../../../Icons/WarningRounded"));
const DangerousRounded_1 = __importDefault(require("../../../Icons/custom/DangerousRounded"));
const NotificationIcon_module_css_1 = __importDefault(require("./NotificationIcon.module.css"));
exports.variantToIconAssetsMap = {
    brand: {
        icon: NotificationsRounded_1.default,
        style: NotificationIcon_module_css_1.default.iconBrand,
        title: "attention",
    },
    neutral: {
        icon: ForumRounded_1.default,
        style: NotificationIcon_module_css_1.default.iconNeutral,
        title: "notice",
    },
    success: {
        icon: CheckCircleRounded_1.default,
        style: NotificationIcon_module_css_1.default.iconSuccess,
        title: "success",
    },
    warning: {
        icon: WarningRounded_1.default,
        style: NotificationIcon_module_css_1.default.iconWarning,
        title: "warning",
    },
    alert: {
        icon: DangerousRounded_1.default,
        style: NotificationIcon_module_css_1.default.iconAlert,
        title: "alert",
    },
};
/**
 * An icon that appears in notifcation components (Banner and Toast).
 * This icon communicates the tone of the notification through its image,
 * color, and title text.
 */
const NotificationIcon = ({ variant }) => {
    const iconAssets = exports.variantToIconAssetsMap[variant];
    return (React.createElement("div", { className: (0, clsx_1.default)(NotificationIcon_module_css_1.default.iconContainer, iconAssets.style) },
        React.createElement(iconAssets.icon, { purpose: "informative", title: iconAssets.title })));
};
exports.default = NotificationIcon;
//# sourceMappingURL=NotificationIcon.js.map