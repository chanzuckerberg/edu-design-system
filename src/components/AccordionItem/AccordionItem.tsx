import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionItem.module.css';
import { AccordionContext } from '../Accordion';

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
   * Additional classnames passed in for styling active only when open.
   */
  classNameOpen?: string;
  /**
   * Additional classnames passed in for styling active only when not open.
   */
  classNameClosed?: string;
  /**
   * Whether panel is expanded by default.
   */
  defaultOpen?: boolean;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * The individual interactive heading subcomponent of the EDS Accordion that reveals or hides its associated content.
 * Built on 'headless UI' Disclosure.
 */
export const AccordionItem = ({
  className,
  classNameOpen,
  classNameClosed,
  defaultOpen,
  children,
  ...other
}: Props) => {
  const { hasOutline } = useContext(AccordionContext);
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div
          className={clsx(
            styles['accordion-item'],
            hasOutline && styles['accordion-item--outline'],
            className,
            open && classNameOpen,
            !open && classNameClosed,
          )}
          {...other}
        >
          {children}
        </div>
      )}
    </Disclosure>
  );
};
