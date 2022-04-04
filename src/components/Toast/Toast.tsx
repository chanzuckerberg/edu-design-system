import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import styles from './Toast.module.css';
import Button from '../Button';
import Icon from '../Icon';

export interface Props {
  /**
   * The child node(s) contains the toast message. Note: the toast message is displayed inside a TextPassage, so children can contain raw HTML
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Close button text
   * 1) Used to change the text of the icon button with various languages
   */
  closeButtonText?: string;
  /**
   * Toggles the ability to dismiss the toast via an close button in the top right of the toast
   */
  dismissible?: boolean;
  /**
   * Name of toast SVG icon. Available options are: toast, error, warning-2, success
   */
  iconName?: string;
  /**
   * The title attribute for the SVG icon in the toast
   */
  iconTitle?: string;
  /**
   * Stylistic variations for the toast type.
   * - **success** - results in a green toast
   * - **warning** - results in a yellow toast
   * - **error** - results in a red toast
   * - **info** - results in a blue toast
   */
  variant?: 'success' | 'warning' | 'error' | 'info' | 'brand';
}

/**
 * Primary UI component for user interaction
 */
export const Toast = ({
  iconTitle,
  className,
  children,
  iconName,
  dismissible = true,
  variant,
  closeButtonText = 'Close',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['toast'],
    className,
    variant === 'success' && styles['toast--success'],
    variant === 'warning' && styles['toast--warning'],
    variant === 'error' && styles['toast--error'],
    variant === 'brand' && styles['toast--brand'],
  );
  const [dismissed, setDismissed] = useState(false);

  function onDismiss(e: any) {
    e.preventDefault();
    setDismissed(true);
  }
  return dismissed ? null : (
    <div className={componentClassName} role="alert" {...other}>
      {iconName && (
        <Icon
          name={iconName}
          title={iconTitle}
          className={styles['toast__icon']}
          purpose="informative"
        />
      )}
      <div className={styles['toast__body']}>{children}</div>

      {dismissible && (
        <Button
          className={styles['toast__close-btn']}
          variant="bare"
          aria-label={closeButtonText}
          iconName="close"
          iconPosition="after"
          onClick={(e: any) => onDismiss(e)}
        />
      )}
    </div>
  );
};
