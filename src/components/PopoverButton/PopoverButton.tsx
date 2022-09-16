import { Popover as HeadlessPopover } from '@headlessui/react';
import React, { useContext } from 'react';
import { PopoverContext } from '../Popover';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

export type PopoverButtonProps = {
  as?: React.ElementType;
  className?: string;
} & RenderProps<{ open: boolean }>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Popover trigger button.
 * WARNING: do not import directly and instead use the subcomponent Popover.Button to avoid context errors.
 *
 * By default will render a button, so you shouldn't pass a button component as its children.
 * Instead, pass the contents of the button.
 *
 * If you need to use some sort of special button, pass it as the `as` prop. Make sure the
 * component accepts `aria-expanded` and `aria-controls` props for accessibility.
 *
 * @example
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
 * @example
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
export const PopoverButton = (props: PopoverButtonProps) => {
  const { setReferenceElement } = useContext(PopoverContext);
  return <HeadlessPopover.Button {...props} ref={setReferenceElement} />;
};

PopoverButton.displayName = 'PopoverButton';
