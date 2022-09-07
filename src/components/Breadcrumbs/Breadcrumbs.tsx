import clsx from 'clsx';
import debounce from 'lodash.debounce';
import React, { ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './Breadcrumbs.module.css';
import { flattenReactChildren } from '../../util/flattenReactChildren';
import BreadcrumbsItem from '../BreadcrumbsItem';
import DropdownMenuItem from '../DropdownMenuItem';

type Props = {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  'aria-label'?: string;

  /**
   * HTML id for the component
   */
  id?: string;
};

/**
 * ```ts
 * import {Breadcrumbs} from "@chanzuckerberg/eds";
 * ```
 *
 * List of Breadcrumb components showing the user where they are in the system and allow them
 * to navigate to parent pages.
 */
export const Breadcrumbs = ({
  className,
  children,
  id,
  'aria-label': ariaLabel = 'breadcrumbs links',
  ...other
}: Props) => {
  const [shouldTruncate, setShouldTruncate] = React.useState(false);

  const ref = React.useRef<HTMLUListElement>(null);

  /**
   * Checks if breadcrumbs would overflow
   */
  const updateShouldTruncate = () => {
    setShouldTruncate(false);
    if (
      ref &&
      ref.current &&
      ref.current.clientWidth < ref.current.scrollWidth
    ) {
      setShouldTruncate(true);
    }
  };
  const debouncedUpdateShouldTruncate = debounce(updateShouldTruncate, 200);

  /**
   * Needs useLayoutEffect over useEffect since it needs to be run before paint.
   * TODO: with React 18, might be able to use useEffect https://github.com/reactjs/reactjs.org/blob/d14cbdca2445cd676526c4c52e1e106342ff7bb3/content/docs/hooks-reference.md?plain=1#L155
   */
  React.useLayoutEffect(() => {
    updateShouldTruncate();
    window.addEventListener('resize', debouncedUpdateShouldTruncate);
    return () => {
      window.removeEventListener('resize', debouncedUpdateShouldTruncate);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * 1) Flattens breadcrumb items that may be wrapped in React.Fragment into an array so they can be manipulated easily
   * 2) Finds the second to last breadcrumb item for mobile Breadcrumbs back icon
   * 3) Finds all the breadcrumb items between the first and last breadcrumb items so they can be placed in the dropdown.
   */
  const breadcrumbsItems = flattenBreadcrumbsItems(children); /* 1 */
  /* 2 */
  const backBreadCrumb =
    breadcrumbsItems.length > 1
      ? React.cloneElement(
          breadcrumbsItems[
            breadcrumbsItems.length - 2
          ] as React.ReactElement<any>,
          {
            variant: 'back',
          },
        )
      : null;
  /* 3 */
  const dropdownMenuItems = breadcrumbsItems
    .slice(1, breadcrumbsItems.length - 1)
    .map((breadcrumbItem, index) => {
      const menuItem = breadcrumbItem as JSX.Element;
      return (
        <DropdownMenuItem
          href={menuItem.props.href}
          key={`breadcrumb-menu-item-${index}`}
        >
          {menuItem.props.text}
        </DropdownMenuItem>
      );
    });

  const generatedId = useUID();
  const breadcrumbsId = id || generatedId;

  const componentClassName = clsx(styles['breadcrumbs'], className);
  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={breadcrumbsId}
      {...other}
    >
      {/**
       * 1) Back icon breadcrumb always exists, just hidden via css depending on breakpoint to increase performance
       * 2) The ellipsis breadcrumb with dropdown only exists if there would be overflow and there are 3 or more breadcrumb items
       * 3) If (2) conditions aren't met, display all breadcrumbs
       */}
      <ul className={styles['breadcrumbs__list']} ref={ref}>
        {/* 1 */}
        {backBreadCrumb}
        {/* 2 */}
        {shouldTruncate && breadcrumbsItems.length > 2 ? (
          <>
            {breadcrumbsItems[0]}
            <BreadcrumbsItem
              dropdownMenuItems={dropdownMenuItems}
              href={null}
              variant="collapsed"
            />
            {breadcrumbsItems[breadcrumbsItems.length - 1]}
          </>
        ) : (
          /* 3 */
          breadcrumbsItems
        )}
      </ul>
    </nav>
  );
};

const flattenBreadcrumbsItems = (children: React.ReactNode) => {
  const flattenedChildren = flattenReactChildren(children);
  /**
   * Throws error if children are not BreadcrumbsItems
   */
  const shouldThrowError = (flattenedChildren as JSX.Element[]).some(
    (child) => {
      if (child.type === BreadcrumbsItem || child.type === Breadcrumbs.Item) {
        return false;
      }
      return true;
    },
  );
  if (process.env.NODE_ENV !== 'production' && shouldThrowError) {
    throw 'Only <Breadcrumbs.Item>, <BreadcrumbsItem>, or React.Fragment of aforementioned components allowed';
  }
  return flattenedChildren;
};

Breadcrumbs.Item = BreadcrumbsItem;
