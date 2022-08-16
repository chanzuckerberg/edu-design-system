import clsx from 'clsx';
import React from 'react';
import styles from './Score.module.css';
import Tag from '../Tag';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The color variant of the score.
   */
  variant: 'success' | 'error' | 'neutral';
  /**
   * The score value text.
   */
  text: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Score} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Score = ({ className, variant, ...other }: Props) => {
  const componentClassName = clsx(
    styles['score'],
    styles[`score--${variant}`],
    className,
  );

  return <Tag className={componentClassName} hasOutline {...other} />;
};
