import { Popover as HeadlessPopover } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './PopoverContent.module.css';
import { PopoverContext } from '../Popover';
import PopoverContainer from '../PopoverContainer';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

export type PopoverContentProps = {
  /**
   * Custom classname for additional styles for the arrow.
   */
  arrowClassName?: string;
  /**
   * Custom classname for additional styles on the generic popover container.
   */
  bodyClassName?: string;
  /**
   * Custom classname for additional styles for the entire popover content.
   */
  className?: string;
  /**
   * Displays arrow that points to the popover trigger.
   */
  showArrow?: boolean;
} & RenderProps<{
  /**
   * Render prop indicating popover open status.
   */
  open: boolean;
  /**
   * Render prop that closes popover when called.
   */
  close: (
    focusableElement?: HTMLElement | React.RefObject<HTMLElement>,
  ) => void;
}>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * The floating panel component for the Popover.
 * WARNING: do not import directly and instead use the subcomponent Popover.Content to avoid context errors.
 *
 * ```ts
 * import {Popover} from "@chanzuckerberg/eds";
 *
 * <Popover.Content>
 *  {Possible Popover Elements}
 * </Popover.Content>
 * ```
 */
export const PopoverContent = ({
  arrowClassName,
  bodyClassName,
  children,
  className,
  showArrow,
  ...other
}: PopoverContentProps) => {
  // Grabs popper behavior generated from usePopper hook from Popover parent component.
  const { popperStyles, popperAttributes, setPopperElement } =
    useContext(PopoverContext);
  const allProps = {
    ...popperAttributes,
    ...other,
    ref: setPopperElement,
    style: popperStyles,
  };

  const componentClassName = clsx(styles['popover-content'], className);

  const arrowComponentClassName = clsx(
    styles['popover-content__arrow'],
    arrowClassName,
  );

  return (
    <HeadlessPopover.Panel
      {...allProps}
      as="article"
      className={componentClassName}
    >
      <PopoverContainer className={bodyClassName}>{children}</PopoverContainer>
      {showArrow && (
        <div
          aria-hidden
          className={arrowComponentClassName}
          data-popper-arrow
        />
      )}
    </HeadlessPopover.Panel>
  );
};
