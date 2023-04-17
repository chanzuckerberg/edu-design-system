import type { ReactNode } from 'react';
import React from 'react';

export type TimelineNavPanelVariant =
  | 'bullet'
  | 'complete'
  | 'error'
  | 'incomplete'
  | 'number'
  | 'success'
  | 'warning'
  | undefined;

export interface Props {
  /**
   * Accessible label for a given panel
   */
  'aria-label'?: string;
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
  /**
   * Slot for node to appear to the right of the title. Typically used to include a Badge, Button, or other component
   */
  titleAfter?: ReactNode;
}

/**
 * `import {TimelineNavPanel} from "@chanzuckerberg/eds";`
 *
 * Panel to be used inside of the TimelineNav component.
 */
export const TimelineNavPanel = ({
  children,
  className,
  completed,
  id,
  title,
  titleAfter,
  variant,
  ...other
}: Props) => {
  return (
    <div
      aria-hidden={false}
      className={className}
      id={id}
      role="tabpanel"
      {...other}
    >
      {children}
    </div>
  );
};
