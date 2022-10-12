import clsx from 'clsx';
import React from 'react';
import styles from './CheckboxLabel.module.css';
import type {InputLabelProps} from '../InputLabel/InputLabel';
import {InputLabel} from '../InputLabel/InputLabel';

export type CheckboxLabelProps = InputLabelProps;

/**
 * Checkbox label element, styles and relies on the InputLabel component.
 */
export const CheckboxLabel = ({
  className,
  size,
  ...other
}: CheckboxLabelProps) => {
  const componentClassName = clsx(
    size === 'md' && styles['checkbox__label--md'],
    className,
  );

  return <InputLabel className={componentClassName} size={size} {...other} />;
};
