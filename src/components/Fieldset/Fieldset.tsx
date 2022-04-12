import clsx from 'clsx';
import React, { ElementType, ReactNode } from 'react';
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
};

type LegendProps = {
  /**
   * The legend of the fieldset.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
};

type ItemsProps = {
  /**
   * The content of the control elements in the fieldset.
   */
  children: ReactNode;
  /**
   * Type of element the immediate wrapper around the contents should be.
   * @default 'div'
   */
  as?: ElementType;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
};

/**
 * Helper sub-component for styling the title at the top of the component.
 */
const Legend: React.FC<LegendProps> = ({ children, className }) => {
  const componentClassName = clsx(className, styles['legend']);
  return <legend className={componentClassName}>{children}</legend>;
};

/**
 * Helper sub-component for styling the control elements in the component.
 */
const Items: React.FC<ItemsProps> = ({
  children,
  as: Component = 'div',
  className,
}) => {
  const componentClassName = clsx(className, styles['fieldset__items']);
  return <Component className={componentClassName}>{children}</Component>;
};

/**
 * ```ts
 * import {Fieldset} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A container for a fieldset including a legend and one or more form inputs.
 *
 * Uses `fieldset` and `legend` elements by default but can be customized.
 *
 * If you're not using a `fieldset` element, please consider whether you should be
 * using a `ul` instead.
 */
export function Fieldset({ children, className }: FieldsetProps) {
  const componentClassName = clsx(className, styles['fieldset']);
  return <fieldset className={componentClassName}>{children}</fieldset>;
}

Fieldset.Legend = Legend;
Fieldset.Items = Items;

Fieldset.displayName = 'Fieldset';
Fieldset.Legend.displayName = 'Fieldset.Legend';
Fieldset.Items.displayName = 'Fieldset.Items';
