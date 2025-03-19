import type { Options } from '@popperjs/core';
import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';

import styles from './PopoverContainer.module.css';

export type PopoverContainerProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
};

// Default modifiers for any popover container using PopperJS
export const defaultPopoverModifiers: Options['modifiers'] = [
  {
    name: 'offset',
    options: {
      offset: [0, 12], // spaces the popover from the trigger element
    },
  },
  {
    name: 'preventOverflow',
    options: {
      mainAxis: false, // prevents popover from offsetting to prevent overflow. Turned off due to resulting misalignment of popover arrow.
    },
  },
  {
    name: 'computeStyles',
    options: {
      roundOffsets: false, // This is to prevent off-by-one rendering glitches, but may add some sub-pixel fuzziness
    },
  },
  {
    name: 'minWidth',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({ state }) => {
      state.styles.popper.minWidth = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
      state.elements.popper.style.minWidth = `${
        state.elements.reference.getBoundingClientRect().width
      }px`;
    },
  },
];

export const PopoverContainer = React.forwardRef<
  HTMLDivElement,
  PopoverContainerProps
>(({ className, children, ...other }, ref) => {
  const componentClassName = clsx(styles['popover-container'], className);

  return (
    <div className={componentClassName} {...other} ref={ref}>
      {children}
    </div>
  );
});

PopoverContainer.displayName = 'PopoverContainer';
