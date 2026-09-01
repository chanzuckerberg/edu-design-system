import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import clsx from 'clsx';
import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { ENTER_KEYCODE, SPACEBAR_KEYCODE } from '../../util/keycodes';
import { assertEdsUsage } from '../../util/logging';
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
   * @deprecated
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
  subTitle?: ReactNode;
  /**
   * The title/heading of the component
   */
  title?: string;
  /**
   * Slot which follows the text in an accordion header
   */
  trailingContent?: ReactNode;
  /**
   * Icon override for component's expand/collapse indicator.
   *
   * **Default is `"chevron-down"`**.
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
   * Whether the row has content on the row's trigger that leads in front of the title
   */
  hasLeadingIcon?: boolean;
  /**
   * Whether the row has a content on the row's trigger that trails the title
   */
  hasTrailingContent?: boolean;
};

const AccordionContext = createContext<{
  headingAs: HeadingElement;
  size?: AccordionProps['size'];
}>({
  headingAs: 'h2',
});

const AccordionRowContext = createContext<
  Pick<
    AccordionRowProps,
    'isExpandable' | 'hasLeadingIcon' | 'hasTrailingContent'
  >
>({
  isExpandable: true,
  hasLeadingIcon: false,
  hasTrailingContent: false,
});

/**
 * ## Usage
 *
 * * **Reducing visual clutter**: Especially when dealing with long pages or dense content.
 * * **FAQs**: Users can click to reveal answers one at a time.
 * * **Grouped settings**: Like categories of options or configuration panels.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * |Standard|Expands/collapses content vertically when clicked.|FAQs. Lists with optional detail. Simple disclosure sections.|
 * |Multi-expand|Allows multiple sections to be expanded at once.|Filter panels. Settings grouped by category. Multi-topic summaries.|
 * |Single-Expand|Only one section can be open at a time (others collapse automatically).|Navigation menus. Step-by-step instructions. Content prioritization.|
 * |Nested|Accordion items contain sub-accordions inside.|Complex data views. Multi-level navigation or documentation.|
 * |Summary|Shows a brief summary even when collapsed.|Preview content like stats or status. Highlight key info without expanding.|
 * |Disabled|Cannot be expanded; often used to show unavailable or locked content.|Permissions-based content. Progress-dependent sections.|
 *
 * ### Best Practices
 *
 * * Don't mix accordion sizes.
 * * Don't mix accordions where some have icons and others do not.
 *
 * ## Interaction
 *
 * ### Collapsed and Expanded Rows
 *
 * By default, clicking another row does not collapse the row that has already been expanded.
 * Designers can customize this  to only allow 1 accordion row to be open at a time. However, beware that this interaction can cause the UI to “jump around” in an unpleasant way.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Order stacked accordions by priority and importance.
 * * Use short, descriptive text for the accordion title.
 * * Number the steps in the accordion section sequentially.
 * * Use paragraphs and subheads as needed within the accordion body.
 * * Use sentence case for titles.
 *
 * ### Don'ts
 *
 * * Don't use paragraphs of text in the accordion title.
 *
 * ## Resources
 *
 * * https://headlessui.com/react/disclosure
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
  leadingIcon, // TODO(next-major): rename to `leadingContent`
  title,
  trailingIcon = 'chevron-down',
  trailingContent,
  subTitle,
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

  assertEdsUsage(
    [
      typeof children !== 'undefined' &&
        (typeof title !== 'undefined' || typeof subTitle !== 'undefined'),
    ],
    'Cannot use `children` with `title`/`subTitle',
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
            preset={size === 'md' ? 'title-md' : 'title-sm'}
          >
            {(title || children) && (
              <Text
                as="span"
                className={styles['accordion-button__title']}
                preset={size === 'md' ? 'title-md' : 'title-sm'}
              >
                {title}
                {children}
              </Text>
            )}
            {subTitle && (
              <Text
                as="span"
                className={styles['accordion-button__subTitle']}
                preset={size === 'md' ? 'body-md' : 'body-sm'}
              >
                {subTitle}
              </Text>
            )}
          </Heading>
          {trailingContent}
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
  hasTrailingContent,
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
