import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionButton.module.css';
import { ENTER_KEYCODE, SPACEBAR_KEYCODE } from '../../util/keycodes';
import { AccordionContext } from '../Accordion';
import Button from '../Button';
import type { HeadingElement } from '../Heading';
import Heading from '../Heading';
import Icon from '../Icon';

export type Props = {
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

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Contains the subject of hidden content and a down/up or chevron icon to signify that the row can expand or collapse.
 */
export const AccordionButton = ({
  children,
  className,
  headingAs,
  onClose,
  ...other
}: Props) => {
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
