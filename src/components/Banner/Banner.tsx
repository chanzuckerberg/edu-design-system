import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import styles from './Banner.module.css';
import Button from '../Button';
import Icon from '../Icon';

export interface Props {
  /**
   * The child node(s) contains the banner message. Note: the banner message is displayed inside a TextPassage, so children can contain raw HTML
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  action?: React.ReactNode;
  /**
   * Close button text
   * 1) Used to change the text of the icon button with various languages
   */
  closeButtonText?: string;
  /**
   * Toggles the ability to dismiss the banner via an close button in the top right of the banner
   */
  dismissible?: boolean;
  /**
   * Name of banner SVG icon. Available options are: banner, error, warning-2, success
   */
  iconName?: string;
  /**
   * The title attribute for the SVG icon in the banner
   */
  iconTitle?: string;
  /**
   * Controls the layout of the banner
   * - **vertical** renders the banner content center aligned and stacked
   */
  orientation?: 'vertical';
  /**
   * Optional heading text for the banner that appears above banner body message
   */
  title?: string;
  /**
   * Stylistic variations for the banner type.
   * - **success** - results in a green banner
   * - **warning** - results in a yellow banner
   * - **error** - results in a red banner
   * - **info** - results in a blue banner
   */
  variant?: 'success' | 'warning' | 'error' | 'info' | 'brand';
}

/**
 * Primary UI component for user interaction
 */
export const Banner = ({
  iconTitle,
  className,
  title,
  children,
  iconName,
  dismissible,
  orientation,
  variant,
  closeButtonText = 'Close',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['banner'],
    variant === 'success' && styles['banner--success'],
    variant === 'warning' && styles['banner--warning'],
    variant === 'error' && styles['banner--error'],
    variant === 'brand' && styles['banner--brand'],
    orientation === 'vertical' && styles['banner--vertical'],
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
          className={styles['banner__icon']}
          name={iconName}
          title={iconTitle}
        />
      )}
      <div className={styles['banner__body']}>{children}</div>

      {dismissible && (
        <Button
          className={styles['banner__close-btn']}
          variant="bare"
          aria-label={closeButtonText}
          iconName="x"
          iconPosition="after"
          onClick={(e: any) => onDismiss(e)}
          text={closeButtonText}
        />
      )}
    </div>
  );
};
