/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from 'clsx';
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './ShowHide.module.css';
import { ESCAPE_KEYCODE } from '../../util/keycodes';

export interface Props {
  /**
   * Alignment of the dropdown panel. Default is left.
   * - **right** aligns the dropdown panel to the rightmost edge of the component
   * - **top-right** aligns the dropdown panel above the button and to the rightmost edge of the component
   * - **top left** aligns the dropdown panel above the button and to the leftmost edge of the component
   */
  align?: 'right' | 'top-right' | 'top-left';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Optional text label (e.g. "Hide") for when component is toggled open
   */
  closeText?: string;
  /**
   * Text for trigger button (e.g. "Show")
   */
  text?: string;
  /**
   * Slot for the trigger component. This must always be a `button` element
   * (whether the formal `Button` React component or another `button` element)
   */
  trigger?: any;
}

/**
 * Primary UI component for user interaction
 */
export const ShowHide = ({
  align,
  className,
  text,
  closeText,
  trigger,
  children,
  ...other
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /**
   * Handle trigger click event
   */
  const handleClick = () => setIsActive(!isActive);

  /**
   * UseEffect lifecycle hook
   */
  useEffect(() => {
    document.addEventListener('mousedown', handleOnClickOutside, false);
    document.addEventListener('touchstart', handleOnClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleOnClickOutside, false);
      document.removeEventListener('touchstart', handleOnClickOutside, false);
    };
  }, []);

  /**
   * Handle click outside the component
   * 1) Close the show hide panel on click outside
   */
  const handleOnClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as HTMLElement)
    ) {
      setIsActive(false); /* 1 */
    }
  };

  /**
   * Handle onKeyDown
   * 1) If escape button is struck, close the show hide contents
   */
  function handleOnKeyDown(e: any) {
    if (e.code === ESCAPE_KEYCODE) {
      setIsActive(false); /* 1 */
    }
  }

  const componentClassName = clsx(
    styles['show-hide'],
    className,
    align === 'right' && styles['show-hide--align-right'],
    align === 'top-right' && styles['show-hide--align-top-right'],
    align === 'top-left' && styles['show-hide--align-top-left'],
    isActive && styles['eds-is-active'],
  );

  /**
   * Clone child in `trigger` slot and apply necessary functionality
   * for show/hide behavior
   */
  const triggerElement = React.cloneElement(trigger, {
    'aria-expanded': isActive ? 'true' : 'false',
    className: 'show-hide__trigger',
    onClick: handleClick,
    text: isActive ? closeText || text : text,
  });

  return (
    <div
      className={componentClassName}
      ref={dropdownRef}
      {...other}
      onKeyDown={handleOnKeyDown}
    >
      {triggerElement}
      <div className={styles['show-hide__panel']} hidden={!isActive}>
        {children}
      </div>
    </div>
  );
};
