import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { createContext } from 'react';
import styles from './Accordion.module.css';
import AccordionButton from '../AccordionButton';
import AccordionPanel from '../AccordionPanel';
import AccordionTitle from '../AccordionTitle';

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
  /**
   * Compact variant shrinks the Accordion size.
   */
  variant?: 'compact';
};

export const AccordionContext = createContext<{ variant: Props['variant'] }>({
  variant: undefined,
});

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Accordion} from "@chanzuckerberg/eds;`
 *
 * An interactive heading that reveals or hides associated content.
 * Built on 'headless UI' Disclosure.
 *
 * ```tsx
 * <Accordion>
 *   <Accordion.Button>
 *      <Accordion.Title>
 *        Title
 *      <Accordion.Title>
 *   </Accordion.Button>
 *   <Accordion.Panel>
 *     Content
 *   </Accordion.Panel>
 * </Accordion>
 * ```
 */
export const Accordion = ({
  className,
  defaultOpen,
  children,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['accordion'], className);
  return (
    <AccordionContext.Provider value={{ variant }}>
      <Disclosure defaultOpen={defaultOpen}>
        <div className={componentClassName} {...other}>
          {children}
        </div>
      </Disclosure>
    </AccordionContext.Provider>
  );
};

Accordion.Button = AccordionButton;
Accordion.Title = AccordionTitle;
Accordion.Panel = AccordionPanel;
