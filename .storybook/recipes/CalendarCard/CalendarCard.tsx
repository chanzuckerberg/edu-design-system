import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './CalendarCard.module.css';

import { Card, Heading, Icon } from '../../../src';

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
   * The card icon
   */
  icon?: ReactNode;
  /**
   * Project card meta data (e.g. calendar)
   */
  meta?: string;
  /**
   * The title text
   */
  title?: string;
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
  icon,
  title,
  variant = 'brand',
  ...other
}: Props) => {
  const componentClassName = clsx(
    className,
    styles['calendar-card'],
    styles[`calendar-card--${variant}`],
  );
  return (
    <Card className={componentClassName} {...other}>
      {title && (
        <Heading
          as="h3"
          className={styles['calendar-card__title']}
          size="body-sm"
        >
          {(variant === 'success' || variant === 'revise') && (
            <span className={styles['calendar-card__title--icon']}>
              <Icon
                name={
                  variant === 'success' ? 'status-check-circle' : 'status-error'
                }
                purpose="decorative"
                size="1.28rem"
              />
            </span>
          )}
          {title && (
            <span className={styles['calendar-card__title--text']}>
              {title}
            </span>
          )}
        </Heading>
      )}
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
