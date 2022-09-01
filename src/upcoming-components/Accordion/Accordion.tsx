import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Accordion.module.css';
import AccordionPanel from '../AccordionPanel';

export interface Props {
  children?: ReactNode /* Child node(s) that can be nested inside component */;
  className?: string /* CSS class names that can be appended to the component */;
  inverted?: boolean /* 1) Used for dark backgrounds */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Accordion} from "@chanzuckerberg/eds";
 * ```
 *
 * Component is an accordian panel element with additional styling passing in
 */
export const Accordion = ({
  children,
  className,
  inverted,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['accordion'],
    inverted && styles['accordion--inverted'],
    className,
  );
  return (
    <dl className={componentClassName} {...other}>
      {children}
    </dl>
  );
};

Accordion.Panel = AccordionPanel;
