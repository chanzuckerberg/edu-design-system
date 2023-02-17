import { Popover as HeadlessPopover } from '@headlessui/react';
import type { Options as PopperJSOptions } from '@popperjs/core';
import clsx from 'clsx';
import React from 'react';
import { useState, createContext, useContext } from 'react';
import { usePopper } from 'react-popper';
import styles from './Popover.module.css';
import type { ExtractProps } from '../../util/utility-types';
import { defaultPopoverModifiers } from '../PopoverContainer';
import PopoverContainer from '../PopoverContainer';

export type PopoverProps = ExtractProps<typeof HeadlessPopover> & {
  /**
   * Custom classname for additional styles
   */
  className?: string;
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
  modifiers?: PopperJSOptions['modifiers'];
  /**
   * Describes the positioning strategy to use. By default, it is 'absolute', which in the simplest cases does not require repositioning of the popper.
   * If your trigger element is in a fixed container, use the fixed strategy.
   */
  strategy?: PopperJSOptions['strategy'];
};

type PopoverContextType = {
  placement?: PopoverProps['placement'];
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

export const PopoverContext = createContext<PopoverContextType>({});

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Popover} from "@chanzuckerberg/eds";`
 *
 * General-purpose floating menus that appear proximal to a trigger point
 */
export const Popover = ({
  placement,
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
    <HeadlessPopover.Panel
      {...allProps}
      as="article"
      className={componentClassName}
    >
      <PopoverContainer className={bodyClassName}>
        {children as React.ReactNode}
      </PopoverContainer>
    </HeadlessPopover.Panel>
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
