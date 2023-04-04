import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import FieldsetItems from '../FieldsetItems';
import FieldsetLegend from '../FieldsetLegend';
import styles from './Fieldset.module.css';

type FieldsetProps = {
  /**
   * The contents of the fieldset. We suggest a FieldsetLegend followed by
   * interactive elements.
   *
   * Should be wrapped in a fragment to allow our styling to control the spacing
   * between elements.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
} & React.HTMLAttributes<HTMLFieldSetElement>;

/**
 * `import {Fieldset} from "@chanzuckerberg/eds";`
 *
 * A container for a fieldset that includes a legend and one or more form inputs.
 */
export function Fieldset({ children, className }: FieldsetProps) {
  const componentClassName = clsx(styles['fieldset'], className);
  return <fieldset className={componentClassName}>{children}</fieldset>;
}

Fieldset.Items = FieldsetItems;
Fieldset.Legend = FieldsetLegend;
