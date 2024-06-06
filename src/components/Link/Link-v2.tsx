import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { Size } from '../../util/variant-types';
import { IconV2 as Icon, type IconNameV2 as IconName } from '../Icon';

import styles from './Link-v2.module.css';

export type LinkV2Props<ExtendedElement = unknown> =
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
     * * **inline** - Inline link inherits the text size established within the `<p>` paragraph they are embedded in.
     * * **standalone** - Users can choose from the available sizes.
     */
    context?: 'inline' | 'standalone';
    /**
     * (trailing) icon to use with the link
     */
    icon?: Extract<IconName, 'chevron-right' | 'open-in-new'>;
    /**
     * Extra or lowered colors added to a link
     */
    emphasis?: 'default' | 'high' | 'low';
    /**
     * Link size inherits from the surrounding text.
     */
    size?: Extract<Size, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
    /**
     * The variant treatment for links (use "inverse" on dark backgrounds).
     *
     * **Default is `"default"`**.
     */
    variant?: 'default' | 'inverse';
  } & ExtendedElement;

/**
 * `import {Link} from "@chanzuckerberg/eds";`
 *
 * Component for making styled anchor tags. Links allow users to navigate within or between a web page(s) or app(s).
 *
 */
export const Link = forwardRef<HTMLAnchorElement, LinkV2Props>(
  (
    {
      as: Component = 'a',
      children,
      className,
      context,
      emphasis = 'default',
      icon,
      size = 'md',
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

    const iconSize = size && (['xl', 'lg'].includes(size) ? '1.5rem' : '1rem');

    // TODO-AH: Inline links cannot be lowEmphasis (add runtime warning)
    // TODO-AH: chevron-right only allowr when lowEmphasis is used (add runtime warning)
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
);

Link.displayName = 'Link';
