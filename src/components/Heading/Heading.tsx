import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import type { Preset } from '../../util/variant-types';

import styles from '../Text/Text.module.css';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /**
   * This prop can be used to specify which level heading should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another.
   *
   * **Default is `"h1"`**.
   */
  as?: HeadingElement;
  /**
   * The contents of the header tag, usually just text, but can include other content.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * The specified tab index of the heading element (used for focusing in tabbing)
   */
  tabIndex?: number;
  /**
   * Prop to set the desired typography value used in design. Acceptable values
   * match those used across the design system.
   *
   * For details, see https://chanzuckerberg.github.io/edu-design-system/?path=/story/design-tokens-tier-2-usage--typography
   */
  preset?: Preset;
};

/**
 * Given a certain HeadingElement, what is the default preset to use?
 */
const headingPresetMap: Record<HeadingElement, Preset> = {
  h1: 'headline-lg',
  h2: 'headline-md',
  h3: 'headline-sm',
  h4: 'title-lg',
  h5: 'title-md',
  h6: 'title-sm',
};

/**
 * ## Usage
 *
 * Heading is strictly used to style heading tags used in a page. Typography presets are defined
 * for each heading level (h1-h6) and can be overridden.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Semantic level | `as` picks which tag renders, and brings the default preset for that level with it. | `h1` for the page title, `h2` for a section within it. |
 * | Restyled | `preset` overrides the default typography without changing which tag renders. | A section heading that needs to read smaller than its level implies. |
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `Heading` in place of any `h1`-`h6` HTML tag.
 * * Pass the correct heading element via `as` to avoid skipping heading levels, because heading levels increasing by only one level at a time is important for screen reader users.
 *
 * ### Don'ts
 *
 * * Avoid all direct usage of `h1`-`h6` tags. Render them through `Heading` and its `as` prop instead.
 * * Don't reach for `preset` to change the heading level. Change `as` so the visual order and the document outline stay in step.
 *
 * ## Resources
 *
 * * https://www.w3.org/WAI/tutorials/page-structure/headings/
 */
export const Heading = forwardRef(
  (
    { as = 'h1', children, className, preset, ...other }: HeadingProps,
    ref: React.ForwardedRef<HTMLHeadingElement>,
  ) => {
    const TagName = as;
    const componentClassName = clsx(
      styles['text'],
      preset && styles[`text--${preset}`],
      !preset && styles[`text--${headingPresetMap[as]}`],
      className,
    );
    return (
      <TagName className={componentClassName} ref={ref} {...other}>
        {children}
      </TagName>
    );
  },
);

Heading.displayName = 'Heading';
