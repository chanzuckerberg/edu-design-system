import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Tile.module.css';

export interface Props {
  /* Child node(s) that can be nested inside component */
  children: ReactNode;
  /* CSS class names that can be appended to the component. */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Tile} from "@chanzuckerberg/eds";
 * ```
 *
 * Tile component presnets the container for the tile body and header.
 */
export const Tile = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['tile'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
