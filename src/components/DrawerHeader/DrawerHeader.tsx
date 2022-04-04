import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import Button from '../Button';
import styles from '../Drawer/Drawer.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. `DrawerHeader`, `DrawerBody`, and `DrawerFooter` are the only permissible children of the Drawer
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * onClick function that can be passed in
   */
  onClick?: MouseEventHandler;
  /**
   * Dismissible toggle on the Drawer
   */
  dismissible?: boolean;
  /**
   * Close button text that is visually hidden for accessibility
   */
  closeButtonText?: string;
}

/**
 * Primary UI component for user interaction
 */
export const DrawerHeader = ({
  className,
  onClick,
  closeButtonText = 'Close',
  dismissible,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['drawer__header'], className, {});
  return (
    <header className={componentClassName} {...other}>
      <div className={styles['drawer__header-content']}>{children}</div>
      {dismissible && (
        <Button
          className={styles['drawer__close-button']}
          iconPosition="before"
          iconName="close"
          aria-label={closeButtonText}
          variant="bare"
          onClick={onClick}
        />
      )}
    </header>
  );
};
