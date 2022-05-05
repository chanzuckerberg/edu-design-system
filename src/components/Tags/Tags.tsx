import clsx from 'clsx';
import React from 'react';
import styles from './Tags.module.css';
import Tag from '../Tag';

export interface Props {
  /**
   * Tags to be nested inside component
   */
  tags: Array<typeof Tag>;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * List of Tag components
 */
export const Tags = ({ tags, className, ...other }: Props) => {
  const componentClassName = clsx(styles['tags'], className, {});
  return (
    <ul className={componentClassName} {...other}>
      {tags.map((tag, index) => {
        return <li key={`tag-${index}`}>{tag}</li>;
      })}
    </ul>
  );
};
