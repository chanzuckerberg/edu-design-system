import React, { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Breadcrumbs.module.css';
import { nanoid } from 'nanoid';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  ariaLabel?: string;

  /**
   * HTML id for the component
   */
  id?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Breadcrumbs: React.FC<Props> = ({
  className,
  children,
  id,
  ariaLabel = 'breadcrumbs links',
  ...other
}) => {
  const [breadcrumbsId, setBreadcrumbsId] = useState();

  useEffect(() => {
    setBreadcrumbsId(id || nanoid());
  }, []);

  const componentClassName = clsx(styles['breadcrumbs'], className, {});

  return (
    <nav
      aria-label={ariaLabel}
      id={breadcrumbsId}
      className={componentClassName}
      {...other}
    >
      <ul className={styles['breadcrumbs__list']}>{children}</ul>
    </nav>
  );
};
