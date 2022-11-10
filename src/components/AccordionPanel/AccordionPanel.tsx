import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionPanel.module.css';
import { AccordionContext } from '../Accordion';

export type Props = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * The heading text subcomponent for the Accordion.Button subcomponent for the EDS Accordion component.
 */
export const AccordionPanel = ({ className, children, ...other }: Props) => {
  const { hasOutline, size } = useContext(AccordionContext);

  const componentClassName = clsx(
    styles['accordion-panel'],
    size === 'sm' && styles['accordion-panel--sm'],
    hasOutline && styles['accordion-panel--outline'],
    className,
  );

  return (
    <Disclosure.Panel className={componentClassName} {...other}>
      {children}
    </Disclosure.Panel>
  );
};
