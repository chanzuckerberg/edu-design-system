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
const CloseButton_1 = __importDefault(require("../CloseButton"));
const Text_1 = __importDefault(require("../Text"));
const Notification_module_css_1 = __importDefault(require("../common/Notifications/Notification.module.css"));
const NotificationIcon_1 = __importDefault(require("../common/Notifications/NotificationIcon"));
const Toast_module_css_1 = __importDefault(require("./Toast.module.css"));
/**
 * A toast used to provide information on the state of the page, usually in response to a
 * user action. Ex: The user updates their profile, and a toast pop-up informs them that the
 * data was successfully saved.
 */
function Toast(_a) {
    var { children, className, color, onDismiss } = _a, 
    // Allow for additional attributes such as aria roles
    rest = __rest(_a, ["children", "className", "color", "onDismiss"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, clsx_1.default)(className, Toast_module_css_1.default.toastDialog, color === "success" && Notification_module_css_1.default.colorSuccess, color === "alert" && Notification_module_css_1.default.colorAlert) }, rest),
        react_1.default.createElement("div", { className: Toast_module_css_1.default.content },
            react_1.default.createElement(NotificationIcon_1.default, { variant: color }),
            react_1.default.createElement(Text_1.default, { color: "inherit", size: "sm" }, children)),
        onDismiss && react_1.default.createElement(CloseButton_1.default, { color: color, onClose: onDismiss })));
}
exports.default = Toast;
//# sourceMappingURL=Toast.js.map