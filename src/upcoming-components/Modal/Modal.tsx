/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from 'clsx';
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { oneByType } from 'react-children-by-type';
import FocusLock from 'react-focus-lock';
import { Portal } from 'react-portal';
import styles from './Modal.module.css';
import { ESCAPE_KEYCODE } from '../../util/keycodes';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component after ariaLabelledBy
   */
  ariaDescribedBy?: string;
  /**
   * HTML id of the helper text used to label the modal component
   */
  ariaLabelledBy?: string;
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Button text for the modal close button. This is visibly hidden but announced to screen reader users.
   */
  closeButtonText?: string;
  /**
   * Toggles the ability to dismiss the Modal window
   */
  dismissible?: boolean;
  /**
   * Sets the modal to open or close by default
   */
  isActive?: boolean;
  /**
   * Handler to be called when the modal is being closed (by ESCAPE / clicking X / clicking outside)
   */
  onClose?: (e?: any) => void;
  /**
   * Size variations
   * - **sm** results in a modal that is narrower than the default
   * - **lg** results in a modal that is wider than the default
   * - **xl** results in a modal that is wider than the default
   */
  size?: 'sm' | 'lg' | 'xl';
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  ariaDescribedBy,
  ariaLabelledBy,
  className,
  isActive,
  children,
  dismissible,
  onClose,
  closeButtonText,
  size,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const [isMounted, setIsMounted] = useState(false);
  const BODY_DISABLED_CLASS = `eds-body-is-disabled`;
  const [activeFocus, setActiveFocus] = useState(isActive || false);
  const windowRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Get previous prop
   * 1) This is used to compare the previous prop to the current prop
   */
  function usePrevious(isActive: any) {
    useEffect(() => {
      ref.current = isActive;
    });
    return ref.current;
  }

  /**
   * Use effect
   * 1) Set prevIsActive to previous isActive prop
   * 2) If prevIsActive is defined and previous isActive prop is not equal
   * to current isActive prop, toggle state
   */
  const prevIsActive = usePrevious(isActive); /* 1 */
  useEffect(() => {
    if (prevIsActive !== undefined || null) {
      if (isActive) {
        activateDOM();
      } else {
        deactivateDOM();
      }
    }
  });

  /**
   * Set a flag when this item has mounted
   * Otherwise, portals will render which are not handled well
   * between React and Next.js
   */
  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  /**
   * Activate DOM
   * 1) Open the Modal
   * 2) Set activeFocus state to true
   * 3) This accommodates modal animation so that it auto receives focus
   */
  function activateDOM() {
    document.body.classList.add(BODY_DISABLED_CLASS);

    /* 3 */
    setTimeout(() => {
      setActiveFocus(true); /* 2 */
    }, 300);
  }

  /**
   * Deactivate DOM
   * 1) Close the modal
   * 2) Set activeFocus state to false
   */
  function deactivateDOM() {
    document.body.classList.remove(BODY_DISABLED_CLASS);
    setActiveFocus(false); /* 2 */
  }

  /**
   * Handle onClose
   * 1) Close the modal
   * 2) Run the onClose prop (pass in function) if it exists
   */
  function handleOnClose() {
    deactivateDOM(); /* 1 */

    if (onClose) {
      onClose(); /* 2 */
    }
  }

  /**
   * Handle "click outside"
   * 1) onClick of the area around the modal window, close the modal
   */
  function handleOnClickOutside(e: any) {
    if (
      isActive &&
      dismissible &&
      windowRef.current &&
      !windowRef.current.contains(e.target as HTMLElement)
    ) {
      handleOnClose(); /* 1 */
    }
  }

  /**
   * Handle onKeyDown
   * 1) If escape button is struck, close the modal
   */
  function handleOnKeyDown(e: any) {
    if (e.code === ESCAPE_KEYCODE) {
      handleOnClose(); /* 1 */
    }
  }

  const modalHeader = oneByType(children, ModalHeader);
  const header = React.Children.map(modalHeader, (child) => {
    return React.cloneElement(child, {
      onClick: () => handleOnClose(),
      dismissible: dismissible,
    });
  });
  const body = oneByType(children, ModalBody);
  const footer = oneByType(children, ModalFooter);

  const componentClassName = clsx(
    styles['modal'],
    className,
    size === 'sm' && styles['modal--sm'],
    size === 'lg' && styles['modal--lg'],
    isActive && styles['eds-is-active'],
  );

  if (!isMounted) return null;

  return (
    <Portal>
      <FocusLock disabled={!activeFocus}>
        <div
          aria-hidden={!isActive}
          className={componentClassName}
          onClick={(e) => handleOnClickOutside(e)}
          onKeyDown={(e) => handleOnKeyDown(e)}
          ref={ref}
          {...other}
        >
          <article
            aria-describedby={ariaDescribedBy}
            aria-labelledby={ariaLabelledBy}
            aria-modal={isActive}
            className={styles['modal__window']}
            ref={windowRef}
            role="dialog"
            tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          >
            <div className={styles['modal__content']}>
              {header}
              {body}
              {footer}
            </div>
          </article>
        </div>
      </FocusLock>
    </Portal>
  );
};

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
