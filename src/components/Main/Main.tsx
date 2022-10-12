import clsx from 'clsx';
import React, {ReactNode} from 'react';
import styles from './Main.module.css';

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
 * ```ts
 * import {Main} from "@chanzuckerberg/eds";
 * ```
 *
 * Component defines the Main element inside layout.
 */
export const Main = ({children, className, ...other}: Props) => {
  const componentClassName = clsx(styles['main'], className);
  return (
    <main className={componentClassName} id="main-content" {...other}>
      {children}
    </main>
  );
};
