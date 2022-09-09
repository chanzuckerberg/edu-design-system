import { Popover as HeadlessPopover } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './PopoverContent.module.css';
import { PopoverContext } from '../Popover';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

export type PopoverContentProps = {
  /**
   * Custom classname for additional styles for the arrow.
   */
  arrowClassName?: string;
  /**
   * Custom classname for additional styles for the scroll area.
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

export const PopoverContent = ({
  arrowClassName,
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
    className: clsx(styles['popover-content']),
  };

  const componentClassName = clsx(styles['popover-content__main'], className);

  const arrowComponentClassName = clsx(
    styles['popover-content__arrow'],
    arrowClassName,
  );

  return (
    <HeadlessPopover.Panel
      {...allProps}
      as="article"
      className={styles['popover-content']}
    >
      <div className={componentClassName}>{children}</div>
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
