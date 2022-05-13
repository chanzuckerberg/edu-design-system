import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './NavContainer.module.css';

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
   * is Active
   * 1) Panel is open when set to true. Close when set to false
   */
  isActive?: boolean;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Container that houses navigation to be toggled on and off on small screens.
 */
export const NavContainer = ({
  children,
  className,
  isActive,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['nav-container'],
    className,
    isActive && [styles['is-active']],
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
