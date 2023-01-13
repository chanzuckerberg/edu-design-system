import clsx from 'clsx';
import React, { type ReactNode, useEffect, useRef } from 'react';
import styles from './BaselineCard.module.css';

import { Card, CardBody, CardFooter, CardHeader, Score } from '../../../src';
import type { Variant } from '../../../src/components/Score/Score';

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
   * Score variant. For coloring outline since background and fonts are fixed.
   */
  variant: Variant;
}

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /*
   * Clickable card: link properties
   */
  linkProps?: LinkType;
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

/*
 * Clickable card: link properties
 */
export type LinkType = {
  href: string;
  /**
   * Text will be used by screen readers; it will only be visible when the
   * link is focused by a keyboard.
   */
  text: ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
};

/**
 * Recipe for a Card component that displays a common card use case.
 * A link may be added to the card to create a clickable card.
 *
 * NOTE: when card is clickable, it does not support links or buttons
 * in the contents of the card. Users will not be able to click on these inner
 * links without an event to stop propagation.
 */
export const BaselineCard = ({
  className,
  linkProps,
  label,
  body,
  metadata,
  ...other
}: Props) => {
  /**
   * Initialize refs to use on the card container and the link
   *  (for clickable card)
   */
  const cardRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  /**
   * Hook up the link functionality on component mount if a link is present
   */
  useEffect(() => {
    /**
     * On component load or update, check for both a cardRef and a linkRef.
     * The presence of both means this card has a clickable link.
     */
    if (!cardRef.current || !linkRef.current) {
      return;
    }
    const curr = cardRef.current;
    curr.addEventListener('click', handleClick);

    function handleClick() {
      const isTextSelected = window.getSelection()?.toString();
      if (!isTextSelected) {
        linkRef.current?.click();
      }
    }

    return () => {
      curr.removeEventListener('click', handleClick, false);
    };
  }, []);

  const componentClassName = clsx(
    styles['baseline-card'],
    linkProps && styles['baseline-card--clickable'],
    className,
  );
  return (
    /**
     * Wrapping the Card component in a container for attaching cardRef
     * to the card without adding a ref prop to <Card />
     */

    <div className={styles['baseline-card__container']}>
      <div className={styles['baseline-card__clickable-wrapper']} ref={cardRef}>
        <Card className={componentClassName} {...other}>
          <CardHeader className={styles['baseline-card__label']}>
            {label}
          </CardHeader>
          <CardBody className={styles['baseline-card__body']}>
            {body}
            {linkProps && (
              <a
                className={styles['baseline-card__link']}
                href={linkProps.href}
                ref={linkRef}
                target={linkProps.target ? linkProps.target : '_self'}
              >
                {linkProps.text}
              </a>
            )}
          </CardBody>
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
                      <Score
                        className={styles['baseline-card__score']}
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
      </div>
    </div>
  );
};
