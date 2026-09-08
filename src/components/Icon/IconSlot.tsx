import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import type { IconOrContent } from '../../util/utility-types';

type IconSlotPropsBase = {
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

export type IconSlotProps = IconSlotPropsBase &
  (
    | {
        /**
         * Mirrors `Icon`'s `purpose`, and applies only when rendering an icon name.
         * Custom content carries its own accessible treatment.
         */
        purpose?: 'decorative';
        title?: never;
      }
    | {
        purpose: 'informative';
        title: string;
      }
  );

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
 * `purpose` and `title` describe the icon branch only. When a consumer supplies their
 * own content, they own its accessible treatment.
 *
 * Not exported from the package. Consumers use the slot props on each component.
 */
export const IconSlot = (props: IconSlotProps) => {
  const { className, content, size } = props;

  if (content === null || content === undefined || content === false) {
    return null;
  }

  if (typeof content === 'string') {
    // Safe because a string in this slot is an icon name by convention. The union
    // collapses to `ReactNode`, so TypeScript cannot narrow to `IconName` on its own.
    const name = content as IconName;

    return props.purpose === 'informative' ? (
      <Icon
        className={className}
        name={name}
        purpose="informative"
        size={size}
        title={props.title}
      />
    ) : (
      <Icon
        className={className}
        name={name}
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
