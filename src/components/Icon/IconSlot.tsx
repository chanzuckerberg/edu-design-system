import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import type { IconOrContent } from '../../util/utility-types';

export type IconSlotProps = {
  /**
   * CSS class names applied to the rendered icon, or to the wrapper around custom
   * content so both branches sit the same way in the layout.
   */
  className?: string;
  /**
   * The slot's value. A string is treated as an EDS icon name; anything else renders
   * as-is.
   */
  content: IconOrContent;
  /**
   * Width/height passed through to `Icon` when rendering an icon name.
   */
  size?: string;
};

/**
 * Renders a leading/trailing slot that accepts either an EDS icon name or arbitrary
 * content.
 *
 * Components that used to take an `IconName` now take `IconOrContent`, so they need to
 * decide at runtime which of the two they were handed. A string is the only thing a
 * consumer can pass that is ambiguous, and by convention it means an icon name, so it
 * renders through `Icon` with that component's own sizing. Everything else is content
 * and renders untouched.
 *
 * Not exported from the package. Consumers use the slot props on each component.
 */
export const IconSlot = ({ className, content, size }: IconSlotProps) => {
  if (content === null || content === undefined || content === false) {
    return null;
  }

  if (typeof content === 'string') {
    // Safe because a string in this slot is an icon name by convention. The union
    // collapses to `ReactNode`, so TypeScript cannot narrow to `IconName` on its own.
    return (
      <Icon
        className={className}
        name={content as IconName}
        purpose="decorative"
        size={size}
      />
    );
  }

  return className ? (
    <span className={className}>{content}</span>
  ) : (
    <>{content}</>
  );
};
