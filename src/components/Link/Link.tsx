import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { assertEdsUsage } from '../../util/logging';
import type { Emphasis, Size } from '../../util/variant-types';
import { IconSlot, useSemanticIcon, type IconName } from '../Icon';

import styles from './Link.module.css';

export type LinkProps<ExtendedElement = unknown> =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    // Component API
    /**
     * Component used to render the element. Meant to support interaction with framework navigation libraries.
     *
     * **Default is `"a"`**.
     */
    as?: string | React.ElementType;
    /**
     * The link contents or label. Using ReactNode to support customized text treatments
     */
    children: React.ReactNode;
    // Design API
    /**
     * Where `Link` sits alongside other text and content:
     *
     * * **inline** - Inline link inherits the text size/color established within the `<p>` or other tag they are embedded in.
     * * **standalone** - Users can choose from the available sizes, select variants, and add a trailing icon.
     *
     * **Default is `"inline"`**.
     *
     * ----
     *
     * **Note**: This will only apply when `"standalone"` is used
     */
    context?: 'inline' | 'standalone';
    /**
     * (trailing) icon to use with the link (when `context` is `"standalone"`)
     *
     * This names which of two roles the link is filling, rather than picking a glyph:
     * `"open-in-new"` marks a link that leaves the site, and `"chevron-right"` a
     * low-emphasis link that continues in place. The glyph `"open-in-new"` draws is
     * semantic and comes from `IconProvider`, so an app changes it everywhere at once.
     */
    icon?: Extract<IconName, 'chevron-right' | 'open-in-new'>;
    /**
     * Extra or lowered colors added to a link
     */
    emphasis?: Emphasis | 'default';
    /**
     * The size of the link (when its context is `"standalone"`).
     *
     * ----
     *
     * **Note**: This will only apply when `"standalone"` is used
     */
    size?: Extract<Size, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
    /**
     * The variant treatment for **standalone** links (use "inverse" on dark backgrounds).
     *
     * **Default is `"default"`**.
     *
     * ----
     *
     * **Note**: This will only apply when `"standalone"` is used
     */
    variant?: 'default' | 'inverse';
  } & ExtendedElement;

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Inline | Embedded in body text, styled with an underline. | Reference external docs, "Learn more" links, citing sources. |
 * | Standalone | Appears on its own, often in navs or action areas. | Footer links, header navigation, CTA-style links (when not using a button). |
 * | External | Opens to a different domain or website; often includes an icon or notice. | Links to external sites, third-party tools, privacy policy or support articles. |
 * | Internal navigation | Navigates within the app or website (SPA routing or anchor-based). | Page-to-page navigation, in-page jump links. |
 * | Breadcrumb | Represents a step in a navigation trail. | Hierarchical navigation, backtracking in nested pages. |
 * | Disabled | Styled like a link but non-interactive. | Unavailable destinations, permission-based restrictions. |
 *
 * ### Best Practices
 *
 * * **Do** use links primarily to support navigation, directing users to another page or a different portion of the same page.
 * * **Don't** use links as actions that change data or state, or that trigger a high-emphasis action; use `Button` instead.
 * * **Do** display the external ("open-in-new") icon when the link text needs support to convey an external domain.
 * * **Don't** use other icons to represent an external link.
 * * **Do** display an underline on inline links to reinforce interactivity and accessibility.
 * * **Don't** use the low emphasis variant in inline contexts, as it can fail to convey interactivity.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use a meaningful, descriptive label that clearly indicates the link's destination.
 * * Make sure the link reflects the content people will find at the destination.
 * * Use "Learn more" for links to more information, ensuring the preceding content provides context.
 *
 * ### Don'ts
 *
 * * Don't use generic phrases like "click here".
 * * Don't include leading spaces or end punctuation within the link.
 * * Don't use the same link text for different destinations on the same page.
 * * Don't use excessively long link text.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      as: Component = 'a',
      children,
      className,
      context,
      emphasis = 'default',
      icon,
      size,
      variant = 'default',
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      className,
      styles['link'],
      context && styles[`link--context-${context}`],
      emphasis && styles[`link--emphasis-${emphasis}`],
      icon && styles['link--has-right-icon'],
      size && styles[`link--size-${size}`],
      variant === 'inverse' && styles[`link--variant-${variant}`],
    );

    const iconSize = size && (['xl', 'lg'].includes(size) ? '24px' : '16px');

    // Only the external-link mark is semantic. `chevron-right` is this component's own
    // continuation affordance and has no equivalent role elsewhere in the system, so it
    // is not in the semantic set and renders as named.
    const openInNewIcon = useSemanticIcon('open-in-new');
    const iconToUse = icon === 'open-in-new' ? openInNewIcon : icon;

    assertEdsUsage(
      [context === 'inline' && emphasis === 'low'],
      'Inline links cannot be lowEmphasis',
    );

    assertEdsUsage(
      [context === 'inline' && !!icon],
      'Inline links cannot show icons',
    );

    assertEdsUsage(
      [context === 'inline' && variant === 'inverse'],
      'Variant can only be used when context is "standalone"',
    );

    assertEdsUsage(
      [context === 'inline' && typeof size !== 'undefined'],
      'Size can only be used when context is "standalone"',
    );

    assertEdsUsage(
      [icon === 'chevron-right' && emphasis !== 'low'],
      'Icon "chevron-right" only allowed when lowEmphasis is used',
    );

    return (
      <Component className={componentClassName} ref={ref} {...other}>
        {children}
        {icon && context === 'standalone' && (
          <IconSlot
            className={styles['link__icon']}
            content={iconToUse}
            purpose="decorative"
            size={iconSize}
          />
        )}
      </Component>
    );
  },
);

Link.displayName = 'Link';
