import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { assertEdsUsage } from '../../util/logging';
import type {
  HasDisplayName,
  PolymorphicProps,
} from '../../util/utility-types';
import type { Size } from '../../util/variant-types';
import Icon, { type IconName } from '../Icon';

import styles from './Link.module.css';

const DEFAULT_LINK_TAG = 'a' as const;

export type LinkProps<
  ElementTag extends React.ElementType = typeof DEFAULT_LINK_TAG,
> = PolymorphicProps<
  ElementTag,
  {
    // Component API
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
     */
    icon?: Extract<IconName, 'chevron-right' | 'open-in-new'>;
    /**
     * Extra or lowered colors added to a link
     */
    emphasis?: 'default' | 'high' | 'low';
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
  }
>;

/**
 * Internal type, used to cast the exported Link component. This helps us type "as" correctly
 * since we are using forwardRef.
 */
type internal_Link = (<
  ElementTag extends React.ElementType = typeof DEFAULT_LINK_TAG,
>(
  props: LinkProps<ElementTag> & React.RefAttributes<any>,
) => React.JSX.Element) &
  HasDisplayName;

/**
 * `import {Link} from "@chanzuckerberg/eds";`
 *
 * Component for making styled anchor tags. Links allow users to navigate within or between a web page(s) or app(s).
 *
 * Inline links inherit the color of the surrounding container, while when using `context` set to `standalone`, links have specific colors.
 */
export const Link = forwardRef(
  <ElementTag extends React.ElementType = typeof DEFAULT_LINK_TAG>(
    props: LinkProps<ElementTag>,
    ref: React.Ref<any>,
  ) => {
    const {
      as: Component = 'a',
      children,
      className,
      context,
      emphasis = 'default',
      icon,
      size,
      variant = 'default',
      ...other
    } = props;

    const componentClassName = clsx(
      className,
      styles['link'],
      context && styles[`link--context-${context}`],
      emphasis && styles[`link--emphasis-${emphasis}`],
      icon && styles['link--has-right-icon'],
      size && styles[`link--size-${size}`],
      variant === 'inverse' && styles[`link--variant-${variant}`],
    );

    const iconSize = size && (['xl', 'lg'].includes(size) ? '1.5rem' : '1rem');

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
          <Icon
            className={styles['link__icon']}
            name={icon}
            purpose="decorative"
            size={iconSize}
          />
        )}
      </Component>
    );
  },
) as internal_Link;

Link.displayName = 'Link';
