import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Modal/Modal.module.css';

type Props = {
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

export const ModalFooter = (props: Props) => {
  return (
    <div className={clsx(styles['footer'], props.className)}>
      {props.children}
    </div>
  );
};
