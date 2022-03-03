"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const ClickableStyle_module_css_1 = __importDefault(require("./ClickableStyle.module.css"));
/**
 * A helper component that contains all the styling for buttons and links.
 *
 * If you're styling a `<button>` or `<a>` element, you can use the `Button`
 * and `Link` components (respectively). `ClickableStyle` should only be used
 * directly when styling other elements or components (e.g. `Link` from `react-router`)
 * to look like a button or link.
 *
 * See the `Button` and `Link` stories for usage examples.
 */
const ClickableStyle = react_1.default.forwardRef((_a, ref) => {
    var { as: Component, children, color, size, state, variant, className } = _a, rest = __rest(_a, ["as", "children", "color", "size", "state", "variant", "className"]);
    return (react_1.default.createElement(Component, Object.assign({ className: (0, clsx_1.default)(className, ClickableStyle_module_css_1.default.button, 
        // Sizes
        variant !== "link" && [
            size === "small" && ClickableStyle_module_css_1.default.sizeSmall,
            size === "medium" && ClickableStyle_module_css_1.default.sizeMedium,
            size === "large" && ClickableStyle_module_css_1.default.sizeLarge,
        ], 
        // Variants
        variant === "flat" && ClickableStyle_module_css_1.default.variantFlat, variant === "outline" && ClickableStyle_module_css_1.default.variantOutline, variant === "link" && ClickableStyle_module_css_1.default.variantLink, variant === "plain" && ClickableStyle_module_css_1.default.variantPlain, 
        // Colors
        color === "alert" && ClickableStyle_module_css_1.default.colorAlert, color === "brand" && ClickableStyle_module_css_1.default.colorBrand, color === "neutral" && ClickableStyle_module_css_1.default.colorNeutral, color === "success" && ClickableStyle_module_css_1.default.colorSuccess, color === "warning" && ClickableStyle_module_css_1.default.colorWarning, 
        // Interactive States (for testing)
        state === "hover" && ClickableStyle_module_css_1.default.stateHover, state === "focus" && ClickableStyle_module_css_1.default.stateFocus, state === "active" && ClickableStyle_module_css_1.default.stateActive), ref: ref }, rest), children));
});
ClickableStyle.displayName = "ClickableStyle";
exports.default = ClickableStyle;
//# sourceMappingURL=ClickableStyle.js.map