import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";
import Icon from "../Icon";
import styles from "./DropdownButton.module.css";

type Props = {
  className?: string;
  text?: ReactNode;
};

/**
 * ```ts
 * import {DropdownButton} from "@chanzuckerberg/eds";
 * ```
 *
 * A styled button with an expand icon to be used in triggering Popovers, Dropdowns, etc.
 */
const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  ({ text, className, ...rest }, ref) => {
    return (
      <button
        className={clsx(styles.dropdownButton, className)}
        ref={ref}
        {...rest}
      >
        {/* Wrapping span ensures that `text` and icon will be correctly pushed to
            either side of the button even if `text` contains more than one element. */}
        <span>{text}</span>
        <Icon name="expand-more" purpose="decorative" size="1.25rem" />
      </button>
    );
  },
);

DropdownButton.displayName = "DropdownButton";

export default DropdownButton;
