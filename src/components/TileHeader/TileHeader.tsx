import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Icon from '../Icon';
import styles from '../Tile';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const TileHeader = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['tile__header'], className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
