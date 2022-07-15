/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import styles from './BaselineCard.module.css';

import { Card, CardBody, CardFooter, CardHeader, Tag } from '../../../src';

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
   * Clickable card: link URL
   */
  linkHref?: string;
  /**
   * Clickable card: link text
   */
  linkText?: string;
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
  linkHref,
  linkText,
  label,
  body,
  metadata,
  ...other
}: Props) => {
  /**
   * Initialize refs to use on the card container and the link
   *  (for clickable card)
   */
  const cardRef = useRef() as MutableRefObject<HTMLDivElement>;
  const linkRef = useRef() as MutableRefObject<HTMLAnchorElement>;

  /**
   * useEffect hook
   * 1) On component load or update, check for both a cardRef and a linkRef.
   * The presence of both means this card has a clickable link.
   * 2) Attach click handler to the card.
   * 3) Check to see if text is selected; if so, do not call .click() on the
   * linkRef
   * 4) Pass the click to the linkRef.
   * 5) Cleanup.
   *
   * TODO: If the visible text of the card also contains links, these will
   * need to have an event listener added to them to stop propagation of the
   * click event; otherwise, users will not be able to click on these inner
   * links.
   */
  useEffect(() => {
    if (!cardRef.current || !linkRef.current) {
      /* 1 */
      return;
    }
    const curr = cardRef.current;
    curr.addEventListener('click', handleClick); /* 2 */

    function handleClick() {
      const isTextSelected = window.getSelection()?.toString(); /* 3 */
      if (!isTextSelected) {
        linkRef.current.click(); /* 4 */
      }
    }
    /* 5 */
    return () => {
      curr.removeEventListener('click', handleClick, false);
    };
  }, []);

  const componentClassName = clsx(
    styles['baseline-card'],
    linkHref && styles['baseline-card--clickable'],
    className,
  );
  return (
    /**
     * 1) Wrapping the Card component in a container for attaching cardRef
     * to the card without adding a ref prop to <Card />
     */

    <div className={styles['baseline-card__container']} ref={cardRef}>
      <Card className={componentClassName} {...other}>
        <CardHeader className={styles['baseline-card__label']}>
          {label}
        </CardHeader>
        <CardBody className={styles['baseline-card__body']}>
          {body}
          {` `}
          {linkHref && (
            <a
              className={styles['baseline-card__link']}
              href={linkHref}
              ref={linkRef}
              rel="noreferrer"
              target="_blank"
            >
              {linkText}
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
    </div>
  );
};
