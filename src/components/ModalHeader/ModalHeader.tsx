import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import { Button } from '../Button/Button';
import styles from '../Modal/Modal.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
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
   * Dismissible toggle on the Modal
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
export const ModalHeader: React.FC<Props> = ({
  className,
  onClick,
  closeButtonText = 'Close',
  dismissible,
  children,
  ...other
}) => {
  const componentClassName = clsx('modal__header', className, {});
  return (
    <header className={componentClassName} {...other}>
      <div className={styles['modal__header-content']}>{children}</div>
      {dismissible && (
        <Button
          className={styles['modal__close-button']}
          iconPosition="before"
          iconName="x"
          text={closeButtonText}
          hideText={true}
          variant="bare"
          onClick={onClick}
        />
      )}
    </header>
  );
};
