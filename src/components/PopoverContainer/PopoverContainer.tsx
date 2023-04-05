import clsx from 'clsx';
import React from 'react';
import styles from './PopoverContainer.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  children: React.ReactNode;
}

// Default settings for any popover container using PopperJS
export const defaultPopoverModifiers = [
  {
    name: 'offset',
    options: {
      offset: [0, 10], // spaces the popover from the trigger element
    },
  },
  {
    name: 'preventOverflow',
    options: {
      mainAxis: false, // prevents popover from offsetting to prevent overflow. Turned off due to resulting misalignment of popover arrow.
    },
  },
];

export const PopoverContainer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...other }, ref) => {
    const componentClassName = clsx(styles['popover-container'], className);

    return (
      <div className={componentClassName} {...other} ref={ref}>
        {children}
      </div>
    );
  },
);
