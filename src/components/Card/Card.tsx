import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Card.module.css';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';

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
   * Card rendered on a dark backgorund
   */
  inverted?: boolean;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Card} from "@chanzuckerberg/eds";
 * ```
 *
 * Card component used to visually group information. Yypically contains a title, image,
 * text, and/or calls to action.
 */
export const Card = ({ className, children, inverted, ...other }: Props) => {
  const componentClassName = clsx(
    styles['card'],
    className,
    inverted && styles['card--inverted'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
