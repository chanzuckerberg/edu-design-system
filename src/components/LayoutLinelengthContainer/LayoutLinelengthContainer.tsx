import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {LayoutLinelengthContainer} from "@chanzuckerberg/eds";
 * ```
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
