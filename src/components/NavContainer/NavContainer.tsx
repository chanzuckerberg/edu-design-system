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
}

/**
 * Primary UI component for user interaction
 */
export const NavContainer: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx(styles['nav-container'], className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
