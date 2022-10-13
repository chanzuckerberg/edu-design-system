import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
 * ```ts
 * import {Card} from "@chanzuckerberg/eds";
 * ```
 *
 * Card component is the outer wrapper for the block that typically contains a title, image,
 *    text, and/or calls to action.
 */

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  className,
  children,
  elevation,
  isDragging,
  orientation,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['card'],
    orientation && styles['card--horizontal'],
    isDragging && styles['eds-is-dragging'],
    elevation === 'raised' && styles['card--raised'],
    className,
  );
  return (
    <article className={componentClassName} {...other}>
      {children}
    </article>
  );
};

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
