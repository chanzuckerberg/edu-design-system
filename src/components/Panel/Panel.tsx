import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Panel.module.css';

export interface Props {
  /**
   * Alignment variations for the panel
   * - **center** horizontally and vertically aligns the content
   */
  align?: 'center';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Style variants
   * - **flush** removes padding from the panel
   */
  flush?: boolean;
  /**
   * Style variants
   * - **squared** squares corners, removes borders, and adds box shadow for headlines
   */
  variant?: 'squared';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Panel} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Panel = ({
  className,
  children,
  align,
  variant,
  flush,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['panel'],
    className,
    align === 'center' && styles['panel--align-center'],
    variant === 'squared' && styles['panel--squared'],
    flush && styles['panel--flush'],
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
