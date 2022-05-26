import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {ModalHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const ModalHeader = ({
  className,
  onClick,
  closeButtonText = 'Close',
  dismissible,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx('modal__header', className, {});
  return (
    <header className={componentClassName} {...other}>
      <div className={styles['modal__header-content']}>{children}</div>
      {dismissible && (
        <Button
          className={styles['modal__close-button']}
          onClick={onClick}
          variant="icon"
        >
          <Icon name="close" purpose="informative" title={closeButtonText} />
        </Button>
      )}
    </header>
  );
};
