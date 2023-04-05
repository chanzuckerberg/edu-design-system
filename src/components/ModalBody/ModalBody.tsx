import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './ModalBody.module.css';

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
   * Toggles focusable variant of the modal. Used to attach a tabIndex for keyboard scrolling
   * and focus indicator outline.
   * Scrolling functionality exists on Modal since the header also needs to scroll.
   * Defaults to false since modal default is not scrollable.
   */
  isFocusable?: boolean;
};

/**
 * Component defines the body of the modal.
 */

export const ModalBody = ({
  children,
  className,
  isFocusable,
  ...other
}: Props) => (
  <div
    className={clsx(styles['modal-body'], className)}
    // This element is tabbable to allow keyboard users to scroll long content.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex={isFocusable ? 0 : undefined}
    {...other}
  >
    {children}
  </div>
);
