import clsx from 'clsx';
import React from 'react';
import styles from './Toast.module.css';
import Button from '../Button';
import Icon from '../Icon';

export type Variant = 'success' | 'error';

export type Props = {
  /**
   * Additional class names that can be appended to the component, passed in for styling.
   */
  className?: string;
  /**
   * The child node(s) contains the toast message.
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
 * `import {Toast} from "@chanzuckerberg/eds";`
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
    styles['toast'],
    variant === 'success' && styles['toast--success'],
    variant === 'error' && styles['toast--error'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['toast__content']}>
        <Icon
          name={variant === 'success' ? 'check-circle' : 'warning'}
          purpose="informative"
          size="1.5rem"
          title={variant}
        />
        <p className={styles['toast__text']}>{children}</p>
      </div>
      {onDismiss && (
        <Button onClick={onDismiss} status={variant} variant="icon">
          <Icon
            name="close"
            purpose="informative"
            size="2rem"
            title="dismiss message"
          />
        </Button>
      )}
    </div>
  );
};
