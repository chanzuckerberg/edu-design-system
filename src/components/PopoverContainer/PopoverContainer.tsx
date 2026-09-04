import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';

import styles from './PopoverContainer.module.css';

export type PopoverContainerProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:
   *
   * - `--popover-container__bg`
   */
  style?: PopoverContainerCSSProperties;
};

export interface PopoverContainerCSSProperties extends React.CSSProperties {
  /**
   * Custom property to customize the background color of this component (e.g., background color)
   */
  '--popover-container__bg'?: string;
}

/**
 * ## Usage
 *
 * Show a standardized wrapper for content shown by popover components, like `Popover`, `Menu`, and
 * `Select`. Define the container's appearance separate from the items within.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Render target | Passed as `as` to a HeadlessUI panel, so the panel itself renders as the container. | `Menu.Items`, `Select` options, `Combobox` options, `AppHeader` navigation. |
 * | Direct wrapper | Rendered directly around the content of another component's panel. | `Popover.Content`. |
 *
 * Adjacent children with `role="group"` are separated by a divider automatically, so grouped menu
 * content does not need its own separators.
 *
 * ## Interaction
 *
 * On render, this will use a subtle animation to highlight and draw the user's attention. The
 * animation is skipped for anyone who has asked for reduced motion.
 *
 * The container suppresses its own focus outline. Focus treatment belongs to the items inside it,
 * such as `PopoverListItem`.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `PopoverContainer` when creating any component that contains brief content similar in size to a Menu popover, or Select field popover. This could be ancillary content on a page where the trigger (e.g., a button) makes it clear what will be revealed.
 *
 * ### Don'ts
 *
 * * Avoid using `PopoverContainer` for large amounts of content. Consider `Modal` instead.
 * * Avoid using `PopoverContainer` for on-page experiences that do not have a trigger to reveal the content. Consider `Card` (with `elevation`) instead.
 *
 * ## Resources
 *
 * * https://headlessui.com/react/popover#popover
 */
export const PopoverContainer = React.forwardRef<
  HTMLDivElement,
  PopoverContainerProps
>(({ className, children, ...other }, ref) => {
  const componentClassName = clsx(styles['popover-container'], className);

  return (
    <div className={componentClassName} {...other} ref={ref}>
      {children}
    </div>
  );
});

PopoverContainer.displayName = 'PopoverContainer';
