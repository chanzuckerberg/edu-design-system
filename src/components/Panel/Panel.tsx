import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
 * `import {Panel} from "@chanzuckerberg/eds";`
 *
 * Component Panel is the container to show the contents with props passed through for conditional styling of the panel based on variants props.
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
    align === 'center' && styles['panel--align-center'],
    variant === 'squared' && styles['panel--squared'],
    flush && styles['panel--flush'],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
