import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import type { Preset } from '../../util/variant-types';
import styles from './Heading.module.css';

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
 * `import {Heading} from "@chanzuckerberg/eds";`
 *
 * A component for styling heading text (`<h1>`-`<h6>`).
 *
 * Be careful to pass the correct heading element via the `as` prop to avoid skipping heading levels because [heading levels increasing by only one level at a time is important for screen reader users.](https://www.w3.org/WAI/tutorials/page-structure/headings/)
 */
export const Heading = forwardRef(
  (
    { as = 'h1', children, className, preset, ...other }: HeadingProps,
    ref: React.ForwardedRef<HTMLHeadingElement>,
  ) => {
    const TagName = as;
    const componentClassName = clsx(
      styles['heading'],
      preset && styles[`heading--${preset}`],
      !preset && styles[`heading--${headingPresetMap[as]}`],
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
