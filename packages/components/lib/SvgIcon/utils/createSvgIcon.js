"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SvgIcon_1 = __importDefault(require("../SvgIcon"));
/**
 * Generates SVG Icons from paths and fragments.
 *
 * Implementation note: this is an extremely light wrapper right now,
 * but may be helpful in the future -- for example, if we need to support
 * forwarding refs or memoization across all Icons.
 * This also makes it easier to directly grab icon files from Material UI.
 */
function createSvgIcon(path) {
    const Component = (props) => {
        return react_1.default.createElement(SvgIcon_1.default, Object.assign({}, props), path);
    };
    return Component;
}
exports.default = createSvgIcon;
//# sourceMappingURL=createSvgIcon.js.map