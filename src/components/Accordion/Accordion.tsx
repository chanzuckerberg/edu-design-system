import clsx from 'clsx';
import React, { createContext } from 'react';
import styles from './Accordion.module.css';
import AccordionButton from '../AccordionButton';
import AccordionPanel from '../AccordionPanel';
import AccordionRow from '../AccordionRow';
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
   * Outline variant adds extra padding and a rounded border.
   */
  hasOutline?: boolean;
  /**
   * Compact variant shrinks the Accordion size.
   */
  variant?: 'compact';
};

export const AccordionContext = createContext<{
  hasOutline: Props['hasOutline'];
  variant: Props['variant'];
}>({
  hasOutline: undefined,
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
 *   <Accordion.Row>
 *     <Accordion.Button>
 *        <Accordion.Title>
 *          Title 1
 *        <Accordion.Title>
 *     </Accordion.Button>
 *     <Accordion.Panel>
 *       Content 1
 *     </Accordion.Panel>
 *   </Accordion.Row>
 *   <Accordion.Row>
 *     <Accordion.Button>
 *        <Accordion.Title>
 *          Title 2
 *        <Accordion.Title>
 *     </Accordion.Button>
 *     <Accordion.Panel>
 *       Content 2
 *     </Accordion.Panel>
 *   </Accordion.Row>
 * </Accordion>
 * ```
 */
export const Accordion = ({
  children,
  className,
  hasOutline,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['accordion'], className);
  return (
    <AccordionContext.Provider value={{ hasOutline, variant }}>
      <div className={componentClassName} {...other}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Button = AccordionButton;
Accordion.Row = AccordionRow;
Accordion.Title = AccordionTitle;
Accordion.Panel = AccordionPanel;
