import clsx from 'clsx';
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { oneByType } from 'react-children-by-type';
import FocusLock from 'react-focus-lock';
import styles from './Popover.module.css';
import { ESCAPE_KEYCODE } from '../../util/keycodes';
import PopoverBody from '../PopoverBody';
import PopoverFooter from '../PopoverFooter';
import PopoverHeader from '../PopoverHeader';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component after ariaLabelledBy
   */
  ariaDescribedBy?: string;
  /**
   * HTML id of the helper text used to label the popover component
   */
  ariaLabelledBy?: string;
  /**
   * Child node(s) that can be nested inside component. `PopoverHeader`, `PopoverBody`, and `ModelFooter` are the only permissible children of the Popover
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Button text for the popover close button. This is visibly hidden but announced to screen reader users.
   */
  closeButtonText?: string;
  /**
   * Sets the popover to open or close by default
   */
  isActive?: boolean;
  /**
   * Handler to be called when the popover is being closed (by ESCAPE / clicking X / clicking outside)
   */
  onClose?: (e: MouseEvent | KeyboardEvent) => void;
  /**
   * Available _stylistic_ variations available for the Button component
   */
  position?: 'top-left' | 'bottom-left' | 'bottom-right';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Popover} from "@chanzuckerberg/eds";
 * ```
 *
 * Content container that pops out over other content.
 */
export const Popover = ({
  ariaDescribedBy,
  ariaLabelledBy,
  className,
  isActive,
  children,
  onClose,
  closeButtonText,
  position,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const [isMounted, setIsMounted] = useState(false);
  const [activeFocus, setActiveFocus] = useState(isActive || false);
  const ref = useRef<HTMLElement | null>(null);
  /**
   * Get previous prop
   * 1) This is used to compare the previous prop to the current prop
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
   * 1) Open the Popover
   * 2) Set activeFocus state to true
   * 3) This accommodates popover animation so that it auto receives focus
   */
  function activateDOM() {
    /* 3 */
    setTimeout(() => {
      setActiveFocus(true); /* 2 */
    }, 300);
  }

  /**
   * Deactivate DOM
   * 1) Close the popover
   * 2) Set activeFocus state to false
   */
  function deactivateDOM() {
    setActiveFocus(false); /* 2 */
  }

  /**
   * Handle onClose
   * 1) Close the popover
   * 2) Run the onClose prop (pass in function) if it exists
   */
  function handleOnClose(e: KeyboardEvent | MouseEvent) {
    deactivateDOM(); /* 1 */

    if (onClose) {
      onClose(e); /* 2 */
    }
  }

  /**
   * Handle onKeyDown
   * 1) If escape button is struck, close the popover
   */
  const handleOnKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === ESCAPE_KEYCODE) {
      handleOnClose(e); /* 1 */
    }
  };

  const popoverHeader = oneByType(children, PopoverHeader);
  const header = React.Children.map(popoverHeader, (child) => {
    return React.cloneElement(child, {
      onClick: (e) => handleOnClose(e),
    });
  });
  const body = oneByType(children, PopoverBody);
  const footer = oneByType(children, PopoverFooter);

  const componentClassName = clsx(
    styles['popover'],
    className,
    isActive && [styles['eds-is-active']],
    position === 'top-left' && [styles['popover--top-left']],
    position === 'bottom-left' && [styles['popover--bottom-left']],
    position === 'bottom-right' && [styles['popover--bottom-right']],
  );

  if (!isMounted) return null;

  return (
    <FocusLock disabled={!activeFocus}>
      {/**
       * We're intentionally adding keyboard interaction to an article element for better accessibility,
       * so we're comfortable suppressing this rule
       */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <article
        aria-describedby={ariaDescribedBy}
        aria-hidden={!isActive}
        aria-labelledby={ariaLabelledBy}
        className={componentClassName}
        onKeyDown={(e) => handleOnKeyDown(e)}
        ref={ref}
        role="dialog"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        {...other}
      >
        <div className={styles['popover__content']}>
          {header}
          {body}
          {footer}
        </div>
        <div className={styles['popover__arrow']}></div>
      </article>
    </FocusLock>
  );
};

Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
Popover.Header = PopoverHeader;
