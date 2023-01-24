import clsx from 'clsx';
import debounce from 'lodash.debounce';
import React, { type ReactNode } from 'react';
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
 * `import {Breadcrumbs} from "@chanzuckerberg/eds";`
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
   * Needs useLayoutEffect over useEffect since it needs to be run before paint.
   * Note: with React 18, might be able to use useEffect https://github.com/reactjs/reactjs.org/blob/d14cbdca2445cd676526c4c52e1e106342ff7bb3/content/docs/hooks-reference.md?plain=1#L155
   */
  React.useLayoutEffect(() => {
    const updateShouldTruncate = () => {
      const willOverflow = ref.current
        ? ref.current.clientWidth < ref.current.scrollWidth
        : false;

      setShouldTruncate(willOverflow);
    };

    const debouncedUpdateShouldTruncate = debounce(updateShouldTruncate, 200);

    updateShouldTruncate();
    window.addEventListener('resize', debouncedUpdateShouldTruncate);
    return () => {
      window.removeEventListener('resize', debouncedUpdateShouldTruncate);
    };
  }, []);

  /**
   * Flattens breadcrumb items that may be wrapped in React.Fragment into an array so they can be manipulated easily.
   */
  const breadcrumbsItems = flattenBreadcrumbsItems(children);

  /**
   * Finds the second to last breadcrumb item for mobile Breadcrumbs back icon.
   */
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

  /**
   * Finds all the breadcrumb items between the first and last breadcrumb items so they can be placed in the dropdown.
   */
  const dropdownMenuItems = breadcrumbsItems
    .slice(1, breadcrumbsItems.length - 1)
    .map((breadcrumbItem, index) => {
      const menuItem = breadcrumbItem as JSX.Element;
      return (
        <DropdownMenuItem
          href={menuItem.props.href}
          // FIXME
          // eslint-disable-next-line react/no-array-index-key
          key={`breadcrumb-menu-item-${index}`}
        >
          {menuItem.props.text}
        </DropdownMenuItem>
      );
    });

  const componentClassName = clsx(styles['breadcrumbs'], className);
  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={id}
      {...other}
    >
      <ul className={styles['breadcrumbs__list']} ref={ref}>
        {/**
         * Back icon breadcrumb always exists, just hidden via css depending on breakpoint to increase performance
         */}
        {backBreadCrumb}
        {/**
         * The ellipsis breadcrumb with dropdown only exists if there would be overflow and there are 3 or more breadcrumb items.
         */}
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
          /**
           * If the above conditions aren't met, display all breadcrumbs.
           */
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
