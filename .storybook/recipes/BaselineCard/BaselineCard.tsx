import clsx from 'clsx';
import React from 'react';
import styles from './BaselineCard.module.css';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tag,
  Text,
} from '../../../src';

import { Variant } from '../../../src/components/Tag/Tag';

interface Metadata {
  score: string;
  attempts: number;
  deadline: string;
  variant?: Variant;
}

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  label: string;
  body: string;
  metadata?: Metadata;
}

/**
 * Primary UI component for user interaction
 */
export const BaselineCard = ({
  className,
  label,
  body,
  metadata,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['baseline-card'], className, {});
  return (
    <Card className={componentClassName} {...other}>
      <CardHeader className={styles['baseline-card__header']}>
        {label}
      </CardHeader>
      <CardBody className={styles['baseline-card__body']}>{body}</CardBody>
      {metadata && (
        <CardFooter className={styles['baseline-card__footer']}>
          <div className={styles['baseline-card__footer-item']}>
            <Text className={styles['baseline-card__footer-label']}>Score</Text>
            <Tag
              className={styles['baseline-card__score']}
              hasOutline
              text={metadata.score}
              variant={metadata.variant}
            />
          </div>
          <div className={styles['baseline-card__footer-item']}>
            <Text className={styles['baseline-card__footer-label']}>
              Attempts
            </Text>
            <Text size="sm">{metadata.attempts}</Text>
          </div>
          <div className={styles['baseline-card__footer-item']}>
            <Text className={styles['baseline-card__footer-label']}>
              Line Passes On
            </Text>
            <Text size="sm">{metadata.deadline}</Text>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
