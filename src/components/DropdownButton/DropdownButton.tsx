import clsx from 'clsx';
import React, { ReactNode, forwardRef } from 'react';
import styles from './DropdownButton.module.css';
import Icon from '../Icon';

type Props = {
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * Text placed inside the button to describe the dropdown.
   */
  text?: ReactNode;
  /**
   * Indicates state of the dropdown, used to style the button.
   */
  isOpen?: boolean;
};

/**
 * ```ts
 * import {DropdownButton} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A styled button with an expand icon to be used in triggering Popovers, Dropdowns, etc.
 */
export const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, text, isOpen, ...other }, ref) => {
    const componentClassName = clsx(styles['dropdown-button'], className);
    const iconClassName = clsx(
      styles['dropdown-button__icon'],
      isOpen && styles['dropdown-button__icon--reversed'],
    );
    return (
      <button className={componentClassName} ref={ref} {...other}>
        {/* Wrapping span ensures that `children` and icon will be correctly pushed to
            either side of the button even if `children` contains more than one element. */}
        <span>{text}</span>
        <Icon
          className={iconClassName}
          name="expand-more"
          purpose="decorative"
          size="1.25rem"
        />
      </button>
    );
  },
);

DropdownButton.displayName = 'DropdownButton';
