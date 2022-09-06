import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './DefinitionList.module.css';
import DefinitionListItem from '../DefinitionListItem';

export interface Props {
  /**
   * Orientation variations
   * - **horizontal** renders the term next to the definition
   */
  orientation?: 'horizontal';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Available size variations for the button
   */
  size?: 'sm';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DefinitionList} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const DefinitionList = ({
  orientation,
  className,
  children,
  size,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['definition-list'],
    orientation === 'horizontal' && styles['definition-list--horizontal'],
    size === 'sm' && styles['definition-list--sm'],
    className,
  );
  return (
    <dl className={componentClassName} {...other}>
      {children}
    </dl>
  );
};

DefinitionList.Item = DefinitionListItem;
