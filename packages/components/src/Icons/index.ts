// Icons re-exported from here will show up in the "AllIcons" story in Storybook.

// NOTE: until we enable tree-shaking, Icons should be imported directly from their file, i.e.
//   import CheckCircleIcon from "Icons/CheckCircle"
// and not from the Icons folder.

export { default as CheckCircle } from "./CheckCircle";
export { default as Close } from "./Close";
export { default as Forum } from "./Forum";
export { default as Notifications } from "./Notifications";
export { default as Warning } from "./Warning";

// custom SVGs not found in https://material-ui.com/components/material-icons/
export { default as DangerousRounded } from "./custom/DangerousRounded";
