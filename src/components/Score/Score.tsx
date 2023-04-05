import clsx from 'clsx';
import React from 'react';
import Tag from '../Tag';
import styles from './Score.module.css';

export const VARIANTS = ['table', 'error', 'success'] as const;

export type Variant = (typeof VARIANTS)[number];

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The color variant of the score.
   */
  variant: Variant;
  /**
   * The score value text.
   */
  text: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Score} from "@chanzuckerberg/eds";`
 *
 * A (pill shaped badge) wrapper intended for use with scores.
 */
export const Score = ({ className, variant, ...other }: Props) => {
  const componentClassName = clsx(
    styles['score'],
    styles[`score--${variant}`],
    className,
  );

  return <Tag className={componentClassName} hasOutline {...other} />;
};
