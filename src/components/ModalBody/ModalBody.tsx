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

export const ModalBody = (props: Props) => {
  return (
    // This element is tabbable to allow keyboard users to scroll long content.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div className={clsx(styles['body'], props.className)} tabIndex={0}>
      {props.children}
    </div>
  );
};
