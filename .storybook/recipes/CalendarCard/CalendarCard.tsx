import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

import { Card, Heading, Icon, Tag, Text } from '../../../src';
import type { Variant as TagVariant } from '../../../src/components/Tag/Tag';
import styles from './CalendarCard.module.css';

export const VARIANTS = ['brand', 'revise', 'success'] as const;

export type Variant = (typeof VARIANTS)[number];

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Card sub components that are nested within the Card wrapper.
   */
  children?: ReactNode;
  /**
   * End of date range
   */
  dateEnd?: string;
  /**
   * Start of date range
   */
  dateStart?: string;
  /**
   * Additional text for date range
   */
  meta?: string;
  /**
   * Text for tag(s)
   */
  tags?: TagType[];
  /**
   * The title text
   */
  title: string;
  /**
   * Notification variant for the card.
   */
  variant?: Variant;
}

interface TagType {
  text: string;
  variant?: TagVariant;
  hasOutline?: boolean;
}

/**
 * Recipe for a Card component to represent an event within calendar UI.
 */
export const CalendarCard = ({
  children,
  className,
  dateEnd,
  dateStart,
  meta,
  tags,
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
      <Card.Body className={styles['calendar-card__body']}>
        <Heading
          as="h3"
          className={styles['calendar-card__title']}
          size="title-xs"
        >
          {(variant === 'success' || variant === 'revise') && (
            <span className={styles['calendar-card__title-icon']}>
              <Icon
                name={
                  variant === 'success' ? 'status-check-circle' : 'status-error'
                }
                purpose="informative"
                size="1.2rem"
                title={variant}
              />
            </span>
          )}
          <span>{title}</span>
        </Heading>
        <Text as="p" className={styles['calendar-card__dates']} size="xs">
          <span className={styles['calendar-card__dates-icon']}>
            <Icon name="event-note" purpose="decorative" size="1.2rem" />
          </span>
          {dateStart} &mdash; {dateEnd} {meta}
        </Text>
        <div className={styles['calendar-card__tags']}>
          {tags?.map(({ hasOutline = true, text, variant = 'neutral' }) => (
            <Tag
              hasOutline={hasOutline}
              key={text}
              text={text}
              variant={variant}
            />
          ))}
        </div>
        {children}
      </Card.Body>
    </Card>
  );
};
