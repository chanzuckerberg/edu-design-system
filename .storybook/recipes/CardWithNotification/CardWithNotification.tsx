import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

import { Card, InlineNotification } from '../../../src';
import type { VARIANTS } from '../../../src/components/InlineNotification/InlineNotification';
import styles from './CardWithNotification.module.css';

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
   * Toggles the stronger notification background variants.
   */
  isStrong?: boolean;
  /**
   * Text to be placed in the notification.
   */
  text: string;
  /**
   * Notification variant for the card.
   */
  variant: (typeof VARIANTS)[number];
}

/**
 * Recipe for a Card component with a bottom notification.
 */
export const CardWithNotification = ({
  children,
  className,
  isStrong,
  text,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['card-with-notification'], className);
  return (
    <div className={componentClassName}>
      <Card className={styles['card-with-notification__card']} {...other}>
        {children}
      </Card>
      <InlineNotification
        isFullWidth
        isStrong={isStrong}
        text={text}
        variant={variant}
      />
    </div>
  );
};
