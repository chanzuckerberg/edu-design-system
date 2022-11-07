import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import styles from './Accordion.module.css';
import AccordionButton from '../AccordionButton';
import AccordionPanel from '../AccordionPanel';
import AccordionTitle from '../AccordionTitle';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactNode);
};

type Props = RenderProps<{ open: boolean }> & {
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
  /**
   * Additional classnames passed in for styling active only when open
   */
  classNameOpen?: string;
  /**
   * Additional classnames passed in for styling active only when not open
   */
  classNameClosed?: string;
  /**
   * Whether body is expanded by default
   */
  defaultOpen?: boolean;
};

/**
 * `import Accordion from 'v2/core/EDSCandidates/Accordion';`
 *
 * EDS Accordion.
 *
 * Usage:
 * ```
 * <Accordion>
 *   <Accordion.Header>
 *      <Accordion.Title>
 *          Title
 *      <Accordion.Title>
 *   </Accordion.Header>
 *   <Accordion.Body>
 *     Content
 *   </Accordion.Body>
 * </Accordion>
 * ```
 */
export const Accordion = ({
  className,
  classNameOpen,
  classNameClosed,
  children,
  ...other
}: Props) => (
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
        {typeof children === 'function' ? children({ open }) : children}
      </div>
    )}
  </Disclosure>
);

Accordion.Button = AccordionButton;
Accordion.Title = AccordionTitle;
Accordion.Panel = AccordionPanel;
