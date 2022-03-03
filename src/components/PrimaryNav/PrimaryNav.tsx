import React, { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './PrimaryNav.module.css';
import { nanoid } from 'nanoid';

export interface Props {
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  ariaLabel?: string;
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: any;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryNav: React.FC<Props> = ({
  className,
  children,
  id,
  ariaLabel,
  ...other
}) => {
  const [idVar, setId] = useState();

  useEffect(() => {
    setId(id || nanoid());
  }, []);

  const componentClassName = clsx(styles['primary-nav'], className);

  return (
    <nav
      role="navigation"
      title="Primary navigation"
      id={idVar}
      aria-label={ariaLabel}
      className={componentClassName}
      {...other}
    >
      <ul className={styles['primary-nav__list']}>{children}</ul>
    </nav>
  );
};
