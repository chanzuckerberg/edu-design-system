import clsx from 'clsx';
import React from 'react';
import { EdsThemeColorIconNeutralStrong } from '../../tokens-dist/ts/colors';
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
      <Icon
        className={styles['breadcrumbs__icon']}
        color={EdsThemeColorIconNeutralStrong}
        name="chevron-right"
        purpose="decorative"
        size="0.75rem"
      />
    </li>
  );
};
