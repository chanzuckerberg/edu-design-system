/* TODO: point to internal exports once fully migrated */

import clsx from 'clsx';
import React from 'react';
import styles from './Toast.module.css';
import Button from '../Button';
import Icon from '../Icon';

export type Variant = 'success' | 'alert';

export type Props = {
  /**
   * Additional class names that can be appended to the component, passed in for styling.
   */
  className?: string;
  /**
   * The child node(s) contains the toast message. Note: the toast message is displayed inside a TextPassage, so children can contain raw HTML
   */
  children: React.ReactNode;
  /**
   * The color of the Toast, based on EDS defined colors. Also determines the icon used.
   * Note that the Icon mapping matches the style of Banners.
   */
  variant: Variant;
  /**
   * Callback when Toast is dismissed.
   */
  onDismiss?: () => void;
};

/**
 * ```ts
 * import {Toast} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A toast used to provide information on the state of the page, usually in response to a
 * user action. Ex: The user updates their profile, and a toast pop-up informs them that the
 * data was successfully saved.
 */
export const Toast = ({
  children,
  className,
  variant,
  onDismiss,
  // Allow for additional attributes such as aria roles
  ...other
}: Props) => {
  const componentClassName = clsx(
    className,
    styles['toast'],
    variant === 'success' && styles['toast--success'],
    variant === 'alert' && styles['toast--alert'],
  );
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['toast__content']}>
        <Icon
          className={styles['toast__notification-icon']}
          name={variant === 'success' ? 'check-circle' : 'warning'}
          title={variant}
        />
        <p className={styles['toast__text']}>{children}</p>
      </div>
      {onDismiss && (
        <Button variant="bare" onClick={onDismiss}>
          <Icon
            className={styles['toast__close-icon']}
            name="close"
            title={'dismiss message'}
          />
        </Button>
      )}
    </div>
  );
};

export default Toast;
