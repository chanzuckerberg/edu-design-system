import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type {
  ReactNode,
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import type { AnyPreset, Preset } from '../../util/variant-types';

import styles from '../Text/Text.module.css';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  /**
   * Which `h1`-`h6` tag renders. Pick it from the document structure, by the level
   * the page outline calls for, not by the size you want. Each level brings its own
   * default preset, which `preset` can override.
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
   * Which typography treatment renders. Pick it from the design, and only when the
   * design asks for something other than the default for the level set by `as`. It
   * changes the treatment alone, never which tag renders.
   *
   * For details, see https://chanzuckerberg.github.io/edu-design-system/?path=/story/design-tokens-tier-2-usage--typography
   */
  preset?: Preset;
};

/**
 * `HeadingProps`, widened to also accept the presets a component reserves for its own use.
 */
export type InternalHeadingProps = Omit<HeadingProps, 'preset'> & {
  preset?: AnyPreset;
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
 * `as` comes from document structure, `preset` comes from design. Set `as` to the level the
 * page outline calls for, then set `preset` only when the design asks for a treatment other
 * than that level's default.
 *
 * | Prop | What it sets | Where the value comes from |
 * |------|--------------|----------------------------|
 * | `as` | Which `h1`-`h6` tag renders, and the default preset that comes with that level. | The document structure: `h1` for the page title, `h2` for a section within it. |
 * | `preset` | The typography treatment, without changing which tag renders. | The design: a section heading drawn to read smaller than its level implies. |
 *
 * The two stay independent. Passing a `preset` never changes the tag, and the tag you pick
 * never overrides a `preset` you passed, so a heading can sit at the right level in the
 * outline and still carry the treatment design asked for.
 *
 * Each level brings a default preset, used when `preset` is left off:
 *
 * | `as` | Default `preset` |
 * |------|------------------|
 * | `h1` | `headline-lg` |
 * | `h2` | `headline-md` |
 * | `h3` | `headline-sm` |
 * | `h4` | `title-lg` |
 * | `h5` | `title-md` |
 * | `h6` | `title-sm` |
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `Heading` in place of any `h1`-`h6` HTML tag.
 * * Pass the correct heading element via `as` to avoid skipping heading levels, because heading levels increasing by only one level at a time is important for screen reader users.
 * * Reach for `preset` when the design calls for a treatment the level's default doesn't give you.
 *
 * ### Don'ts
 *
 * * Avoid all direct usage of `h1`-`h6` tags. Render them through `Heading` and its `as` prop instead.
 * * Don't reach for `preset` to change the heading level. Change `as` so the visual order and the document outline stay in step.
 * * Don't pick `as` for the size it renders at. Set the level the outline calls for, then set `preset` for the size.
 *
 * ## Presets
 *
 * `preset` only takes the reusable presets. A handful of presets belong to one component
 * (`tag`, `appHeader-label`, and friends) and are not available here, since they carry
 * that component's own treatment and can change with it.
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

/**
 * `Heading`, typed to also accept the presets components reserve for their own use.
 *
 * For use inside EDS components only. This is deliberately absent from the package
 * exports, so consumers get `Heading` and its reusable presets instead.
 *
 * The cast widens the `preset` type; nothing changes at runtime, since the component
 * only ever interpolates `preset` into a class name.
 */
export const InternalHeading = Heading as ForwardRefExoticComponent<
  InternalHeadingProps & RefAttributes<HTMLHeadingElement>
>;
