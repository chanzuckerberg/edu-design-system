import React, { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './UtilityNav.module.css';
import { nanoid } from 'nanoid';

export interface Props {
  /**
   * aria-label for `nav` element to describe navigation to screen readers
   */
  ariaLabel?: string;
  /**
   * Child node(s) that can be nested inside component
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
  /**
   * Link text string
   */
  text?: string;
}

/**
 * Primary UI component for user interaction
 */
export const UtilityNav: React.FC<Props> = ({
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

  const componentClassName = clsx(styles['utility-nav'], className);

  return (
    <nav
      id={idVar}
      aria-label={ariaLabel}
      className={componentClassName}
      {...other}
    >
      <ul className={styles['utility-nav__list']}>{children}</ul>
    </nav>
  );
};
