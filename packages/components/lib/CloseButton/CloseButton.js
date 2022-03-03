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
const Button_1 = __importDefault(require("../Button"));
const CloseRounded_1 = __importDefault(require("../Icons/CloseRounded"));
const CloseButton_module_css_1 = __importDefault(require("./CloseButton.module.css"));
/**
 * Generic close button.
 */
const CloseButton = (0, react_1.forwardRef)((_a, ref) => {
    var { className, color = "neutral", onClose, size = "2rem", "aria-label": ariaLabel = "close" } = _a, rest = __rest(_a, ["className", "color", "onClose", "size", "aria-label"]);
    return (react_1.default.createElement(Button_1.default, Object.assign({ className: (0, clsx_1.default)(CloseButton_module_css_1.default.button, className, 
        // Color props
        color === "brand" && CloseButton_module_css_1.default.colorBrand, color === "neutral" && CloseButton_module_css_1.default.colorNeutral, color === "success" && CloseButton_module_css_1.default.colorSuccess, color === "warning" && CloseButton_module_css_1.default.colorWarning, color === "alert" && CloseButton_module_css_1.default.colorAlert), color: color, onClick: onClose, variant: "link", ref: ref }, rest),
        react_1.default.createElement(CloseRounded_1.default, { purpose: "informative", size: size, title: ariaLabel })));
});
CloseButton.displayName = "CloseButton";
exports.default = CloseButton;
//# sourceMappingURL=CloseButton.js.map