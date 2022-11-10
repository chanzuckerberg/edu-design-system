import clsx from 'clsx';
import React, { createContext } from 'react';
import styles from './Accordion.module.css';
import AccordionButton from '../AccordionButton';
import AccordionItem from '../AccordionItem';
import AccordionPanel from '../AccordionPanel';
import AccordionTitle from '../AccordionTitle';
import type { HeadingElement } from '../Heading';

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
   * Used to specify which heading element should be rendered for each Accordion.Title child.
   */
  headingAs: HeadingElement;
  /**
   * Compact variant shrinks the Accordion size.
   */
  variant?: 'compact';
};

export const AccordionContext = createContext<{
  headingAs: HeadingElement;
  hasOutline?: Props['hasOutline'];
  variant?: Props['variant'];
}>({
  headingAs: 'h2',
});

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Accordion} from "@chanzuckerberg/eds;`
 *
 * One or multiple interactive headings that reveal or hide associated content.
 *
 * ```tsx
 * <Accordion>
 *   <Accordion.Item>
 *     <Accordion.Button>
 *        <Accordion.Title>
 *          Title 1
 *        <Accordion.Title>
 *     </Accordion.Button>
 *     <Accordion.Panel>
 *       Content 1
 *     </Accordion.Panel>
 *   </Accordion.Item>
 *   <Accordion.Item>
 *     <Accordion.Button>
 *        <Accordion.Title>
 *          Title 2
 *        <Accordion.Title>
 *     </Accordion.Button>
 *     <Accordion.Panel>
 *       Content 2
 *     </Accordion.Panel>
 *   </Accordion.Item>
 * </Accordion>
 * ```
 */
export const Accordion = ({
  children,
  className,
  hasOutline,
  headingAs,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    hasOutline && styles['accordion--outline'],
    className,
  );
  return (
    <AccordionContext.Provider value={{ headingAs, hasOutline, variant }}>
      <div className={componentClassName} {...other}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Button = AccordionButton;
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Panel = AccordionPanel;
