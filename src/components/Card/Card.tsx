import { clsx } from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import styles from './Card.module.css';

export interface Props extends HTMLAttributes<HTMLElement> {
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
   * - **none** renders the card with no elevation (no box-shadow applied)
   * - **raised** renders the card that is raised off of the canvas (box-shadow applied)
   * - **dragging** renders the card that is raised even further off the canvas (during drag)
   */
  elevation?: 'none' | 'raised' | 'dragging';
  /**
   * Property to apply a "dragging" elevation. Used when card is under drag
   */
  isDragging?: boolean;
  /**
   * Orientation of a card
   * - **vertical** renders the header, body, and footer in a columnar fashion (default)
   * - **horizontal** renders the header, body, and footer in a horizontal fashion
   * where the body is required but the header and footer are not
   */
  orientation?: 'vertical' | 'horizontal';
}

/**
 * `import {Card} from "@chanzuckerberg/eds";`
 *
 * Card component is the outer wrapper for the block that typically contains a title, image,
 *    text, and/or calls to action.
 */
export const Card = ({
  className,
  children,
  elevation = 'none',
  isDragging = false,
  orientation = 'vertical',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['card'],
    orientation === 'horizontal' && styles['card--horizontal'],
    elevation === 'raised' && styles['card--raised'],
    elevation === 'dragging' && styles['card--dragging'],
    isDragging && styles['card--dragging'],
    className,
  );
  return (
    <article className={componentClassName} {...other}>
      {children}
    </article>
  );
};

Card.displayName = 'Card';

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
