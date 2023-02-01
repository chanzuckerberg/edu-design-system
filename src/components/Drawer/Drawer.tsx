import clsx from 'clsx';
import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type KeyboardEvent,
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
 * `import {Drawer} from "@chanzuckerberg/eds";`
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
  const isMountedRef = useRef(true);
  const onCloseRef = useRef(onClose);

  /**
   * Update activeFocus to be consistent with isActive.
   */
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

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  /**
   * Open the Drawer and give it focus.
   */
  function activateFocusTrap() {
    /**
     * This accommodates drawer animation so that it auto receives focus
     */
    setTimeout(() => {
      if (isMountedRef.current) {
        setActiveFocus(true);
      }
    }, 300);
  }

  /**
   * Close the drawer and remove focus.
   */
  function deactivateFocusTrap() {
    setActiveFocus(false);
  }

  /**
   * Close the drawer and run the onClose prop (pass in function) if it exists.
   */
  const handleOnClose = useCallback(() => {
    deactivateFocusTrap();

    if (onCloseRef.current) {
      onCloseRef.current();
    }
  }, []);

  /**
   * Handle "click outside"
   */
  useEffect(() => {
    function handleOnClickOutside(e: MouseEvent) {
      if (
        isActive &&
        dismissible &&
        windowRef.current &&
        !windowRef.current.contains(e.target as HTMLElement)
      ) {
        /**
         * onClick of the area around the drawer window, close the drawer
         */
        handleOnClose();
      }
    }
    document.addEventListener('click', handleOnClickOutside);
    return () => {
      document.removeEventListener('click', handleOnClickOutside);
    };
  }, [isActive, dismissible, handleOnClose, windowRef]);

  /**
   * If escape button is struck, close the drawer
   */
  function handleOnKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === ESCAPE_KEYCODE) {
      handleOnClose();
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
      <FocusLock disabled={!activeFocus} returnFocus>
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
