import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './Breadcrumbs.module.css';

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
export const Breadcrumbs = ({
  className,
  children,
  id,
  ariaLabel = 'breadcrumbs links',
  ...other
}: Props) => {
  const generatedId = useUID();
  const breadcrumbsId = id || generatedId;

  const componentClassName = clsx(styles['breadcrumbs'], className, {});

  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={breadcrumbsId}
      {...other}
    >
      <ul className={styles['breadcrumbs__list']}>{children}</ul>
    </nav>
  );
};
