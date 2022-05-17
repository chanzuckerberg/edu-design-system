import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './TextPassage.module.css';
import LayoutLinelengthContainer from '../LayoutLinelengthContainer';

export interface Props {
  /**
   * Toggles capping the line length to a comfortable character count. Set to `true` by default, and setting to `false` results in a TextPassage that fills 100% of its container, resulting in longer line lengths
   */
  capLinelength?: boolean;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Id of the component
   */
  id?: string;
  /**
   * Inverted variant for component rendered on a dark background
   */
  inverted?: boolean;
  /**
   * Size variations:
   * - **sm** yields a TextPassage with smaller typography
   * - **lg** yields a TextPassage with larger typography
   */
  size?: 'sm' | 'lg';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TextPassage} from "@chanzuckerberg/eds";
 * ```
 *
 * A passage of text, including various components (i.e. article, blog post).
 */
export const TextPassage = ({
  capLinelength = true,
  className,
  id,
  inverted,
  size,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['text-passage'],
    className,
    size === 'sm' && styles['text-passage--sm'],
    size === 'lg' && styles['text-passage--lg'],
    inverted && styles['text-passage--inverted'],
  );

  return (
    <div className={componentClassName} {...other}>
      {capLinelength ? (
        <LayoutLinelengthContainer className={styles['text-passage__inner']}>
          {children}
        </LayoutLinelengthContainer>
      ) : (
        <div className={styles['text-passage__inner']}>{children}</div>
      )}
    </div>
  );
};
