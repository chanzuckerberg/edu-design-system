import { Disclosure } from '@headlessui/react';
import { clsx } from 'clsx';
import React, { createContext, useContext } from 'react';
import { ENTER_KEYCODE, SPACEBAR_KEYCODE } from '../../util/keycodes';
import Button from '../Button';
import Heading, { type HeadingElement } from '../Heading';
import Icon from '../Icon';
import styles from './Accordion.module.css';

type AccordionProps = {
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

type AccordionButtonProps = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
  /**
   * Used to specify which heading element should be rendered for the title.
   * If provided, overrides parent <Accordion> headingAs prop.
   */
  headingAs?: HeadingElement;
  /**
   * Callback called when accordion is closed.
   */
  onClose?: () => void;
};

type AccordionPanelProps = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
};

type AccordionRowProps = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children:
    | React.ReactNode
    | (({ open }: { open: boolean }) => React.ReactNode);
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Whether panel is expanded by default.
   */
  defaultOpen?: boolean;
};

const AccordionContext = createContext<{
  headingAs: HeadingElement;
  hasOutline?: AccordionProps['hasOutline'];
  size?: AccordionProps['size'];
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
}: AccordionProps) => {
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

const AccordionButton = ({
  children,
  className,
  headingAs,
  onClose,
  ...other
}: AccordionButtonProps) => {
  const {
    hasOutline,
    headingAs: contextHeadingAs,
    size,
  } = useContext(AccordionContext);

  const componentClassName = clsx(
    styles['accordion-button'],
    size === 'sm' && styles['accordion-button--sm'],
    hasOutline && styles['accordion-button--outline'],
    className,
  );

  const headingClassName = clsx(
    styles['accordion-button__heading'],
    size === 'sm' && styles['accordion-button__heading--sm'],
  );

  return (
    <Disclosure.Button as={React.Fragment}>
      {({ open }) => (
        <Button
          className={componentClassName}
          fullWidth
          onClick={() => {
            if (open && onClose) {
              onClose();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === SPACEBAR_KEYCODE || e.key === ENTER_KEYCODE) {
              if (open && onClose) {
                onClose();
              }
            }
          }}
          status="neutral"
          variant="icon"
          {...other}
        >
          <Heading
            className={headingClassName}
            size={headingAs || contextHeadingAs}
          >
            {children}
          </Heading>
          <Icon
            className={clsx(
              styles['accordion-button__icon'],
              open && styles['accordion-button__icon--open'],
            )}
            name="expand-more"
            purpose="informative"
            size="1.625rem"
            title={open ? 'hide content' : 'show content'}
          />
        </Button>
      )}
    </Disclosure.Button>
  );
};

const AccordionPanel = ({
  className,
  children,
  ...other
}: AccordionPanelProps) => {
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

const AccordionRow = ({
  className,
  defaultOpen,
  children,
  ...other
}: AccordionRowProps) => {
  const { hasOutline } = useContext(AccordionContext);
  const componentClassName = clsx(
    styles['accordion-row'],
    hasOutline && styles['accordion-row--outline'],
    className,
  );
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className={componentClassName} {...other}>
          {typeof children === 'function' ? children({ open }) : children}
        </div>
      )}
    </Disclosure>
  );
};

Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Row = AccordionRow;
