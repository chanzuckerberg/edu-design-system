import clsx from 'clsx';
import React from 'react';
import styles from './BreadcrumbsItem.module.css';
import Icon from '../Icon';

type Props = {
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
  /**
   * Back button variant for mobile.
   */
  variant?: 'back';
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {BreadcrumbsItem} from "@chanzuckerberg/eds";
 * ```
 *
 * A single breadcrumb subcomponent, to be used in the Breadcrumbs component.
 */
export const BreadcrumbsItem = ({
  className,
  href,
  text,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['breadcrumbs__item'],
    variant === 'back' && styles['breadcrumbs__item-back'],
    className,
  );
  return (
    <li className={componentClassName} {...other}>
      <a className={styles['breadcrumbs__link']} href={href}>
        {variant === 'back' ? (
          <Icon
            className={styles['breadcrumbs__back-icon']}
            name="chevron-left"
            purpose="informative"
            title="back"
          />
        ) : (
          text
        )}
      </a>
      <span aria-hidden className={styles['breadcrumbs__icon']}>
        /
      </span>
    </li>
  );
};
