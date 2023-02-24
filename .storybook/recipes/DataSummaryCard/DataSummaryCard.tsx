import clsx from 'clsx';
import React from 'react';

import { Card, Text } from '../../../src';
import type { HeadingElement } from '../../../src/components/Heading';
import Heading from '../../../src/components/Heading';
import styles from './DataSummaryCard.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Main data text of the card.
   */
  dataAmount: string;
  /**
   * Text that provides a unit of measurement for the data.
   */
  dataUnit?: string;
  /**
   * Text to provide more context for the data.
   */
  description?: string;
  /**
   * Specifies the heading element to render the card heading as.
   */
  headingElement?: HeadingElement;
  /**
   * Title text of the data represented.
   */
  title: string;
  /**
   * Off track variant to indicate status.
   */
  variant?: 'off-track';
}

/**
 * Recipe for a Card component to showcase categorical statistics.
 */
export const DataSummaryCard = ({
  className,
  dataAmount,
  dataUnit,
  description,
  headingElement,
  title,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['data-summary-card'], className);
  return (
    <Card className={componentClassName} {...other}>
      <Card.Header className={styles['data-summary-card__header']}>
        <Heading
          as={headingElement}
          className={styles['data-summary-card__title']}
          size="h3"
        >
          {title}
        </Heading>
      </Card.Header>
      <Card.Body className={styles['data-summary-card__body']}>
        <Text
          className={styles['data-summary-card__data']}
          variant="neutral-medium"
        >
          {dataAmount}
          {dataUnit && (
            <Text
              as="span"
              className={styles['data-summary-card__data-unit']}
              variant="neutral-subtle"
            >
              {dataUnit}
            </Text>
          )}
        </Text>
        {description && (
          <Text
            className={styles['data-summary-card__description']}
            variant="neutral-subtle"
          >
            {description}
          </Text>
        )}
      </Card.Body>
      {variant === 'off-track' && (
        <div
          aria-label="off track"
          className={styles['data-summary-card__indicator--off-track']}
          role="img"
        />
      )}
    </Card>
  );
};
