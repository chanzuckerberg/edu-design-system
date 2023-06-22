import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
import Menu from '../Menu';
import styles from './BreadcrumbsItem.module.css';

type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL for the breadcrumbs item.
   * Required since breadcrumbs should reroute user.
   * Null case is used for the collapsed variant, which uses Menu Items which has hrefs.
   */
  href: string | null;
  /**
   * URLs for the collapsed breadcrumbs variant.
   * Should be <Menu.Item href={href}>{text}</Menu.Item>.
   */
  menuItems?: React.ReactNode[];
  /**
   * Custom string separator after current breadcrumb item.
   * Defaults to '/'
   */
  separator?: '|' | '>' | '/';
  /**
   * Breadcrumbs item text.
   */
  text?: string;
  /**
   * Behavior variations for the breadcrumbs item.
   * - **back** - results in a left facing icon, usually denoting the second last breadcrumb item in a mobile breakpoint.
   * - **collapsed** - results in an ellipsis, where interaction spawns a Menu containing more links.
   */
  variant?: 'back' | 'collapsed';
};

/**
 * `import {BreadcrumbsItem} from "@chanzuckerberg/eds";`
 *
 * A single breadcrumb subcomponent, to be used in the Breadcrumbs component.
 */
export const BreadcrumbsItem = ({
  className,
  href,
  menuItems,
  separator = '/',
  text,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['breadcrumbs__item'],
    variant === 'back' && styles['breadcrumbs__item-back'],
    className,
  );

  const ellipsisButtonClassName = clsx(
    styles['breadcrumbs__link'],
    styles['breadcrumbs__ellipsis'],
  );

  const getInteractionElement = () => {
    if (variant === 'collapsed') {
      /* The collapsed variant is a button with ellipsis. Interaction spawns a Menu containing the collapsed breadcrumb links. */
      return (
        <Menu>
          <Menu.PlainButton
            aria-label="Show more breadcrumbs"
            className={ellipsisButtonClassName}
          >
            ...
          </Menu.PlainButton>
          <Menu.Items>{menuItems}</Menu.Items>
        </Menu>
      );
    } else if (variant === 'back') {
      /* The back variant is a left pointing icon that usually links to the second last breadcrumb href. */
      return (
        <a className={styles['breadcrumbs__link']} href={href as string}>
          <Icon
            className={styles['breadcrumbs__back-icon']}
            name="chevron-left"
            purpose="informative"
            title={text as string}
          />
        </a>
      );
    } else {
      /* The default variant displays the prop text and links the prop href. */
      return (
        <a className={styles['breadcrumbs__link']} href={href as string}>
          {text}
        </a>
      );
    }
  };

  return (
    <li className={componentClassName} {...other}>
      {getInteractionElement()}
      <span aria-hidden className={styles['breadcrumbs__separator']}>
        {separator}
      </span>
    </li>
  );
};
