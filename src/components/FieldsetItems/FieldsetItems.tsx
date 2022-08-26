import clsx from 'clsx';
import React, { ElementType, ReactNode } from 'react';
import styles from './FieldsetItems.module.css';

export type FieldsetItemsProps = {
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
 * ```ts
 * import {FieldsetItems} from "@chanzuckerberg/eds";
 * ```
 *
 * Helper sub-component for styling the control elements in the component.
 */
export const FieldsetItems = ({
  children,
  as: Component = 'div',
  className,
}: FieldsetItemsProps) => {
  const componentClassName = clsx(styles['fieldset-items'], className);
  // @ts-expect-error TODO: investigate error
  return <Component className={componentClassName}>{children}</Component>;
};
