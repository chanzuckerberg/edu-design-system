import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { assertEdsUsage } from '../../util/logging';
import type { Emphasis, Size } from '../../util/variant-types';
import {
  hasSlotContent,
  IconSlot,
  useSemanticIcon,
  type SemanticIconName,
} from '../Icon';

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
     * The role of the trailing icon on the link (when `context` is `"standalone"`)
     *
     * This names which of two roles the link is filling rather than picking a glyph:
     * `"open-in-new"` marks a link that leaves the site, and `"forward"` a low-emphasis
     * link that carries the reader onward. Both glyphs come from `IconProvider`, so an app
     * changes either one everywhere at once.
     */
    icon?: Extract<SemanticIconName, 'forward' | 'open-in-new'>;
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
    const iconSize = size && (['xl', 'lg'].includes(size) ? '24px' : '16px');

    // TODO(next-major): remove, with the assert below. Before v19 this prop took the glyph
    // name `'chevron-right'`; it now names the `forward` role. The codemod rewrites the
    // value, but untyped code can still pass the old one, where it matches no role, resolves
    // to nothing, and leaves the link with its spacing and no icon. Treated as `forward`
    // until then, so the affordance survives.
    const isLegacyChevron = (icon as string) === 'chevron-right';

    // TODO(next-major): remove.
    assertEdsUsage(
      [isLegacyChevron],
      'Link no longer takes `icon="chevron-right"`. That glyph is now the `forward` role, so pass `icon="forward"` and set `forward` on an `IconProvider` to change it. Run `npx eds-migrate 18-to-19` to update the value.',
    );

    // The role the link is actually filling, which is what the rules below are about. The
    // raw prop is not: a legacy `chevron-right` fills `forward`, and checking the prop let
    // that slip past the low-emphasis rule while still drawing the affordance.
    const role = isLegacyChevron ? 'forward' : icon;

    const iconToUse = useSemanticIcon(role);

    // One condition for the icon and the space it sits in, so neither can outlive the other.
    // `iconToUse` is empty when no `icon` was given, and when one names something that is
    // not a role at all — which untyped code can still pass. A role that is real always
    // draws something, since `IconProvider` rejects an entry that would not.
    const showsIcon = context === 'standalone' && hasSlotContent(iconToUse);

    const componentClassName = clsx(
      className,
      styles['link'],
      context && styles[`link--context-${context}`],
      emphasis && styles[`link--emphasis-${emphasis}`],
      showsIcon && styles['link--has-right-icon'],
      size && styles[`link--size-${size}`],
      variant === 'inverse' && styles[`link--variant-${variant}`],
    );

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
      [role === 'forward' && emphasis !== 'low'],
      'Icon "forward" only allowed when lowEmphasis is used',
    );

    return (
      <Component className={componentClassName} ref={ref} {...other}>
        {children}
        {showsIcon && (
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
