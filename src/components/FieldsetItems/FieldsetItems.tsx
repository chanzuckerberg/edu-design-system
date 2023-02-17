import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import React from 'react';
import styles from './FieldsetItems.module.css';

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

/**
 * `import {FieldsetItems} from "@chanzuckerberg/eds";`
 *
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
