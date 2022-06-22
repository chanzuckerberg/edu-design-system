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
  /**
   * Score for the baseline card.
   */
  score: string;
  /**
   * Number of attempts.
   */
  attempts: number;
  /**
   * Deadline for the relevant item.
   */
  deadline: string;
  /**
   * Tag variant for the score. For coloring outline since background and fonts are fixed.
   */
  variant?: Variant;
}

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Label for the baseline card, placed in the card header.
   */
  label: string;
  /**
   * Text for the baseline card, placed in the card body.
   */
  body: string;
  /**
   * Metadata to be placed in the footer.
   */
  metadata?: Metadata;
}

/**
 * Recipe for a Card component that displays a common card use case.
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
      <CardHeader className={styles['baseline-card__label']}>
        {label}
      </CardHeader>
      <CardBody className={styles['baseline-card__body']}>{body}</CardBody>
      {metadata && (
        <CardFooter className={styles['baseline-card__footer']}>
          <table className={styles['baseline-card__table']}>
            <tbody className={styles['baseline-card__table-body']}>
              <tr className={styles['baseline-card__table-row']}>
                <th
                  className={styles['baseline-card__table-label']}
                  scope="row"
                >
                  Score
                </th>
                <td>
                  <Tag
                    className={styles['baseline-card__score']}
                    hasOutline
                    text={metadata.score}
                    variant={metadata.variant}
                  />
                </td>
              </tr>
              <tr className={styles['baseline-card__table-row']}>
                <th
                  className={styles['baseline-card__table-label']}
                  scope="row"
                >
                  Attempts
                </th>
                <td className={styles['baseline-card__table-data']}>
                  {metadata.attempts}
                </td>
              </tr>
              <tr className={styles['baseline-card__table-row']}>
                <th
                  className={styles['baseline-card__table-label']}
                  scope="row"
                >
                  Line Passes On
                </th>
                <td className={styles['baseline-card__table-data']}>
                  {metadata.deadline}
                </td>
              </tr>
            </tbody>
          </table>
        </CardFooter>
      )}
    </Card>
  );
};
