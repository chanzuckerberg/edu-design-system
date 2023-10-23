import type { Options } from '@popperjs/core';
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

// Default modifiers for any popover container using PopperJS
export const defaultPopoverModifiers: Options['modifiers'] = [
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

export type PopoverOptions = {
  // TODO: switch to PopperJS's full placement type
  /**
   * Popover placement options relative to the trigger element.
   */
  placement?:
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right';

  /**
   * Object to customize how your popover will behave. For a full list of what is available,
   * refer to https://popper.js.org/docs/v2/modifiers/.
   */
  modifiers?: Options['modifiers'];
  /**
   * Describes the positioning strategy to use. By default, it is 'absolute', which in the simplest cases does not require repositioning of the popper.
   * If your trigger element is in a fixed container, use the fixed strategy.
   */
  strategy?: Options['strategy'];
  /**
   * Callback ran after Popper positions the element the first time.
   * Refer to https://popper.js.org/docs/v2/lifecycle/#hook-into-the-lifecycle.
   */
  onFirstUpdate?: Options['onFirstUpdate'];
};

export type PopoverContext = {
  placement?: PopoverOptions['placement'];
  popperStyles?: React.CSSProperties;
  popperAttributes?: { [key: string]: string };
  popperElement?: Element;
  setPopperElement?: React.Dispatch<
    React.SetStateAction<HTMLElement | null | undefined>
  >;
  setReferenceElement?: React.Dispatch<
    React.SetStateAction<Element | null | undefined>
  >;
};

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

PopoverContainer.displayName = 'PopoverContainer';
