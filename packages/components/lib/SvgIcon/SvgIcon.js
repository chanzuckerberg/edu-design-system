"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const SvgIcon_module_css_1 = __importDefault(require("./SvgIcon.module.css"));
/**
 * Render arbitrary SVG path data while enforcing good accessibility practices.
 *
 * If you're looking for specific icon components, look in the `../Icons` directory.
 */
function SvgIcon(props) {
    const { block = false, children, className, color = "currentColor", size, viewBox = "0 0 24 24", } = props;
    const style = {
        "--svg-icon-size": size,
    };
    const svgCommonProps = {
        className: (0, clsx_1.default)(className, SvgIcon_module_css_1.default.svgIcon, block && SvgIcon_module_css_1.default.displayBlock),
        fill: color,
        height: size,
        /**
         * height/width html properties are overriden by the defaults applied
         * to svg css class
         */
        style,
        viewBox,
        width: size,
        xmlns: "http://www.w3.org/2000/svg",
    };
    if (props.purpose === "informative") {
        return (react_1.default.createElement("svg", Object.assign({}, svgCommonProps, { role: "img" }),
            react_1.default.createElement("title", null, props.title),
            children));
    }
    else {
        return (react_1.default.createElement("svg", Object.assign({}, svgCommonProps, { "aria-hidden": true }), children));
    }
}
exports.default = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map