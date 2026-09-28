import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';

type FpoBlockProps = {
  /**
   * Label rendered inside the block. Keep it very short: these slots are sized for an
   * icon, not a sentence. Hidden below 20px, where it would render as a smudge rather
   * than as text.
   */
  children?: ReactNode;
  /**
   * Extra classes for the rare slot that needs more than a size change.
   */
  className?: string;
  /**
   * Width and height in pixels.
   *
   * Always pass the size of the icon the slot itself renders, so the block occupies the
   * same space the icon did and the story's layout does not change. Those sizes are set
   * per component, not shared: `IconSlot` is given `24px` in `Accordion`, `InputField`,
   * and `PopoverListItem`, `16px` in `DataTable`, and no size at all in `SelectionChip`
   * and `InputChip`, where `Icon` falls back to `1em` and resolves to 14px against the
   * chip's own type. `Avatar`, `Button`, and `Card` size their slot from the component's
   * own `size` prop, so those need a block per size.
   */
  size?: number;
};

/**
 * For Placement Only block, sized to drop into a component's leading, trailing, or
 * indicator content slot.
 *
 * Storybook-only. Stories use this instead of a real icon so the slot itself is the
 * subject of the story, rather than whichever icon happened to be picked. It reuses the
 * shared `fpo` class from `.storybook/css/styleguide-only.css` for the placeholder look,
 * and introduces no new placeholder styling of its own.
 *
 * Sizing is applied inline rather than through utility classes on purpose. `.fpo` sets a
 * 16px padding and 16px type intended for page-sized placeholders, and it loads after
 * Tailwind, so an equal-specificity utility like `p-0` loses the cascade and the block
 * renders at ~68px square. At that size it pushes out the height of every row it sits
 * in. Inline styles win outright, and they also sidestep having two conflicting `w-*`
 * classes on one element, which this repo has no `tailwind-merge` to resolve.
 *
 * Renders a `span` rather than a `div` because several of these slots sit inside a
 * `button` or a `label`, which only accept phrasing content. `.fpo` already sets
 * `display: flex`, so the span still lays out as a box.
 *
 * Marked `aria-hidden` because it stands in for a decorative icon, which `IconSlot`
 * renders `aria-hidden` too. It matters most where a control takes its accessible name
 * from its own contents: without it, the Accordion row carrying all three slots
 * announces as "FPO All three at once FPO FPO", and a `PopoverListItem` as
 * "FPO Add comment FPO". Blocks below the label threshold render no text and so leak
 * nothing, but they are hidden too, since an empty decorative box is not worth a node in
 * the accessibility tree either.
 */
export default function FpoBlock({
  children = 'FPO',
  className,
  size = 24,
}: FpoBlockProps) {
  // Below this the label is smaller than it is legible, and reads as a smudge rather
  // than as text. The dashed block on its own is enough to signal a placeholder.
  const showsLabel = size >= 20;

  return (
    <span
      aria-hidden="true"
      className={clsx('fpo', className)}
      style={{
        height: size,
        width: size,
        // Keep the label proportional to the block so "FPO" fits at every size we use.
        fontSize: Math.round(size * 0.375),
        flex: 'none',
        lineHeight: 1,
        overflow: 'hidden',
        padding: 0,
      }}
    >
      {showsLabel && children}
    </span>
  );
}
