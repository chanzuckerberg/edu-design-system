import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './ModalFooter.module.css';

export type Props = {
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles sticky variant of the footer. If modal is scrollable, footer is sticky.
   * Defaults to false since modal default is not scrollable.
   * Also adds border and shadow to indicate sticky status.
   */
  isSticky?: boolean;
};

export const ModalFooter = ({
  children,
  className,
  isSticky = false,
  ...other
}: Props) => {
  return (
    <div
      className={clsx(
        styles['modal-footer'],
        isSticky && styles['modal-footer--sticky'],
        className,
      )}
      {...other}
    >
      {children}
    </div>
  );
};
