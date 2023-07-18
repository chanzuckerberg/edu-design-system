import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './LayoutLinelengthContainer.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * The Layout components are deprecated and will be removed in an upcoming release.
 * Instead, please make use of utility libraries, like Tailwind CSS:
 * * https://tailwindcss.com/docs/display
 * * https://tailwindcss.com/docs/container
 * * https://tailwindcss.com/docs/columns
 *
 * `import {LayoutLinelengthContainer} from "@chanzuckerberg/eds";`
 *
 * Component that caps the length of an excerpt of text to be easily readable.
 *
 * @deprecated
 */
export const LayoutLinelengthContainer = ({
  className,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['layout-linelength-container'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
