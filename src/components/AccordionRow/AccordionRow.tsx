import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import styles from './AccordionRow.module.css';

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
 * The section row subcomponent for the EDS Accordion component that houses one Accordion.Button subcomponent and its respective Accordion.Panel subcomponent.
 */
export const AccordionRow = ({
  className,
  classNameOpen,
  classNameClosed,
  defaultOpen,
  children,
  ...other
}: Props) => (
  <Disclosure defaultOpen={defaultOpen}>
    {({ open }) => (
      <div
        className={clsx(
          styles['accordion-row'],
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
