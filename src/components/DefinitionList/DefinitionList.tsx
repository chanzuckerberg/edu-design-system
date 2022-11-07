import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
 * `import {DefinitionList} from "@chanzuckerberg/eds";`
 *
 * DefinitionList is the wrapper component that contains the definition term (`dt`)
 * and a definition description (`dd`).
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
