import React, { Fragment } from 'react';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import icons from '../../icons/spritemap';
import type { IconOrContent } from '../../util/utility-types';

/**
 * Whether a slot value will render anything.
 *
 * These slots take any `ReactNode`, so a plain truthiness check is wrong twice over: it
 * treats `0` as absent, and `{0 && <El />}` leaks a stray "0" into the markup. Only the
 * values React itself renders as nothing count as empty here.
 *
 * An array is judged by what is in it, because that is what React does with one. `[]` and
 * `[null, false]` render nothing, so they are empty; `[0]` renders "0", so it is not. This
 * matters for the arrays a caller does not write on purpose — an `items.map(...)` over an
 * empty list, or a fragment's children arriving together — where counting the array itself
 * as content reserves a wrapper and lays out space around nothing. Recursive, because React
 * flattens nested arrays before rendering them.
 *
 * Arrays only, though React renders any iterable. Inspecting one means iterating it, which
 * exhausts a generator and leaves nothing for the caller to render afterwards — losing valid
 * content, which is worse than the alternative this gives up: a non-array iterable counts as
 * content even when it would yield none, so an empty `Set` reserves the space an icon would
 * have taken. Pass an array if the collection might be empty.
 *
 * A fragment is judged by its children too, since it contributes no element of its own:
 * `<></>` renders nothing at all, so counting it as content would leave an icon-only control
 * blank but still clickable. Every other element counts, including one that happens to
 * render nothing — `<span>{null}</span>` still produces a node, and what a component returns
 * cannot be known without rendering it.
 */
export function hasSlotContent(content: IconOrContent): boolean {
  if (Array.isArray(content)) {
    return content.some((item) => hasSlotContent(item));
  }

  if (React.isValidElement(content) && content.type === Fragment) {
    return hasSlotContent((content.props as { children?: ReactNode }).children);
  }

  return (
    content !== null &&
    content !== undefined &&
    typeof content !== 'boolean' &&
    content !== ''
  );
}

/**
 * Whether a slot will actually put something on screen.
 *
 * Stricter than `hasSlotContent`, which only asks whether a value is renderable in
 * principle. A string that is not an EDS icon name passes that and then draws nothing,
 * because `Icon` reports it and renders `null`. Use this wherever layout depends on the icon
 * being visible — reserving space for an icon that never arrives leaves a gap.
 *
 * `hasSlotContent` stays the right question for "did the consumer give me something", which
 * is what the content slots ask when deciding precedence.
 */
export function willRenderSlotContent(content: IconOrContent) {
  if (!hasSlotContent(content)) {
    return false;
  }

  return typeof content === 'string'
    ? Object.prototype.hasOwnProperty.call(icons, content)
    : true;
}

type IconSlotPropsBase = {
  /**
   * Element used to wrap custom content so it can carry `className`.
   *
   * Defaults to `span`, which is valid wherever the slot itself is, including inside a
   * `button`. Use `div` when the slot sits in a flow-content container, so consumers
   * passing block-level content do not produce a `span` wrapping a `div`.
   */
  as?: 'div' | 'span';
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
  const { as: Wrapper = 'span', className, content, size } = props;

  if (!hasSlotContent(content)) {
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
    <Wrapper className={className}>{content}</Wrapper>
  ) : (
    <>{content}</>
  );
};
