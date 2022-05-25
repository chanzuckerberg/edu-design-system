import clsx from 'clsx';
import React, { ReactNode, SyntheticEvent } from 'react';
import styles from './ButtonDropdown.module.css';
import { DropdownMenu } from '../..';
import { ESCAPE_KEYCODE } from '../../util/keycodes';
import type { ClickableStyleProps } from '../ClickableStyle';

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
  relatedTarget: EventTarget | null;
  target: EventTarget & T;
}

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
   * - default renders a dropdown menu to the bottom left of the button
   * - **top-left** renders a dropdown menu to the top left of the button
   * - **top-right** renders a dropdown menu to the top right of the button
   * - **bottom-right** renders a dropdown menu to the bottom right of the button
   */
  position?: 'top-left' | 'top-right' | 'bottom-right';
  /**
   * Determines type of clickable
   * - **button** The clickable is a clickable button.
   * - **submit** The clickable is a submit clickable (submits form data).
   * - **reset** The clickable is a reset clickable (resets the form-data to its initial values)
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * Prop used to pass in the dropdown menu trigger (dropdownTrigger={<Button />}). This
   * allows for maximum flexbility with extending the button and passing in props from the
   * outside
   */
  dropdownMenuTrigger?: ReactNode;
  /**
   * Prop used to pass in `DropdownMenuItem` child components
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
  fullWidth,
  buttonAriaLabel,
  buttonVariant,
  buttonStatus,
  buttonSize,
  className,
  position,
  children,
  dropdownMenuTrigger,
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

  const dropdownMenuTriggerWithProps = React.Children.map(
    dropdownMenuTrigger,
    // TODO: improve `any` type
    (child: any, i: number) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error TODO: fix "No overload matches this call" error
        return React.cloneElement<Props>(child, {
          ref: buttonRef,
          onClick: togglePanel,
          'aria-expanded': isActiveVar,
        });
      }
    },
  );

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
      if (isActiveVar) {
        closePanel();
      }
    }
  };

  const componentClassName = clsx(
    styles['button-dropdown'],
    className,
    isActiveVar && styles['eds-is-active'],
    position === 'top-left' && styles['button-dropdown--top-left'],
    position === 'top-right' && styles['button-dropdown--top-right'],
    position === 'bottom-right' && styles['button-dropdown--bottom-right'],
  );
  return (
    <div
      className={componentClassName}
      /* TODO: Figure out role that allows blur to entire menu
      /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
      onBlur={handleBlur}
      ref={ref}
      {...other}
    >
      {dropdownMenuTriggerWithProps}
      <DropdownMenu
        className={styles['button-dropdown__dropdown-menu']}
        handleOnKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e)}
        isActive={isActiveVar}
      >
        {children}
      </DropdownMenu>
    </div>
  );
};
