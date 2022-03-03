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
const react_1 = __importStar(require("react"));
const typography_module_css_1 = __importDefault(require("./typography.module.css"));
const Typography = (0, react_1.forwardRef)((_a, ref) => {
    var { as, children, color = "base", size, weight = null, spacing, className } = _a, rest = __rest(_a, ["as", "children", "color", "size", "weight", "spacing", "className"]);
    const Component = as;
    return (react_1.default.createElement(Component, Object.assign({ ref: ref, className: (0, clsx_1.default)(className, typography_module_css_1.default.typography, 
        // Sizes
        size === "h1" && typography_module_css_1.default.sizeH1, size === "h2" && typography_module_css_1.default.sizeH2, size === "h3" && typography_module_css_1.default.sizeH3, size === "h4" && typography_module_css_1.default.sizeH4, size === "h5" && typography_module_css_1.default.sizeH5, size === "body" && typography_module_css_1.default.sizeBody, size === "sm" && typography_module_css_1.default.sizeSm, size === "xs" && typography_module_css_1.default.sizeXs, size === "caption" && typography_module_css_1.default.sizeCaption, size === "overline" && typography_module_css_1.default.sizeOverline, 
        // Colors
        color === "alert" && typography_module_css_1.default.colorAlert, color === "base" && typography_module_css_1.default.colorBase, color === "brand" && typography_module_css_1.default.colorBrand, color === "info" && typography_module_css_1.default.colorInfo, color === "inherit" && typography_module_css_1.default.colorInherit, color === "neutral" && typography_module_css_1.default.colorNeutral, color === "success" && typography_module_css_1.default.colorSuccess, color === "warning" && typography_module_css_1.default.colorWarning, color === "white" && typography_module_css_1.default.colorWhite, 
        // Weights
        weight === "bold" && typography_module_css_1.default.weightBold, weight === "normal" && typography_module_css_1.default.weightNormal, 
        // Spacing
        spacing === "none" && typography_module_css_1.default.spacingNone, spacing === "half" && typography_module_css_1.default.spacingHalf, spacing === "1x" && typography_module_css_1.default.spacing1, spacing === "2x" && typography_module_css_1.default.spacing2) }, rest), children));
});
Typography.displayName = "Typography"; // Satisfy eslint.
exports.default = Typography;
//# sourceMappingURL=typography.js.map