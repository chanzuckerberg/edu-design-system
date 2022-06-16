import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../TimelineNav/TimelineNav.module.css';

export type TimelineNavPanelVariant =
  | 'bullet'
  | 'complete'
  | 'error'
  | 'incomplete'
  | 'number'
  | 'success'
  | 'warning';
export interface Props {
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title text
   */
  'aria-labelledby'?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Mark list as completed
   */
  completed?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * The tab variant
   */
  variant?: TimelineNavPanelVariant;
  /**
   * The tab title
   */
  title?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TimelineNavPanel} from "@chanzuckerberg/eds";
 * ```
 *
 * Panel to be used inside of the TimelineNav component.
 */
export const TimelineNavPanel = ({
  children,
  className,
  completed,
  id,
  variant,
  title,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['timeline-nav__panel'], className, {});
  return (
    <div
      aria-hidden={false}
      className={componentClassName}
      id={id}
      role="tabpanel"
      {...other}
    >
      {children}
    </div>
  );
};
