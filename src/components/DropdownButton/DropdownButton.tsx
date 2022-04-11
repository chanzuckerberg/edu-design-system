import clsx from 'clsx';
import React, { ReactNode, forwardRef } from 'react';
import styles from './DropdownButton.module.css';
import Icon from '../Icon';

type Props = {
  className?: string;
  text?: ReactNode;
};

/**
 * ```ts
 * import {DropdownButton} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A styled button with an expand icon to be used in triggering Popovers, Dropdowns, etc.
 */
export const DropdownButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, text, ...other }, ref) => {
    return (
      <button
        className={clsx(styles['dropdown-button'], className)}
        ref={ref}
        {...other}
      >
        {/* Wrapping span ensures that `children` and icon will be correctly pushed to
            either side of the button even if `children` contains more than one element. */}
        <span>{text}</span>
        <Icon name="expand-more" purpose="decorative" size="1.25rem" />
      </button>
    );
  },
);

DropdownButton.displayName = 'DropdownButton';
