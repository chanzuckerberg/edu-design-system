import React, {ReactNode} from 'react';
import Link from '../Link';
import Text from '../Text';
import styles from './StackedBlock.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;

  /**
   * Title of the card
   */
  title?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {StackedBlock} from "@chanzuckerberg/eds";
 * ```
 *
 * A stacked block is a block that contains stacked text content, with a
 * text link around the title and a description.
 */
export const StackedBlock = ({
  className,
  href,
  title,
  children,
  ...other
}: Props) => {
  return (
    <div className={className} {...other}>
      <Link href={href}>{title}</Link>
      <Text className={styles['stacked-block__description']}>{children}</Text>
    </div>
  );
};
