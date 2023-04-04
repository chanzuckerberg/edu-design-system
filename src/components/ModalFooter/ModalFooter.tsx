import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './ModalFooter.module.css';

export type Props = {
  /**
   * Child node(s) to place inside the Modal footer.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles sticky variant of the footer. If modal is scrollable, footer is sticky.
   * Also adds border and shadow to indicate sticky status.
   * Defaults to false since modal default is not scrollable.
   */
  isSticky?: boolean;
};

/**
 * Component defines the Footer section of the modal.
 */

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
