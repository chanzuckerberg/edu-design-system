import clsx from 'clsx';
import React from 'react';
import Fieldset from '../Fieldset';
import FieldsetLegend from '../FieldsetLegend';
import styles from './FiltersCheckboxField.module.css';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * List of checkboxes to be placed in the filters.
   */
  children: React.ReactNode;
  /**
   * Legend text string that names the fieldset.
   */
  legend?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```tsx
 * import {Filters} from "@chanzuckerberg/eds";
 *
 * <Filters.CheckboxField>
 * ```
 *
 * Field of checkboxes that are placed within a FiltersDrawer component.
 */
export const FiltersCheckboxField = ({
  className,
  children,
  legend,
}: Props) => {
  const componentClassName = clsx(styles['filters-fieldset'], className);

  return (
    <Fieldset className={componentClassName}>
      {legend && (
        <FieldsetLegend
          className={styles['filters-fieldset__legend']}
          text={legend}
        />
      )}
      <Fieldset.Items className={styles['filters-fieldset__checkboxes']}>
        {children}
      </Fieldset.Items>
    </Fieldset>
  );
};
