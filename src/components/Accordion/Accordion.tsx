import clsx from 'clsx';
import React, { createContext } from 'react';
import AccordionButton from '../AccordionButton';
import AccordionPanel from '../AccordionPanel';
import AccordionRow from '../AccordionRow';
import type { HeadingElement } from '../Heading';
import styles from './Accordion.module.css';

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
   * Various Accordion sizes. Defaults to 'md'.
   */
  size?: 'sm' | 'md';
};

export const AccordionContext = createContext<{
  headingAs: HeadingElement;
  hasOutline?: Props['hasOutline'];
  size?: Props['size'];
}>({
  headingAs: 'h2',
});

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Accordion} from "@chanzuckerberg/eds;`
 *
 * Displays a list of headers stacked on top of one another that can reveal or hide associated content.
 *
 * ```tsx
 * <Accordion>
 *   <Accordion.Item>
 *     <Accordion.Button>
 *       Title 1
 *     </Accordion.Button>
 *     <Accordion.Panel>
 *       Content 1
 *     </Accordion.Panel>
 *   </Accordion.Item>
 *   <Accordion.Item>
 *     <Accordion.Button>
 *       Title 2
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
  size = 'md',
  ...other
}: Props) => {
  const componentClassName = clsx(
    hasOutline && styles['accordion--outline'],
    className,
  );
  return (
    <AccordionContext.Provider value={{ headingAs, hasOutline, size }}>
      <div className={componentClassName} {...other}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Row = AccordionRow;
