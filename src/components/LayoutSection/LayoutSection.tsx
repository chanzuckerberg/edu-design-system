import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from '../Layout/Layout.module.css';

export interface Props {
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
 * The Layout components are deprecated and will be removed in an upcoming release.
 * Instead, please make use of utility libraries, like Tailwind CSS:
 * * https://tailwindcss.com/docs/display
 * * https://tailwindcss.com/docs/container
 * * https://tailwindcss.com/docs/columns
 *
 * `import {LayoutSection} from "@chanzuckerberg/eds";`
 *
 * Layout section.
 *
 * @deprecated
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
