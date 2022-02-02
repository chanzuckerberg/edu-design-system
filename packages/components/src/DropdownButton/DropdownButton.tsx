import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";
import ExpandMoreRoundedIcon from "../Icons/ExpandMoreRounded";
import styles from "./DropdownButton.module.css";

type Props = {
  className?: string;
  children?: ReactNode;
};

/**
 * A styled button with an expand icon to be used in triggering Popovers, Dropdowns, etc.
 */
const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        className={clsx(styles.dropdownButton, className)}
        ref={ref}
        {...rest}
      >
        {/* Wrapping span ensures that `children` and icon will be correctly pushed to
            either side of the button even if `children` contains more than one element. */}
        <span>{children}</span>
        <ExpandMoreRoundedIcon purpose="decorative" size="1.25rem" />
      </button>
    );
  },
);

DropdownButton.displayName = "DropdownButton";

export default DropdownButton;
