import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionItem.module.css';
import { AccordionContext } from '../Accordion';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactElement);
};

type Props = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Whether panel is expanded by default.
   */
  defaultOpen?: boolean;
} & RenderProps<{
  /**
   * Render prop indicating popover open status.
   */
  open: boolean;
}>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * The individual interactive heading subcomponent of the EDS Accordion that reveals or hides its associated content.
 * Built on 'headless UI' Disclosure.
 */
export const AccordionItem = ({
  className,
  defaultOpen,
  children,
  ...other
}: Props) => {
  const { hasOutline } = useContext(AccordionContext);
  const componentClassName = clsx(
    styles['accordion-item'],
    hasOutline && styles['accordion-item--outline'],
    className,
  );
  return (
    <Disclosure defaultOpen={defaultOpen}>
      <div className={componentClassName} {...other}>
        {children}
      </div>
    </Disclosure>
  );
};
