import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Tile/Tile.module.css';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TileHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const TileHeader = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['tile__header'], className, {});
  return (
    <header className={componentClassName} {...other}>
      {children}
    </header>
  );
};
