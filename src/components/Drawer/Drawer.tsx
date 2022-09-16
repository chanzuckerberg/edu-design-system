import clsx from 'clsx';
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  KeyboardEvent,
} from 'react';
import { oneByType } from 'react-children-by-type';
import FocusLock from 'react-focus-lock';
import { Portal } from 'react-portal';
import styles from './Drawer.module.css';
import { ESCAPE_KEYCODE } from '../../util/keycodes';
import DrawerBody from '../DrawerBody';
import DrawerFooter from '../DrawerFooter';
import DrawerHeader from '../DrawerHeader';

export type Props = {
  /**
   * HTML id of the helper text used to describe the component after aria-labelledby
   */
  'aria-describedby'?: string;
  /**
   * HTML id of the helper text used to label the drawer component
   */
  'aria-labelledby'?: string;
  /**
   * Child node(s) that can be nested inside component. `DrawerHeader`, `DrawerBody`, and `ModelFooter` are the only permissible children of the Drawer
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the Drawer container component that the Drawer components reside in.
   */
  className?: string;
  /**
   * Toggles the ability to dismiss the Drawer window
   */
  dismissible?: boolean;
  /**
   * CSS class names that can be appended to the Drawer wrapper component that the Drawer window translates in and out of.
   */
  drawerContainerClassName?: string;
  /**
   * Sets the drawer to open or close by default
   */
  isActive?: boolean;
  /**
   * Handler to be called when the drawer is being closed (by ESCAPE / clicking X / clicking outside)
   */
  onClose?: (e?: any) => void;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Drawer} from "@chanzuckerberg/eds";
 * ```
 *
 * A window component that slides from and out of the right side of the screen.
 */
export const Drawer = ({
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
  drawerContainerClassName,
  isActive,
  children,
  dismissible,
  onClose,
  className,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const [activeFocus, setActiveFocus] = useState(isActive);
  const windowRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (isActive) {
      activateFocusTrap();
    } else {
      deactivateFocusTrap();
    }
  }, [isActive]);

  /**
   * Set a flag when this item has mounted
   * Otherwise, portals will render which are not handled well
   * between React and Next.js
   */
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  /**
   * Activate DOM
   * 1) Open the Drawer
   * 2) Set activeFocus state to true
   * 3) This accommodates drawer animation so that it auto receives focus
   */
  function activateFocusTrap() {
    /* 3 */
    setTimeout(() => {
      if (isMountedRef.current) {
        setActiveFocus(true); /* 2 */
      }
    }, 300);
  }

  /**
   * Deactivate DOM
   * 1) Close the drawer
   * 2) Set activeFocus state to false
   */
  function deactivateFocusTrap() {
    setActiveFocus(false); /* 2 */
  }

  /**
   * Handle onClose
   * 1) Close the drawer
   * 2) Run the onClose prop (pass in function) if it exists
   */
  function handleOnClose() {
    deactivateFocusTrap(); /* 1 */

    if (onClose) {
      onClose(); /* 2 */
    }
  }

  /**
   * Handle "click outside"
   * 1) onClick of the area around the drawer window, close the drawer
   */
  useEffect(() => {
    function handleOnClickOutside(e: MouseEvent) {
      if (
        isActive &&
        dismissible &&
        windowRef.current &&
        !windowRef.current.contains(e.target as HTMLElement)
      ) {
        handleOnClose(); /* 1 */
      }
    }
    document.addEventListener('click', handleOnClickOutside);
    return () => {
      document.removeEventListener('click', handleOnClickOutside);
    };
  }, [isActive, windowRef]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const containerClassName = clsx(
    styles['drawer__container'],
    isActive && styles['drawer__container--is-active'],
    drawerContainerClassName,
  );

  const componentClassName = clsx(styles['drawer'], className);

  if (!isMountedRef.current) return null;

  return (
    <Portal>
      <FocusLock disabled={!activeFocus} returnFocus={true}>
        {/**
         * the drawer will probably have buttons inside,
         * We're intentionally not adding role=button for now,
         * may so we're comfortable suppressing this rule
         */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          aria-hidden={!isActive}
          className={containerClassName}
          onKeyDown={handleOnKeyDown}
          ref={ref}
          {...other}
        >
          <article
            aria-describedby={ariaDescribedBy}
            aria-labelledby={ariaLabelledBy}
            aria-modal={isActive}
            className={componentClassName}
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
