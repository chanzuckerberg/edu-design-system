import clsx from 'clsx';
import React from 'react';
import styles from './BreadcrumbsItem.module.css';
import DropdownMenu from '../DropdownMenu';
import Icon from '../Icon';

type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL for the breadcrumbs item.
   * Required since breadcrumbs should reroute user.
   * Null case is used for the collapsed variant, which uses dropdownMenuItems which has hrefs.
   */
  href: string | null;
  /**
   * URLs for the collapsed breadcrumbs variant.
   * Should be <DropdownMenuItem href={href}>{text}</DropdownMenuItem>.
   */
  dropdownMenuItems?: React.ReactNode[];
  /**
   * Breadcrumbs item text.
   */
  text?: string;
  /**
   * Behavior variations for the breadcrumbs item.
   * - **back** - results in a left facing icon, usually denoting the second last breadcrumb item in a mobile breakpoint.
   * - **collapsed** - results in an ellipsis, where interaction spawns a dropdown menu containing more links.
   */
  variant?: 'back' | 'collapsed';
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {BreadcrumbsItem} from "@chanzuckerberg/eds";
 * ```
 *
 * A single breadcrumb subcomponent, to be used in the Breadcrumbs component.
 */
export const BreadcrumbsItem = ({
  dropdownMenuItems,
  className,
  href,
  text,
  variant,
  ...other
}: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  /**
   * Closes the dropdown menu if there is focus or click outside.
   */
  const handleBlur = (event: React.FocusEvent<HTMLElement, Element>) => {
    if (!event.currentTarget.contains(event.relatedTarget) && isActive) {
      setIsActive(false);
    }
  };

  const componentClassName = clsx(
    styles['breadcrumbs__item'],
    variant === 'back' && styles['breadcrumbs__item-back'],
    className,
  );

  const ellipsisButtonClassName = clsx(
    styles['breadcrumbs__link'],
    styles['breadcrumbs__ellipsis'],
  );

  const dropdownMenuClassName = clsx(
    styles['breadcrumbs__dropdown-menu'],
    isActive && styles['breadcrumbs__dropdown-menu--active'],
  );

  const getInteractionElement = () => {
    if (variant === 'collapsed') {
      /* The collapsed variant is a button with ellipsis. Interaction spawns a dropdown containing the collapsed breadcrumb links. */
      return (
        <>
          <button
            className={ellipsisButtonClassName}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            ...
          </button>
          <DropdownMenu
            className={dropdownMenuClassName}
            isActive={isActive}
            onBlur={handleBlur}
          >
            {dropdownMenuItems}
          </DropdownMenu>
        </>
      );
    } else if (variant === 'back') {
      /* The back variant is a left pointing icon that usually links to the second last breadcrumb href. */
      return (
        <a className={styles['breadcrumbs__link']} href={href as string}>
          <Icon
            className={styles['breadcrumbs__back-icon']}
            name="chevron-left"
            purpose="informative"
            title={href as string}
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
      {/* The decorative separator between breadcrumbs items. */}
      <span aria-hidden className={styles['breadcrumbs__icon']}>
        /
      </span>
    </li>
  );
};
