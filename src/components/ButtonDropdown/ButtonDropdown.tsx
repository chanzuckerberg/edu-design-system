import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './ButtonDropdown.module.css';
import { DropdownMenu } from '../..';
import { Button } from '../..';
import { ESCAPE_KEYCODE } from '../../util/keycodes';
import type { ClickableStyleProps } from '../ClickableStyle';

export interface Props {
  buttonAriaLabel?: string;
  /**
   * Makes button full width
   */
  fullWidth?: boolean;
  /**
   * Adds status to the button (e.g. error, success)
   */
  buttonStatus?: ClickableStyleProps<'button'>['status'];
  /**
   * Sets button size
   */
  buttonSize?: ClickableStyleProps<'button'>['size'];
  /**
   * Adds status to the button (e.g. error, success)
   */
  buttonVariant?: ClickableStyleProps<'button'>['variant'];
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Determines type of clickable
   * - **button** The clickable is a clickable button.
   * - **submit** The clickable is a submit clickable (submits form data).
   * - **reset** The clickable is a reset clickable (resets the form-data to its initial values)
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * Child node(s) that can be nested inside `Button`
   */
  buttonChildren?: ReactNode;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Contains the button and the dropdown
 */
export const ButtonDropdown = ({
  buttonChildren,
  fullWidth,
  buttonAriaLabel,
  buttonVariant,
  buttonStatus,
  buttonSize,
  className,
  children,
  ...other
}: Props) => {
  /**
   * Initialize variables and states
   */
  const ref = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [isActiveVar, setIsActive] = React.useState(false);

  /**
   * On component load/updated
   * * 1) Handle click outside panel event handling for both tap and mouse events
   */
  React.useEffect(() => {
    if (isActiveVar) {
      if (!ref.current) return;
      const el = ref.current.querySelector<HTMLElement>('.sparky-c-dropdown');
      if (el) el.focus();
    }
    document.addEventListener('mousedown', handleOnClickOutside, false); /* 1 */
    document.addEventListener(
      'touchstart',
      handleOnClickOutside,
      false,
    ); /* 1 */
    return () => {
      document.removeEventListener(
        'mousedown',
        handleOnClickOutside,
        false,
      ); /* 1 */
      document.removeEventListener(
        'touchstart',
        handleOnClickOutside,
        false,
      ); /* 1 */
    };
  });

  /**
   * Handle click outside function
   * 1) If the event isn't inside to the dropdown button itself or the entire
   * component, then close the panel
   */
  const handleOnClickOutside = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      closePanel(); /* 1 */
    }
  };

  /**
   * Close the panel
   * 1) Set active state to false
   * 2) Return the focus to the button that triggered the dropdown when closed
   */
  function closePanel() {
    setIsActive(false); /* 1 */

    setTimeout(() => {
      if (isActiveVar && buttonRef.current) {
        buttonRef.current.focus(); /* 2 */
      }
    }, 1);
  }

  /**
   * Handle keydown function
   * 1) If the escape key is struck, close the panel
   */
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === ESCAPE_KEYCODE) {
      closePanel();
    }
  }

  /**
   * Toggle accordion panel
   */
  function togglePanel() {
    setIsActive(!isActiveVar);
  }

  const componentClassName = clsx(
    styles['button-dropdown'],
    className,
    isActiveVar && styles['eds-is-active'],
  );
  return (
    <div
      className={componentClassName}
      onKeyDown={(e) => handleKeyDown(e)}
      ref={ref}
      role="presentation"
      {...other}
    >
      <Button
        aria-expanded={isActiveVar ? true : false}
        aria-label={buttonAriaLabel}
        className={styles['button-dropdown__button']}
        fullWidth={fullWidth}
        onClick={togglePanel}
        ref={buttonRef}
        role="button"
        size={buttonSize}
        status={buttonStatus}
        variant={buttonVariant}
      >
        {buttonChildren}
      </Button>
      <DropdownMenu
        className={styles['button-dropdown__dropdown-menu']}
        isActive={isActiveVar}
      >
        {children}
      </DropdownMenu>
    </div>
  );
};
