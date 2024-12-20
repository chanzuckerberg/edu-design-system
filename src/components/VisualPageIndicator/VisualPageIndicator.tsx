import clsx from 'clsx';
import React from 'react';
import { assertEdsUsage } from '../../util/logging';

import styles from './VisualPageIndicator.module.css';

export type VisualPageIndicatorProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Index of the active page in the indicator (0-based).
   */
  activePage: number;
  /**
   * Total number of pages available in this experience
   */
  totalPageCount: number;
};

/**
 * `import {VisualPageIndicator} from "@chanzuckerberg/eds";`
 *
 * Static visual cue to help users understand their current position within a series of content or pages.
 */
export const VisualPageIndicator = ({
  className,
  activePage,
  totalPageCount,
  ...other
}: VisualPageIndicatorProps) => {
  const componentClassName = clsx(styles['visual-page-indicator'], className);

  assertEdsUsage(
    [totalPageCount < 2],
    'The minimum allowed count of indicators is 2',
  );

  assertEdsUsage(
    [activePage < 0, activePage > totalPageCount - 1],
    `The position in the indicator is out of range: [0, ${totalPageCount - 1}]`,
    'error',
  );

  return (
    <ul className={componentClassName} {...other}>
      {Array(totalPageCount)
        .fill(0)
        .map((_, index) => {
          return `Page ${index}`;
        })
        .map((name, index) => {
          return (
            <li
              className={clsx(
                styles['visual-page-indicator__item'],
                index === activePage && styles['visual-page-indicator--active'],
              )}
              key={name}
            ></li>
          );
        })}
    </ul>
  );
};
