import {
  Popover as HeadlessPopover,
  PopoverBackdrop as HeadlessPopoverBackdrop,
  PopoverButton as HeadlessPopoverButton,
  PopoverGroup as HeadlessPopoverGroup,
  PopoverPanel as HeadlessPopoverPanel,
} from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import type { ReactNode, RefObject } from 'react';

import type { ExtractProps, RenderProps } from '../../util/utility-types';
import PopoverContainer from '../PopoverContainer';

import styles from './Popover.module.css';

export type PopoverProps = ExtractProps<typeof HeadlessPopover> & {
  /**
   * Custom classname for additional styles
   */
  className?: string;
};

export type PopoverContentProps = ExtractProps<typeof HeadlessPopoverPanel> & {
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
} & RenderProps<{
    /**
     * Render prop indicating popover open status.
     */
    open: boolean;
    /**
     * Render prop that closes popover when called.
     */
    close: (focusableElement?: HTMLElement | RefObject<HTMLElement>) => void;
  }>;

export type PopoverButtonProps = {
  as?: React.ElementType;
  className?: string;
} & RenderProps<{ open: boolean }>;

/**
 * ## Usage
 *
 * * Keeps information close to a button, etc., that triggers it.
 * * Typically used for showing contextual information or quick actions without taking focus away from the main page.
 * * Doesn't block interaction with the rest of the page.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Show additional info | Displays extra details or hints related to a UI element. | Showing help text when hovering over an info icon. |
 * | Form fields / Input | Embeds lightweight form elements in a contextual way. | A popover with a color picker or emoji selector. |
 *
 * ### Best Practices
 *
 * * Don't use popovers for popup menus. Use a Menu instead.
 *
 * ## Interaction
 *
 * Popovers open in response to user interaction—click, tap, or hover. They close when clicking outside the popover, pressing `Esc`, selecting an item within the popover, or interacting with the trigger again (for toggling popovers).
 *
 * ## Resources
 *
 * * https://headlessui.com/react/popover
 */
export const Popover = ({ ...other }: PopoverProps) => {
  return <HeadlessPopover {...other} />;
};

/**
 * Prevents TypeScript erroring of using private Headless Popover attributes.
 *
 * @see https://headlessui.com/react/popover#popover-overlay
 */
const PopoverOverlay = (
  props: ExtractProps<typeof HeadlessPopoverBackdrop>,
) => <HeadlessPopoverBackdrop {...props} />;

/**
 * Allows for the construction of connected popovers (so that you can open each popover by tabbing between them).
 *
 * @see https://headlessui.com/react/popover#popover-group
 */
const PopoverGroup = (props: ExtractProps<typeof HeadlessPopoverGroup>) => (
  <HeadlessPopoverGroup {...props} />
);

/**
 * Trigger component for the Popover component. Usually a button of some style
 *
 * @see https://headlessui.com/react/popover#popover-button
 */
const PopoverButton = (props: PopoverButtonProps) => {
  return <HeadlessPopoverButton {...props} />;
};

/**
 * A floating container that can be resized to fit content inside
 *
 * @see https://headlessui.com/react/popover#popover-panel
 */
const PopoverContent = ({
  anchor = { to: 'bottom end', gap: 12 },
  arrowClassName,
  bodyClassName,
  children,
  className,
  ...other
}: PopoverContentProps) => {
  const panelClassName = clsx(className, styles['popover__panel']);
  return (
    <HeadlessPopoverPanel
      anchor={anchor}
      as="article"
      className={panelClassName}
      {...other}
    >
      <PopoverContainer className={bodyClassName}>
        {children as ReactNode}
      </PopoverContainer>
    </HeadlessPopoverPanel>
  );
};

Popover.displayName = 'Popover';
PopoverButton.displayName = 'Popover.Group';
PopoverContent.displayName = 'Popover.Content';
PopoverOverlay.displayName = 'Popover.Overlay';
PopoverGroup.displayName = 'Popover.Group';

/**
 * A button that when clicked, can show or hide the Popover Menu
 * (Product teams can decide how a Popover will close, if it is on click, release, hover, etc.)
 *
 * If you need to use some sort of special button, pass it as the `as` prop. Make sure the
 * component accepts `aria-expanded` and `aria-controls` props for accessibility.
 *
 */
Popover.Button = PopoverButton;
/**
 * A floating container that can be resized to fit content inside
 */
Popover.Content = PopoverContent;
Popover.Overlay = PopoverOverlay;
Popover.Group = PopoverGroup;
