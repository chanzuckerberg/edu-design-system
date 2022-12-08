import { Popover as HeadlessPopover } from '@headlessui/react';
import type { Options as PopperJSOptions } from '@popperjs/core';
import * as React from 'react';
import { useState, createContext } from 'react';
import { usePopper } from 'react-popper';
import type { ExtractProps } from '../../util/utility-types';
import PopoverButton from '../PopoverButton';
import { defaultPopoverModifiers } from '../PopoverContainer';
import PopoverContent from '../PopoverContent';

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
    | 'right'
    | 'bottom'
    | 'left';
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
 * A styled popover built on 'headless UI' popover. Consider using the Dropdown component instead.
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

Popover.Button = PopoverButton;
Popover.Content = PopoverContent;
Popover.Overlay = PopoverOverlay;
Popover.Group = PopoverGroup;
