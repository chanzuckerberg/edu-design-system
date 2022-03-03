import React, { ReactNode } from 'react';
import clsx from 'clsx';
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
 * Primary UI component for user interaction
 */
export const DefinitionListItem: React.FC<Props> = ({
  className,
  children,
  title,
  ...other
}) => {
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
