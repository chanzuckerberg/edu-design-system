import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import clsx from 'clsx';
import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { ENTER_KEYCODE, SPACEBAR_KEYCODE } from '../../util/keycodes';
import type { Size } from '../../util/variant-types';

import Heading, { type HeadingElement } from '../Heading';
import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './Accordion.module.css';

type AccordionProps = {
  // Component API
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  // Design API
  /**
   * Used to specify which heading element should be rendered for each `Accordion.Title` child.
   *
   * **Default is `"h2"`**.
   */
  headingAs: HeadingElement;
  /**
   * Various sizes supported by the `Accordion`.
   *
   * **Default is `"md"`**.
   */
  size?: Extract<Size, 'sm' | 'md'>;
};

type AccordionButtonProps = {
  // Component API
  /**
   * Child node(s) that can be nested inside component.
   */
  children?: ReactNode;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
  /**
   * Callback for when accordion is closed.
   */
  onClose?: () => void;
  /**
   * Callback for when according is opened.
   */
  onOpen?: () => void;
  // Design API
  /**
   * Used to specify which heading element should be rendered for the title.
   * If provided, overrides parent <Accordion> headingAs prop.
   */
  headingAs?: HeadingElement;
  /**
   * Icon to preceed the text in an accordion header
   */
  leadingIcon?: ReactNode;
  /**
   * Secondary text used to describe the content in more detail
   */
  subtitle?: ReactNode;
  /**
   * The title/heading of the component
   */
  title?: string;
  /**
   * Icon override for component's expand/collapse indicator.
   *
   * **Default is `"expand-more"`**.
   */
  trailingIcon?: Extract<IconName, 'chevron-down'>;
};

type AccordionPanelProps = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * Additional class names passed in for styling
   */
  className?: string;
};

type AccordionRowProps = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode | (({ open }: { open: boolean }) => ReactNode);
  /**
   * Additional class names passed in for styling.
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
  /**
   * Whether the row has a leading icon on the row's trigger
   */
  hasLeadingIcon?: boolean;
};

const AccordionContext = createContext<{
  headingAs: HeadingElement;
  size?: AccordionProps['size'];
}>({
  headingAs: 'h2',
});

const AccordionRowContext = createContext<
  Pick<AccordionRowProps, 'isExpandable' | 'hasLeadingIcon'>
>({
  isExpandable: true,
  hasLeadingIcon: false,
});

/**
 * `import {Accordion} from "@chanzuckerberg/eds;`
 *
 * Displays one or more headers stacked on top of one another that can reveal or hide associated content.
 * This component is based on the [Disclosure](https://headlessui.com/react/disclosure) component, provided by HeadlessUI.
 *
 * More Information: https://headlessui.com/react/disclosure
 *
 */
export const Accordion = ({
  children,
  className,
  headingAs,
  size = 'md',
  ...other
}: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{ headingAs, size }}>
      <div className={className} {...other}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionButton = ({
  children,
  className,
  headingAs,
  leadingIcon,
  title,
  trailingIcon = 'chevron-down',
  subtitle,
  onClose,
  onOpen,
  ...other
}: AccordionButtonProps) => {
  const { headingAs: contextHeadingAs, size } = useContext(AccordionContext);

  const { isExpandable } = useContext(AccordionRowContext);

  const componentClassName = clsx(
    styles['accordion-button'],
    size && styles[`accordion-button--${size}`],
    !isExpandable && styles['accordion-button--empty'],
    className,
  );

  return (
    <DisclosureButton as={React.Fragment}>
      {({ open }) => (
        <button
          className={componentClassName}
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
          {...other}
        >
          {leadingIcon && (
            <span className={styles['accordion-button__leading-icon']}>
              {leadingIcon}
            </span>
          )}
          <Heading
            as={headingAs || contextHeadingAs}
            className={styles['accordion-button__heading']}
            preset={size === 'md' ? 'body-lg' : 'body-md'}
          >
            {(title || children) && (
              <Text
                as="span"
                className={styles['accordion-button__title']}
                preset={size === 'md' ? 'body-lg' : 'body-md'}
              >
                {title}
                {children}
              </Text>
            )}
            {subtitle && (
              <Text
                as="span"
                className={styles['accordion-button__subtitle']}
                preset={size === 'md' ? 'body-md' : 'body-sm'}
              >
                {subtitle}
              </Text>
            )}
          </Heading>
          {isExpandable && (
            <Icon
              className={clsx(
                styles['accordion-button__trailing-icon'],
                open && styles['accordion-button__trailing-icon--open'],
              )}
              name={trailingIcon}
              purpose="informative"
              size="24px"
              title={open ? 'hide content' : 'show content'}
            />
          )}
        </button>
      )}
    </DisclosureButton>
  );
};

const AccordionPanel = ({
  className,
  children,
  ...other
}: AccordionPanelProps) => {
  const { isExpandable, hasLeadingIcon } = useContext(AccordionRowContext);

  const componentClassName = clsx(
    styles['accordion-panel'],
    !isExpandable && styles['accordion-panel--hidden'],
    hasLeadingIcon && styles['accordion-panel--leading-icon'],
    className,
  );

  return (
    <DisclosurePanel className={componentClassName} {...other}>
      {isExpandable && (
        <Text as="span" preset="body-md">
          {children}
        </Text>
      )}
    </DisclosurePanel>
  );
};

const AccordionRow = ({
  className,
  defaultOpen,
  children,
  isExpandable = true,
  hasLeadingIcon,
  ...other
}: AccordionRowProps) => {
  const componentClassName = clsx(styles['accordion-row'], className);
  return (
    <AccordionRowContext.Provider value={{ isExpandable, hasLeadingIcon }}>
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
