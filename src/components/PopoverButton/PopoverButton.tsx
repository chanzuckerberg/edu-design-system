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
 * Popover button.
 *
 * By default will render a button, so you shouldn't pass a button component as its children.
 * Instead, pass the contents of the button.
 *
 * If you need to use some sort of special button, pass it as the `as` prop. Make sure the
 * component accepts `aria-expanded` and `aria-controls` props for accessibility.
 *
 * @example
 * // Normal usage
 * <Popover.Button className={someCustomClasses}>
 *   <span>Coffee</span>
 *   <MugIcon />
 * </Popover.Button>
 *
 * @example
 * // Passing your own button
 * <Popover.Button as={Button}>
 *   EDS Button Yay
 * </Popover.Button>
 */
export const PopoverButton = (props: PopoverButtonProps) => {
  const { setReferenceElement } = useContext(PopoverContext);
  return <HeadlessPopover.Button {...props} ref={setReferenceElement} />;
};
