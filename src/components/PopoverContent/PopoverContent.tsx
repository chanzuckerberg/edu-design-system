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
  open: boolean;
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
  const { popperStyles, popperAttributes, setPopperElement } =
    useContext(PopoverContext);
  const allProps = {
    ...popperAttributes,
    ...other,
    ref: setPopperElement,
    style: popperStyles,
    className: clsx(styles['popover-content'], className),
  };

  const componentClassName = clsx(
    styles['popover-content__scroll-area'],
    className,
  );

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
        <div className={arrowComponentClassName} data-popper-arrow />
      )}
    </HeadlessPopover.Panel>
  );
};
