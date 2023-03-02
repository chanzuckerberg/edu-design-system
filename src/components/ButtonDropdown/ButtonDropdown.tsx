import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { DropdownMenu } from '../..';
import type { ClickableStyleProps } from '../ClickableStyle';
import styles from './ButtonDropdown.module.css';

export interface Props {
  /**
   * Aria label to be attacehd to the dropdown trigger button.
   */
  buttonAriaLabel?: string;
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
   * Prop used to pass in `DropdownMenuItem` child components
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component to further style the dropdown menu.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Prop used to pass in the dropdown menu trigger (dropdownTrigger={<Button />}). This
   * allows for maximum flexbility with extending the button and passing in props from the
   * outside
   */
  dropdownMenuTrigger?: ReactNode;
  /**
   * Makes button full width
   */
  fullWidth?: boolean;
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
}

/**
 * The ButtonDropdown component is deprecated and will be removed in a future release.
 *
 * `import {ButtonDropdown} from "@chanzuckerberg/eds";`
 *
 * Contains the button and the dropdown.
 *
 * @deprecated
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
   */
  // FIXME
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  React.useEffect(() => {
    if (isActiveVar) {
      if (!ref.current) return;
      const el = ref.current.querySelector<HTMLElement>('.sparky-c-dropdown');
      if (el) el.focus();
    }
    /**
     * Handle click outside panel event handling for both tap and mouse events
     */
    document.addEventListener('mousedown', handleOnClickOutside, false);
    document.addEventListener('touchstart', handleOnClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleOnClickOutside, false);
      document.removeEventListener('touchstart', handleOnClickOutside, false);
    };
  });

  /**
   * Handle click outside function
   */
  const handleOnClickOutside = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      /**
       * If the event isn't inside to the dropdown button itself or the entire
       * component, then close the panel
       */
      closePanel();
    }
  };

  /**
   * Close the panel
   */
  function closePanel() {
    /**
     * Set active state to false
     */
    setIsActive(false);

    if (isActiveVar && buttonRef.current) {
      /**
       * Return the focus to the button that triggered the dropdown when closed
       */
      buttonRef.current.focus();
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
    (child: any) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        // @ts-expect-error "No overload matches this call" error
        return React.cloneElement<Props>(child, {
          ref: buttonRef,
          onClick: togglePanel,
          'aria-expanded': isActiveVar,
          'aria-haspopup': 'menu',
        });
      }
    },
  );

  const componentClassName = clsx(
    styles['button-dropdown'],
    isActiveVar && styles['eds-is-active'],
    position === 'top-left' && styles['button-dropdown--top-left'],
    position === 'top-right' && styles['button-dropdown--top-right'],
    position === 'bottom-right' && styles['button-dropdown--bottom-right'],
  );

  const dropdownMenuClassName = clsx(
    styles['button-dropdown__dropdown-menu'],
    className,
  );

  return (
    <div className={componentClassName} ref={ref} {...other}>
      {dropdownMenuTriggerWithProps}
      <DropdownMenu
        className={dropdownMenuClassName}
        closeDropdownMenu={closePanel}
        isActive={isActiveVar}
      >
        {children}
      </DropdownMenu>
    </div>
  );
};
