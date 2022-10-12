import clsx from 'clsx';
import type {ReactNode} from 'react';
import React from 'react';
import {useUID} from 'react-uid';
import styles from './PrimaryNav.module.css';
import PrimaryNavItem from '../PrimaryNavItem';

export interface Props {
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  'aria-label'?: string;
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
  id?: string;
}

/**
 * ```ts
 * import {PrimaryNav} from "@chanzuckerberg/eds";
 * ```
 *
 * Primary navigation existing in the header and maybe the footer.
 */
export const PrimaryNav = ({
  className,
  children,
  id,
  'aria-label': ariaLabel,
  ...other
}: Props) => {
  const generatedId = useUID();
  const idVar = id || generatedId;

  const componentClassName = clsx(styles['primary-nav'], className);

  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={idVar}
      role="navigation"
      title="Primary navigation"
      {...other}
    >
      <ul className={styles['primary-nav__list']}>{children}</ul>
    </nav>
  );
};

PrimaryNav.Item = PrimaryNavItem;
