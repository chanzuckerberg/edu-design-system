import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DefinitionListItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const DefinitionListItem = ({
  className,
  children,
  title,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['definition-list-item'],
    className,
    {},
  );
  return (
    <div className={componentClassName} {...other}>
      <dt className={styles['definition-list-item__term']}>{title}</dt>
      <dd className={styles['definition-list-item__description']}>
        {children}
      </dd>
    </div>
  );
};
