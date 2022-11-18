import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
   *
   * Panel is open when set to true. Close when set to false.
   */
  isActive?: boolean;
}

/**
 * `import {NavContainer} from "@chanzuckerberg/eds";`
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
    isActive && [styles['is-active']],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
