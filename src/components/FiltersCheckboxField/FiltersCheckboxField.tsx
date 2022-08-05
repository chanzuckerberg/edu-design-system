import clsx from 'clsx';
import React from 'react';
import styles from './FiltersCheckboxField.module.css';
import Fieldset from '../Fieldset';
import FieldsetLegend from '../FieldsetLegend';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  children: React.ReactNode;
  legend?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Filters} from "@chanzuckerberg/eds";
 * <Filters.CheckboxField>
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const FiltersCheckboxField = ({
  className,
  children,
  legend,
  ...other
}: Props) => {
  // children.some()
  console.log(children);
  const componentClassName = clsx(styles['filters-fieldset'], className);

  return (
    <Fieldset className={componentClassName} {...other}>
      {legend && <FieldsetLegend text={legend} />}
      <Fieldset.Items>{children}</Fieldset.Items>
    </Fieldset>
  );
};
