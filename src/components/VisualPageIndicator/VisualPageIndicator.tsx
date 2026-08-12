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
 * ## Usage
 *
 * Show to users which step they are on, in a given flow. Help to illustrate current position on
 * pagination experiences.
 *
 * ## Interaction
 *
 * Users can specify a number of dots, with each dot representing a discrete page of content in the
 * user interface. The active dot takes on a different color, to signal that it is the current
 * "position" within a set.
 *
 * The individual dots are not interactive; a user cannot move their position by clicking any
 * particular dot.
 *
 * `totalPageCount` sets how many dots render, and `activePage` marks which one is current. The
 * index is zero-based, so the last page is `totalPageCount - 1`. Fewer than two dots warns, and an
 * `activePage` outside the range logs an error.
 *
 * ## Content & Accessibility
 *
 * This is a visual cue only. The dots render as empty list items with no text, so assistive tech
 * gets no sense of which step is current. Always state the position in text nearby, for example a
 * "Step 2 of 5" label alongside the indicator.
 *
 * ### Do's
 *
 * * Use when there is a wizard-like experience, where there are a fixed number of steps, and you need to indicate which step the user is on, currently.
 * * For control, add adjacent buttons that let a user navigate to the next/previous step in the flow. This can be tied to logic to update the current dot in the set.
 * * For `Modal`, the next/previous buttons can be located together and right aligned. In such a layout, "Next" is treated as the primary button and is right most.
 *
 * ### Don'ts
 *
 * * Avoid using `VisualPageIndicator` without adjoined buttons for control.
 * * Avoid relying on, or building, any interaction with `VisualPageIndicator`, as the tap / click targets are very small and provide a poor UX.
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
