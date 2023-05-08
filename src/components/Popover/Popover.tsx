import { Popover as HeadlessPopover } from '@headlessui/react';
import clsx from 'clsx';
import { useState, createContext, useContext } from 'react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import type { ExtractProps } from '../../util/utility-types';
import type {
  PopoverOptions,
  PopoverContext as PopoverContextType,
} from '../PopoverContainer';
import { defaultPopoverModifiers } from '../PopoverContainer';
import PopoverContainer from '../PopoverContainer';
import styles from './Popover.module.css';

export type PopoverProps = ExtractProps<typeof HeadlessPopover> &
  PopoverOptions & {
    /**
     * Custom classname for additional styles
     */
    className?: string;
  };

export const PopoverContext = createContext<PopoverContextType>({});

/**
 * `import {Popover} from "@chanzuckerberg/eds";`
 *
 * General-purpose floating menus that appear proximal to a trigger point
 */
export const Popover = ({
  placement = 'bottom-start',
  modifiers = defaultPopoverModifiers,
  strategy,
  onFirstUpdate,
  ...other
}: PopoverProps) => {
  const [referenceElement, setReferenceElement] = useState<Element>();

  const [popperElement, setPopperElement] = useState<HTMLElement>();

  // Leverage usePopper hook from Popper js for additional popover behavior and adds behavior to context for consumption by subcomponents.
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    { placement, modifiers, strategy, onFirstUpdate },
  );

  return (
    <PopoverContext.Provider
      value={{
        placement,
        popperStyles: popperStyles.popper,
        popperAttributes: attributes.popper,
        popperElement,
        setReferenceElement: setReferenceElement as React.Dispatch<
          React.SetStateAction<Element | null | undefined>
        >,
        setPopperElement: setPopperElement as React.Dispatch<
          React.SetStateAction<HTMLElement | null | undefined>
        >,
      }}
    >
      <HeadlessPopover {...other} />
    </PopoverContext.Provider>
  );
};

/**
 * Prevents TypeScript erroring of using private Headless Popover attributes.
 */
const PopoverOverlay = (
  props: ExtractProps<typeof HeadlessPopover.Overlay>,
) => <HeadlessPopover.Overlay {...props} />;

const PopoverGroup = (props: ExtractProps<typeof HeadlessPopover.Group>) => (
  <HeadlessPopover.Group {...props} />
);

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

type PopoverButtonProps = {
  as?: React.ElementType;
  className?: string;
} & RenderProps<{ open: boolean }>;

const PopoverButton = (props: PopoverButtonProps) => {
  const { setReferenceElement } = useContext(PopoverContext);
  return <HeadlessPopover.Button {...props} ref={setReferenceElement} />;
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
 * A floating container that can be resized to fit content inside
 */
const PopoverContent = ({
  arrowClassName,
  bodyClassName,
  children,
  className,
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

  return (
    <>
      {createPortal(
        <HeadlessPopover.Panel
          {...allProps}
          as="article"
          className={componentClassName}
        >
          <PopoverContainer className={bodyClassName}>
            {children as React.ReactNode}
          </PopoverContainer>
        </HeadlessPopover.Panel>,
        document.body,
      )}
    </>
  );
};

/**
 * A button that when clicked, can show or hide the Popover Menu
 * (Product teams can decide how a Popover will close, if it is on click, release, hover, etc.)
 *
 * If you need to use some sort of special button, pass it as the `as` prop. Make sure the
 * component accepts `aria-expanded` and `aria-controls` props for accessibility.
 *
 * Examples:
 *
 * ```ts
 * import {Popover} from "@chanzuckerberg/eds";
 *
 * // Normal usage
 * <Popover.Button className={someCustomClasses}>
 *   <span>Coffee</span>
 *   <MugIcon />
 * </Popover.Button>
 * ```
 *
 * ```ts
 * import {Popover} from "@chanzuckerberg/eds";
 *
 * // Passing your own button
 * <Popover.Button as={Button}>
 *   EDS Button Yay
 * </Popover.Button>
 *
 * // Also works
 * <Popover.Button as={React.Fragment}>
 *   <Button>
 *     EDS Button Yay
 *   </Button>
 * </Popover.Button>
 * ```
 */
Popover.Button = PopoverButton;
/**
 * A floating container that can be resized to fit content inside
 *
 * @example
 * ```ts
 * import {Popover} from "@chanzuckerberg/eds";
 *
 * <Popover.Content>
 *  {children}
 * </Popover.Content>
 * ```
 */
Popover.Content = PopoverContent;
Popover.Overlay = PopoverOverlay;
Popover.Group = PopoverGroup;
