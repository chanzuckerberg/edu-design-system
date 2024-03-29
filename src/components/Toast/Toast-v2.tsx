import clsx from 'clsx';
import React from 'react';

import getIconNameFromStatus from '../../util/getIconNameFromStatus';
import type { Status } from '../../util/variant-types';
import { ButtonV2 as Button } from '../Button';
import Icon from '../Icon';
import Text from '../Text';

import styles from './Toast-v2.module.css';

export type ToastProps = {
  // Component API
  /**
   * Additional class names that can be appended to the component, passed in for styling.
   */
  className?: string;
  /**
   * Callback when notification is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
  // Design API
  /**
   * Keyword to characterize the state of the notification
   */
  status?: Extract<Status, 'favorable' | 'critical'>;
  /**
   * The title/heading of the notification
   */
  title: string;
};

/**
 * `import {Toast} from "@chanzuckerberg/eds";`
 *
 * Toasts display brief, temporary notifications. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken.
 */
export const Toast = ({
  className,
  onDismiss,
  status = 'favorable',
  title,
  ...other
}: ToastProps) => {
  const componentClassName = clsx(
    styles['toast'],
    status && styles[`toast--status-${status}`],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      <Icon
        className={styles['toast__icon']}
        name={getIconNameFromStatus(status)}
        purpose="decorative"
        size="1.875rem"
      />
      <div className={styles['toast__body']}>
        <Text as="span" className={styles['toast__text']} preset="title-md">
          {title}
        </Text>
      </div>
      {onDismiss && (
        <Button
          aria-label="close"
          context="default"
          icon="close"
          iconLayout="icon-only"
          onClick={onDismiss}
          rank="tertiary"
        >
          Close
        </Button>
      )}
    </div>
  );
};
