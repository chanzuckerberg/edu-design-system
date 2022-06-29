import clsx from 'clsx';
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { oneByType } from 'react-children-by-type';
import FocusLock from 'react-focus-lock';
import { Portal } from 'react-portal';
import styles from './Drawer.module.css';
import { ESCAPE_KEYCODE } from '../../util/keycodes';
import DrawerBody from '../DrawerBody';
import DrawerFooter from '../DrawerFooter';
import DrawerHeader from '../DrawerHeader';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component after ariaLabelledBy
   */
  ariaDescribedBy?: string;
  /**
   * HTML id of the helper text used to label the drawer component
   */
  ariaLabelledBy?: string;
  /**
   * Child node(s) that can be nested inside component. `DrawerHeader`, `DrawerBody`, and `ModelFooter` are the only permissible children of the Drawer
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Button text for the drawer close button. This is visibly hidden but announced to screen reader users.
   */
  closeButtonText?: string;
  /**
   * Toggles the ability to dismiss the Drawer window
   */
  dismissible?: boolean;
  /**
   * Sets the drawer to open or close by default
   */
  isActive?: boolean;
  /**
   * Toggles the shadowed backdrop of the drawer on or off for flexibility
   */
  showBackdrop?: boolean;
  /**
   * Handler to be called when the drawer is being closed (by ESCAPE / clicking X / clicking outside)
   */
  onClose?: (e?: any) => void;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Drawer} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Drawer = ({
  ariaDescribedBy,
  ariaLabelledBy,
  className,
  isActive,
  children,
  dismissible,
  onClose,
  closeButtonText,
  showBackdrop = false,
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
   *
   * TODO: improve `any` type
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
   * 1) Open the Drawer
   * 2) Set activeFocus state to true
   * 3) This accommodates drawer animation so that it auto receives focus
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
   * 1) Close the drawer
   * 2) Set activeFocus state to false
   */
  function deactivateDOM() {
    document.body.classList.remove(BODY_DISABLED_CLASS);
    setActiveFocus(false); /* 2 */
  }

  /**
   * Handle onClose
   * 1) Close the drawer
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
   * 1) onClick of the area around the drawer window, close the drawer
   */
  function handleOnClickOutside(e: MouseEvent<HTMLElement>) {
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
   * 1) If escape button is struck, close the drawer
   */
  function handleOnKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === ESCAPE_KEYCODE) {
      handleOnClose(); /* 1 */
    }
  }

  const drawerHeader = oneByType(children, DrawerHeader);
  const header = React.Children.map(drawerHeader, (child) => {
    return React.cloneElement(child, {
      onClick: () => handleOnClose(),
      dismissible: dismissible,
    });
  });
  const body = oneByType(children, DrawerBody);
  const footer = oneByType(children, DrawerFooter);

  const componentClassName = clsx(
    styles['drawer'],
    className,
    showBackdrop && styles['drawer--show-backdrop'],
    isActive && styles['eds-is-active'],
  );

  if (!isMounted) return null;

  return (
    <Portal>
      <FocusLock disabled={!activeFocus}>
        {/**
         * the drawer will probably have buttons inside,
         * We're intentionally not adding role=button for now,
         * may so we're comfortable suppressing this rule
         */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          aria-hidden={!isActive}
          className={componentClassName}
          onClick={handleOnClickOutside}
          onKeyDown={handleOnKeyDown}
          ref={ref}
          {...other}
        >
          <article
            aria-describedby={ariaDescribedBy}
            aria-labelledby={ariaLabelledBy}
            aria-modal={isActive}
            className={styles['drawer__window']}
            ref={windowRef}
            role="dialog"
            tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          >
            {header}
            {body}
            {footer}
          </article>
        </div>
      </FocusLock>
    </Portal>
  );
};

Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
Drawer.Header = DrawerHeader;
