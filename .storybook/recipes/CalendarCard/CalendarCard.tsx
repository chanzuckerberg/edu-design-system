import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './CalendarCard.module.css';

import { Card } from '../../../src';

export const VARIANTS = ['brand', 'revise', 'success'] as const;

export type Variant = typeof VARIANTS[number];

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Card sub components that are nested within the Card wrapper.
   */
  children: ReactNode;
  /**
   * Notification variant for the card.
   */
  variant?: Variant;
}

/**
 * Recipe for a Card component to represent an event within calendar UI
 */
export const CalendarCard = ({
  children,
  className,
  variant = 'brand',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['calendar-card'],
    className,
    styles[`calendar-card--${variant}`],
  );
  return (
    <Card className={componentClassName} {...other}>
      {children}
    </Card>
  );
};

/**
 * Re-exports subcomponents so consuming apps don't have to import the Card component or the individual subcomponents.
 */
CalendarCard.Body = Card.Body;
CalendarCard.Footer = Card.Footer;
CalendarCard.Header = Card.Header;
