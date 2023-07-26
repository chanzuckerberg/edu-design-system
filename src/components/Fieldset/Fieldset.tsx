import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import React from 'react';
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

export type FieldsetItemsProps<T extends ElementType> = {
  /**
   * The content of the control elements in the fieldset.
   */
  children: ReactNode;
  /**
   * Type of element the immediate wrapper around the contents should be.
   * @default 'div'
   */
  as?: T;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
};

export type FieldsetLegendProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * String to indicate required or optional state.
   */
  optionalLabel?: '(required)' | '(optional)';
  /**
   * Legend text string that names the fieldset.
   */
  text: string;
};

/**
 * `import {Fieldset} from "@chanzuckerberg/eds";`
 *
 * A container for a fieldset that includes a legend and one or more form inputs.
 */
export function Fieldset({ children, className }: FieldsetProps) {
  const componentClassName = clsx(styles['fieldset'], className);
  return <fieldset className={componentClassName}>{children}</fieldset>;
}

/**
 * Helper sub-component for styling the control elements in the component.
 */
export const FieldsetItems = <T extends ElementType = 'div'>({
  children,
  as,
  className,
  ...props
}: FieldsetItemsProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof FieldsetItemsProps<T>>) => {
  const componentClassName = clsx(styles['fieldset-items'], className);
  const Component = as || 'div';
  // Disable this once EDS is updated to React 18+ or lib specifies version.
  // There is a type mismatch betwwen what gets pulled in via react-beautiful-dnd
  // and React 16. that library imports the latest react types regardless of
  // installed version.
  return (
    <Component className={componentClassName} {...props}>
      {children}
    </Component>
  );
};

/**
 * Helper sub-component for styling the legend in a fieldset.
 */
const FieldsetLegend = ({
  className,
  optionalLabel,
  text,
  ...other
}: FieldsetLegendProps) => {
  const componentClassName = clsx(styles['fieldset-legend'], className);
  return (
    <legend className={componentClassName} {...other}>
      {text}{' '}
      {optionalLabel && (
        <span className={styles['fieldset-legend__flag']}>{optionalLabel}</span>
      )}
    </legend>
  );
};

Fieldset.Items = FieldsetItems;
Fieldset.Legend = FieldsetLegend;
