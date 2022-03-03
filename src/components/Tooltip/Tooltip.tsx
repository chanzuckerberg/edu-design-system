import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  MutableRefObject,
} from 'react';
import clsx from 'clsx';
import styles from './Tooltip.module.css';
import { Button } from '../Button/Button';
import { ESCAPE_KEYCODE, TAB_KEYCODE } from '../../util/keycodes';

export interface Props {
  /**
   * Alignment variations
   * - **right** yields a tooltip that appears to the right of the trigger
   * - **below** yields a tooltip that appears below the trigger
   * - **left** yields a tooltip that appears to the left of the trigger
   */
  align?: 'right' | 'below' | 'left';
  /**
   * The visually-hidden button text for the tooltip trigger button
   */
  buttonText?: string;
  /**
   * Child node(s) that can be nested inside component. This gets displayed inside a `TextPassage` inside the tooltip
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Tooltip: React.FC<Props> = ({
  className,
  children,
  align,
  buttonText,
  ...other
}) => {
  /**
   * Initialize variables and states
   */
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const [isActive, setIsActive] = useState(false);

  /**
   * Toggle isActive state on click
   */
  function onClick(e: any) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (isActive) {
      ref.current.focus();
    }
    document.addEventListener('mousedown', handleOnClickOutside, false);
    document.addEventListener('touchstart', handleOnClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleOnClickOutside, false);
      document.removeEventListener('touchstart', handleOnClickOutside, false);
    };
  });

  const handleOnClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as HTMLElement) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as HTMLElement)
    ) {
      setIsActive(false);
      setTimeout(() => {
        if (isActive) {
          buttonRef.current.focus();
        }
      }, 1);
    }
  };

  /**
   * Handle Keydown
   * 1) Remove isActive state and focus on the tooltip button
   */
  function onKeyDown(e: any) {
    if (e.code === ESCAPE_KEYCODE || e.code === TAB_KEYCODE) {
      setIsActive(false);
      setTimeout(() => {
        if (isActive) {
          buttonRef.current.focus();
        }
      }, 1);
    }
  }
  const componentClassName = clsx(styles['tooltip'], className, {
    [styles['eds-is-active']]: isActive,
    [styles['tooltip--right']]: align === 'right',
    [styles['tooltip--below']]: align === 'below',
    [styles['tooltip--left']]: align === 'left',
  });

  return (
    <div className={componentClassName} {...other}>
      <span className={styles['tooltip__trigger']}>
        <Button
          variant="bare"
          hideText
          iconPosition="after"
          iconName="question-mark-circle"
          aria-label={buttonText}
          text={buttonText}
          type="button"
          onClick={onClick}
          buttonRef={buttonRef}
        />
      </span>
      <span
        ref={ref}
        className={styles['tooltip__content']}
        aria-hidden={!isActive}
        tabIndex={isActive ? 0 : -1}
        onKeyDown={onKeyDown}
      >
        {children}
      </span>
    </div>
  );
};
