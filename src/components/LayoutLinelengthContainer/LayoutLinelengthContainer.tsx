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
 * `import {LayoutLinelengthContainer} from "@chanzuckerberg/eds";`
 *
 * Component that caps the length of an excerpt of text to be easily readable.
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
