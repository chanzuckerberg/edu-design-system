import clsx from 'clsx';
import React from 'react';
import styles from './RadioLabel.module.css';
import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';

export type RadioLabelProps = InputLabelProps;

/**
 * Checkbox label element, styles and relies on the InputLabel component.
 */
export const RadioLabel = ({ ...other }: RadioLabelProps) => {
  return <InputLabel {...other} />;
};
