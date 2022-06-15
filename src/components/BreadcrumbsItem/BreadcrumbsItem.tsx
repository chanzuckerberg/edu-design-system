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
   * Required since breadcrubms should reroute user.
   * Null case is used for the collapsed variant, which uses dropdownMenuItems which has hrefs.
   */
  href: string | null;
  /**
   * URLs for the collapsed breadcrumbs variant.
   */
  dropdownMenuItems?: React.ReactNode[];
  /**
   * Breadcrumbs item text
   */
  text?: string;
  /**
   * Back button variant for mobile.
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

  const ellipseButtonClassName = clsx(
    styles['breadcrumbs__link'],
    styles['breadcrumbs__ellipse'],
  );

  const dropdownMenuClassName = clsx(
    styles['breadcrumbs__dropdown-menu'],
    isActive && styles['breadcrumbs__dropdown-menu--active'],
  );

  return (
    <li className={componentClassName} {...other}>
      {variant === 'collapsed' ? (
        <>
          <button
            className={ellipseButtonClassName}
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
      ) : (
        <a className={styles['breadcrumbs__link']} href={href as string}>
          {variant === 'back' ? (
            <Icon
              className={styles['breadcrumbs__back-icon']}
              name="chevron-left"
              purpose="informative"
              title="back"
            />
          ) : (
            text
          )}
        </a>
      )}
      <span aria-hidden className={styles['breadcrumbs__icon']}>
        /
      </span>
    </li>
  );
};
