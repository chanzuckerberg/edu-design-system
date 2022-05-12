import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './UtilityNav.module.css';
import UtilityNavItem from '../UtilityNavItem';

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
  id?: string;
  /**
   * Link text string
   */
  text?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Utility navigation existing in the header and maybe the footer.
 */
export const UtilityNav = ({
  className,
  children,
  id,
  ariaLabel,
  ...other
}: Props) => {
  const generatedId = useUID();
  const idVar = id || generatedId;

  const componentClassName = clsx(styles['utility-nav'], className);

  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={idVar}
      {...other}
    >
      <ul className={styles['utility-nav__list']}>{children}</ul>
    </nav>
  );
};

UtilityNav.Item = UtilityNavItem;
