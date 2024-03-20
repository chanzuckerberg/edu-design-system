import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { Size } from '../../util/variant-types';
import type { IconName } from '../Icon';
import Icon from '../Icon';

import styles from './Link-v2.module.css';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  // Component API
  /**
   * Component used to render the element. Meant to support interaction with framework navigation libraries.
   * TODO-AH: support frameworks that may not use (or replace) `href` for some other prop
   *
   * **Default is `"a"`**.
   */
  as?: string | React.ElementType;
  /**
   * The link contents or label.
   */
  children: string;
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
};

/**
 * `import {Link} from "@chanzuckerberg/eds";`
 *
 * Component for making styled anchor tags. Links allow users to navigate within or between a web page(s) or app(s).
 *
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
      size = 'md',
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
    );

    const iconSize = size && (['xl', 'lg'].includes(size) ? '1.5rem' : '1rem');

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
