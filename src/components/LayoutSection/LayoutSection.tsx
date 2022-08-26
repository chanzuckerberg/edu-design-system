import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Layout/Layout.module.css';

export interface Props {
  /**
   * Behavioral variations
   */
  behavior?: 'expandable';
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Layout section region
   */
  region?: 'main' | 'sidebar';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {LayoutSection} from "@chanzuckerberg/eds";
 * ```
 *
 * Layout section.
 */
export const LayoutSection = ({
  children,
  className,
  region,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['layout__section'],
    region === 'main' && styles['layout__section--main'],
    region === 'sidebar' && styles['layout__section--sidebar'],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
