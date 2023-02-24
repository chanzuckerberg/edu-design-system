import clsx from 'clsx';
import React from 'react';
import type { InputLabelProps } from '../InputLabel/InputLabel';
import { InputLabel } from '../InputLabel/InputLabel';
import styles from './RadioLabel.module.css';

export type RadioLabelProps = InputLabelProps;

/**
 * Radio label element, styles and relies on the InputLabel component.
 */
export const RadioLabel = ({
  className,
  size = 'lg',
  ...other
}: RadioLabelProps) => {
  const componentClassName = clsx(
    styles['radio__label'],
    styles[`radio__label--${size}`],
    className,
  );

  return <InputLabel className={componentClassName} size={size} {...other} />;
};
