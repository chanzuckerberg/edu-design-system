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
exports.Label = exports.CheckboxInput = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const react_uid_1 = require("react-uid");
const Checkbox_module_css_1 = __importDefault(require("./Checkbox.module.css"));
// variables controlling checkbox SVG size.
// surfaced here since they're used in the input, label, and CSS
const svgViewBoxSize = 20;
const svgSizeRem = `${svgViewBoxSize / 16}rem`;
const svgStyle = {
    /* stylelint-disable-next-line value-keyword-case */
    "--checkbox-svg-size": svgSizeRem,
};
/**
 * Using a technique from https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/,
 * we hide the checkbox input and instead completely style through an
 * SVG overlaid on top of the input element.
 */
const CheckboxSvg = ({ indeterminate }) => {
    const checkmarkPath = indeterminate
        ? "M 14.00,9.00 C 14.55,9.00 15.00,9.45 15.00,10.00 15.00,10.00 15.00,10.00 15.00,10.00 15.00,10.55 14.55,11.00 14.00,11.00 14.00,11.00 6.00,11.00 6.00,11.00 5.45,11.00 5.00,10.55 5.00,10.00 5.00,10.00 5.00,10.00 5.00,10.00 5.00,9.45 5.45,9.00 6.00,9.00 6.00,9.00 14.00,9.00 14.00,9.00 Z"
        : "M15.5605 5.2094C15.447 5.12571 15.3181 5.06522 15.1811 5.03137C15.0442 4.99752 14.902 4.99099 14.7625 5.01214C14.6231 5.0333 14.4892 5.08172 14.3684 5.15465C14.2477 5.22758 14.1425 5.32359 14.0589 5.43718L8.96703 12.3478L5.72917 9.7572C5.50592 9.58618 5.22455 9.50943 4.94539 9.54341C4.66622 9.57738 4.41148 9.71937 4.23576 9.93893C4.06004 10.1585 3.97733 10.4382 4.00536 10.718C4.03339 10.9978 4.16993 11.2555 4.38572 11.4359L8.49687 14.7244C8.61048 14.8133 8.74065 14.8786 8.87979 14.9166C9.01893 14.9546 9.16424 14.9645 9.30724 14.9457C9.45024 14.9269 9.58805 14.8798 9.71264 14.8071C9.83723 14.7344 9.94609 14.6377 10.0329 14.5225L15.7917 6.71187C15.8753 6.59806 15.9356 6.4689 15.9691 6.33178C16.0027 6.19465 16.009 6.05225 15.9875 5.91272C15.966 5.77318 15.9173 5.63925 15.844 5.51857C15.7707 5.39789 15.6744 5.29283 15.5605 5.2094Z";
    return (react_1.default.createElement("svg", { "aria-hidden": "true", height: svgSizeRem, viewBox: `0 0 ${svgViewBoxSize} ${svgViewBoxSize}`, width: svgSizeRem },
        react_1.default.createElement("rect", { className: Checkbox_module_css_1.default.outline, fill: "none", height: "18", rx: "3", stroke: "currentColor", strokeWidth: "2", width: "18", x: "1", y: "1" }),
        react_1.default.createElement("path", { className: Checkbox_module_css_1.default.content, d: checkmarkPath, fill: "none" })));
};
/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
exports.CheckboxInput = react_1.default.forwardRef((_a, ref) => {
    var { checked, className, disabled } = _a, rest = __rest(_a, ["checked", "className", "disabled"]);
    // Make indeterminate checkbox visually match the colors of a
    // checked state, but announce itself as "mixed" to screen readers
    const checkedProps = checked === "indeterminate"
        ? {
            "aria-checked": "mixed",
            checked: true,
        }
        : {
            checked,
        };
    return (react_1.default.createElement("span", { className: (0, clsx_1.default)(Checkbox_module_css_1.default.inputWrapper, disabled && Checkbox_module_css_1.default.disabled) },
        react_1.default.createElement("input", Object.assign({ className: (0, clsx_1.default)(className, Checkbox_module_css_1.default.checkboxInput), "data-bootstrap-override": "checkbox", disabled: disabled, ref: ref, style: svgStyle, type: "checkbox" }, checkedProps, rest)),
        react_1.default.createElement(CheckboxSvg, { indeterminate: checked === "indeterminate" })));
});
/**
 * Label element, exported for greater flexibility. Can be used with any form input.
 */
const Label = ({ children, className, htmlFor, size = "medium", }) => {
    return (react_1.default.createElement("label", { className: (0, clsx_1.default)(className, Checkbox_module_css_1.default.label, size === "small" && Checkbox_module_css_1.default.labelSmall, size === "medium" && Checkbox_module_css_1.default.labelMedium), "data-bootstrap-override": "label", htmlFor: htmlFor, style: svgStyle }, children));
};
exports.Label = Label;
/**
 * Checkbox control indicating if something is selected or unselected.
 *
 * Requires either a visible label or an accessible name.
 */
const Checkbox = react_1.default.forwardRef((props, ref) => {
    // All remaining props are passed to the `input` element
    const { className, id, label, size } = props, rest = __rest(props, ["className", "id", "label", "size"]);
    // When possible, use a visible label through the `label` prop instead.
    // In rare cases where there's no visible label, you must provide an
    // `aria-label` for screen readers.
    if (process.env.NODE_ENV !== "production" &&
        !label &&
        !props["aria-label"]) {
        throw new Error("You must provide a visible label or aria-label");
    }
    const generatedId = (0, react_uid_1.useUID)();
    const checkboxId = id || generatedId;
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)(className, Checkbox_module_css_1.default.checkbox) },
        react_1.default.createElement(exports.CheckboxInput, Object.assign({ id: checkboxId, ref: ref }, rest)),
        label && (react_1.default.createElement(exports.Label, { htmlFor: checkboxId, size: size }, label))));
});
Checkbox.displayName = "Checkbox";
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map