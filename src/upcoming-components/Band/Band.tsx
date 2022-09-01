import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Band.module.css';

export interface Props {
  children: ReactNode /* Child node(s) that can be nested inside component */;
  className?: string /* CSS class names that can be appended to the component. */;
  variant?: 'brand' /* Stylistic variations of component. - `brand` yields the primary brand color */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Band} from "@chanzuckerberg/eds";
 * ```
 *
 * Component is called Band with the band syling and based on variant props ,addtional styling passed in
 */
export const Band = ({ children, className, variant, ...other }: Props) => {
  const componentClassName = clsx(
    styles['band'],
    variant === 'brand' && styles['band--brand'],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
