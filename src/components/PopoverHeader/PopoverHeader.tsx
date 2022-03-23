import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import { Button } from '../Button/Button';
import styles from '../Popover/Popover.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. `PopoverHeader`, `PopoverBody`, and `ModelFooter` are the only permissible children of the Popover
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
   * Dismissible toggle on the Popover
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
export const PopoverHeader: React.FC<Props> = ({
  className,
  onClick,
  closeButtonText = 'Close',
  dismissible,
  children,
  ...other
}) => {
  const componentClassName = clsx('popover__header', className, {});
  return (
    <header className={componentClassName} {...other}>
      <div className={styles['popover__header-content']}>{children}</div>
      {dismissible && (
        <Button
          className={styles['popover__close-button']}
          iconPosition="before"
          iconName="x"
          aria-label={closeButtonText}
          variant="bare"
          onClick={onClick}
        />
      )}
    </header>
  );
};
