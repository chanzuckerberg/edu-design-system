import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {ModalFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const ModalFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['modal__footer'], className, {});
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};
