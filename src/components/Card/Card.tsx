import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLElement> {
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
   *
   * **Default is `'none'`**.
   */
  elevation?: 'none' | 'raised' | 'dragging';
  /**
   * Property to apply a "dragging" elevation. Can be use while card is in a moving state.
   *
   * **Default is `false`**.
   */
  isDragging?: boolean;
}

export interface CardSubComponentProps {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * `import {Card} from "@chanzuckerberg/eds";`
 *
 * Card component is the outer wrapper for the block that typically contains a title, image,
 * text, and/or calls to action.
 */
export const Card = ({
  className,
  children,
  elevation = 'none',
  isDragging = false,
  ...other
}: CardProps) => {
  const componentClassName = clsx(
    styles['card'],
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

/**
 * Body of the Card component.
 */
const CardBody = ({ children, className, ...other }: CardSubComponentProps) => {
  const componentClassName = clsx(styles['card__body'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

/**
 * Footer of the Card component.
 */
const CardFooter = ({
  children,
  className,
  ...other
}: CardSubComponentProps) => {
  const componentClassName = clsx(styles['card__footer'], className);
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};

/**
 * Header of the Card component.
 */
const CardHeader = ({
  children,
  className,
  ...other
}: CardSubComponentProps) => {
  const componentClassName = clsx(styles['card__header'], className);
  return (
    <header className={componentClassName} {...other}>
      {children}
    </header>
  );
};

Card.displayName = 'Card';
CardBody.displayName = 'Card.Body';
CardFooter.displayName = 'Card.Footer';
CardHeader.displayName = 'Card.Header';

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
