import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Fieldset.module.css';

type FieldsetProps = {
  /**
   * The contents of the fieldset. We suggest a Fieldset.Title followed by
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
 * import {Fieldset} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A container for a fieldset including a legend and one or more form inputs.
 */
export function Fieldset({ children, className }: FieldsetProps) {
  const componentClassName = clsx(className, styles['fieldset']);
  return <fieldset className={componentClassName}>{children}</fieldset>;
}
