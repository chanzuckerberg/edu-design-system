import clsx from 'clsx';
import React from 'react';
import styles from '../Breadcrumbs/Breadcrumbs.module.css';
import Icon from '../Icon';

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
 * Primary UI component for user interaction
 */
export const BreadcrumbsItem = ({ className, text, href, ...other }: Props) => {
  const componentClassName = clsx(styles['breadcrumbs__item'], className, {});
  return (
    <li className={componentClassName} {...other}>
      <a className={styles['breadcrumbs__link']} href={href}>
        {text}
      </a>
      <Icon
        className={styles['breadcrumbs__icon']}
        name="chevron-right"
        aria-hidden={true}
        focusable={false}
      />
    </li>
  );
};
