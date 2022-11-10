import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionButton.module.css';
import { ENTER_KEYCODE, SPACEBAR_KEYCODE } from '../../util/keycodes';
import { AccordionContext } from '../Accordion';
import Button from '../Button';
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
   * Callback called when accordion is closed.
   */
  onClose?: () => void;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * The button subcomponent that houses the heading text and open indicator icon for the EDS Accordion component.
 */
export const AccordionButton = ({
  children,
  className,
  onClose,
  ...other
}: Props) => {
  const { hasOutline, variant } = useContext(AccordionContext);

  const componentClassName = clsx(
    styles['accordion-button'],
    variant === 'compact' && styles['accordion-button--compact'],
    hasOutline && styles['accordion-button--outline'],
    className,
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
          {children}
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
