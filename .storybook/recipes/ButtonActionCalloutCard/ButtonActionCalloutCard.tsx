import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { Card, Heading } from '../../../src';
import styles from './ButtonActionCalloutCard.module.css';

export interface Props {
  /**
   * Slot for buttons or other calls to action
   */
  actions?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * Title of the card
   */
  title?: string;
}

/**
 * Card recipe with treatment to bring attention to the user. This contains a title,
 * description, and slot for actions.
 */
export const ButtonActionCalloutCard = ({
  actions,
  className,
  title,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['button-action-callout-card'],
    className,
    {},
  );
  return (
    <Card className={componentClassName} elevation="raised" {...other}>
      <Card.Body>
        <Heading as="h3" size="h5">
          {title}
        </Heading>
        <div className={styles['button-action-callout-card__body-inner']}>
          {children && <div className="max-w-xl">{children}</div>}
          {actions && <div>{actions}</div>}
        </div>
      </Card.Body>
    </Card>
  );
};
