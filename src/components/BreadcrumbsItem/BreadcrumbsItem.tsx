import clsx from 'clsx';
import React from 'react';
import styles from './BreadcrumbsItem.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL for the breadcrumbs item
   */
  href?: string;
  /**
   * Breadcrumbs item text
   */
  text?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {BreadcrumbsItem} from "@chanzuckerberg/eds";
 * ```
 *
 * A single breadcrumb, to be used in the Breadcrumbs component.
 */
export const BreadcrumbsItem = ({ className, text, href, ...other }: Props) => {
  const componentClassName = clsx(styles['breadcrumbs__item'], className, {});
  return (
    <li className={componentClassName} {...other}>
      <a className={styles['breadcrumbs__link']} href={href}>
        {text}
      </a>
      <span aria-hidden className={styles['breadcrumbs__icon']}>
        /
      </span>
    </li>
  );
};
