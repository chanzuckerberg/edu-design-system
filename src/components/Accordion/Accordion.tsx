import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { createContext } from 'react';
import styles from './Accordion.module.css';
import AccordionButton from '../AccordionButton';
import AccordionPanel from '../AccordionPanel';
import AccordionTitle from '../AccordionTitle';

type Props = {
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
  /**
   * Compact variant shrinks the Accordion size.
   */
  variant?: 'compact';
};

export const AccordionContext = createContext<{ variant: Props['variant'] }>({
  variant: undefined,
});

/**
 * `import Accordion from 'v2/core/EDSCandidates/Accordion';`
 *
 * EDS Accordion.
 *
 * Usage:
 * ```
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
  classNameOpen,
  classNameClosed,
  children,
  variant,
  ...other
}: Props) => (
  <AccordionContext.Provider value={{ variant }}>
    <Disclosure {...other}>
      {({ open }) => (
        <div
          className={clsx(
            styles['accordion'],
            className,
            open && classNameOpen,
            !open && classNameClosed,
          )}
        >
          {children}
        </div>
      )}
    </Disclosure>
  </AccordionContext.Provider>
);

Accordion.Button = AccordionButton;
Accordion.Title = AccordionTitle;
Accordion.Panel = AccordionPanel;
