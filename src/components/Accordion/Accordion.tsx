import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { createContext, useContext } from 'react';
import { ENTER_KEYCODE, SPACEBAR_KEYCODE } from '../../util/keycodes';
import type { Size } from '../../util/variant-types';
import Button from '../Button';
import Heading, { type HeadingElement } from '../Heading';
import Icon, { type IconName } from '../Icon';
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
  size?: Extract<Size, 'sm' | 'md'>;
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
   * Icon override for component. Default is 'expand-more'
   */
  icon?: Extract<IconName, 'expand-more'>;
  /**
   * Used to specify which heading element should be rendered for the title.
   * If provided, overrides parent <Accordion> headingAs prop.
   */
  headingAs?: HeadingElement;
  /**
   * Callback for when accordion is closed.
   */
  onClose?: () => void;
  /**
   * Callback for when according is opened.
   */
  onOpen?: () => void;
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
  /**
   * Whether the row can show expandable content
   */
  isExpandable?: boolean;
};

const AccordionContext = createContext<{
  headingAs: HeadingElement;
  hasOutline?: AccordionProps['hasOutline'];
  size?: AccordionProps['size'];
}>({
  headingAs: 'h2',
});

const AccordionRowContext = createContext<{ isExpandable?: boolean }>({
  isExpandable: true,
});

/**
 * `import {Accordion} from "@chanzuckerberg/eds;`
 *
 * Displays a list of headers stacked on top of one another that can reveal or hide associated content.
 * This component is based on the [Disclosure](https://headlessui.com/react/disclosure) component, provided by HeadlessUI.
 *
 * @see https://headlessui.com/react/disclosure
 *
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
  icon = 'expand-more',
  onClose,
  onOpen,
  ...other
}: AccordionButtonProps) => {
  const {
    hasOutline,
    headingAs: contextHeadingAs,
    size,
  } = useContext(AccordionContext);

  const { isExpandable } = useContext(AccordionRowContext);

  const componentClassName = clsx(
    styles['accordion-button'],
    size === 'sm' && styles['accordion-button--sm'],
    hasOutline && styles['accordion-button--outline'],
    !isExpandable && styles['accordion-button--empty'],
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
            if (open && isExpandable && onClose) {
              onClose();
            }
            if (!open && isExpandable && onOpen) {
              onOpen();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === SPACEBAR_KEYCODE || e.key === ENTER_KEYCODE) {
              if (open && isExpandable && onClose) {
                onClose();
              }
              if (!open && isExpandable && onOpen) {
                onOpen();
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
          {isExpandable && (
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
          )}
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
  const { isExpandable } = useContext(AccordionRowContext);

  const componentClassName = clsx(
    styles['accordion-panel'],
    size === 'sm' && styles['accordion-panel--sm'],
    hasOutline && styles['accordion-panel--outline'],
    !isExpandable && styles['accordion-panel--hidden'],
    className,
  );

  return (
    <Disclosure.Panel className={componentClassName} {...other}>
      {isExpandable && children}
    </Disclosure.Panel>
  );
};

const AccordionRow = ({
  className,
  defaultOpen,
  children,
  isExpandable = true,
  ...other
}: AccordionRowProps) => {
  const { hasOutline } = useContext(AccordionContext);
  const componentClassName = clsx(
    styles['accordion-row'],
    hasOutline && styles['accordion-row--outline'],
    className,
  );
  return (
    <AccordionRowContext.Provider value={{ isExpandable }}>
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => (
          <div className={componentClassName} {...other}>
            {typeof children === 'function' ? children({ open }) : children}
          </div>
        )}
      </Disclosure>
    </AccordionRowContext.Provider>
  );
};

Accordion.displayName = 'Accordion';
AccordionButton.displayName = 'Accordion.Button';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionRow.displayName = 'Accordion.Row';

Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Row = AccordionRow;
