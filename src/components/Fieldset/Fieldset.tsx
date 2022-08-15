import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { oneByType, allByType, withoutTypes } from 'react-children-by-type';
import styles from './Fieldset.module.css';
import FieldsetItems from '../FieldsetItems';
import FieldsetLegend from '../FieldsetLegend';

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
 * ```ts
 * import {Fieldset} from "@chanzuckerberg/eds";
 * ```
 *
 * A container for a fieldset that includes a legend and one or more form inputs.
 */
export function Fieldset({ children, className }: FieldsetProps) {
  const componentClassName = clsx(className, styles['fieldset']);
  return <fieldset className={componentClassName}>{children}</fieldset>;
}

Fieldset.Items = FieldsetItems;
Fieldset.Legend = FieldsetLegend;
