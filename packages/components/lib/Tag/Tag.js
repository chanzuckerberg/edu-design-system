"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylesByColor = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const Text_1 = __importDefault(require("../Text"));
const Tag_module_css_1 = __importDefault(require("./Tag.module.css"));
exports.stylesByColor = {
    neutral: Tag_module_css_1.default.colorNeutral,
    warning: Tag_module_css_1.default.colorWarning,
    brand: Tag_module_css_1.default.colorBrand,
    alert: Tag_module_css_1.default.colorAlert,
    yellow: Tag_module_css_1.default.colorYellow,
    success: Tag_module_css_1.default.colorSuccess,
};
/**
 * This component provides a tag (pill shaped badge) wrapper.
 */
function Tag({ color, children, className, icon, variant = "flat" }) {
    return (react_1.default.createElement(Text_1.default, { as: "span", className: (0, clsx_1.default)(className, Tag_module_css_1.default.tag, color && exports.stylesByColor[color], variant === "outline" && Tag_module_css_1.default.outline), color: color, size: "sm", spacing: "none", weight: "bold" },
        icon,
        "\u200B",
        children && react_1.default.createElement("span", { className: Tag_module_css_1.default.body }, children)));
}
exports.default = Tag;
//# sourceMappingURL=Tag.js.map