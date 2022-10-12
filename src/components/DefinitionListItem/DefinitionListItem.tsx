import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from '../DefinitionList/DefinitionList.module.css';

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
   * Term of the definition list item
   */
  title?: string;
}

/**
 * ```ts
 * import {DefinitionListItem} from "@chanzuckerberg/eds";
 * ```
 * DefinitionListItem is the component to show the definition term (`dt`)
 * and a definition description (`dd`)
 */
export const DefinitionListItem = ({
  className,
  children,
  title,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['definition-list__item'], className);
  return (
    <div className={componentClassName} {...other}>
      <dt className={styles['definition-list-item__term']}>{title}</dt>
      <dd className={styles['definition-list-item__description']}>
        {children}
      </dd>
    </div>
  );
};
