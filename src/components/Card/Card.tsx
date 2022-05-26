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
   * Elevation variants
   * - **raised** renders the card that is raised off of the canvas (box-shadow applied)
   */
  elevation?: 'raised';
  /**
   * Card rendered on a dark backgorund
   */
  inverted?: boolean;
  /**
   * Property passed in to style draggable project card
   */
  isDragging?: boolean;
  /**
   * Orientation of a card
   * - **horizontal** renders the header, body, and footer in a horizontal fashion
   * where the body is required but the header and footer are not
   */
  orientation?: 'horizontal';
}

/**

 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Card} from "@chanzuckerberg/eds";
 * ```
 *
 * Card component.
 */

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  className,
  children,
  elevation,
  inverted,
  isDragging,
  orientation,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['card'],
    className,
    inverted && styles['card--inverted'],
    orientation && styles['card--horizontal'],
    isDragging && styles['eds-is-dragging'],
    elevation === 'raised' && styles['card--raised'],
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
