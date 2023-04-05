import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import Icon from '../Icon';
import styles from './DropdownButton.module.css';

type Props = {
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * Text placed inside the button to describe the dropdown.
   */
  children?: ReactNode;
  /**
   * Indicates state of the dropdown, used to style the button.
   */
  isOpen?: boolean;
};

/**
 * `import {DropdownButton} from "@chanzuckerberg/eds";`
 *
 * A styled button with an expand icon to be used in triggering Popovers, Dropdowns, etc.
 */
export const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, isOpen, ...other }, ref) => {
    const componentClassName = clsx(styles['dropdown-button'], className);
    const iconClassName = clsx(
      styles['dropdown-button__icon'],
      isOpen && styles['dropdown-button__icon--reversed'],
    );
    return (
      <button className={componentClassName} ref={ref} {...other}>
        {/* Wrapping span ensures that `children` and icon will be correctly pushed to
            either side of the button even if `children` contains more than one element. */}
        <span>{children}</span>
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
