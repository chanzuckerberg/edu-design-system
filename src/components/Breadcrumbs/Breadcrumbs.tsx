import clsx from 'clsx';
import debounce from 'lodash.debounce';
import React, { createContext, useContext, type ReactNode } from 'react';
import { flattenReactChildren } from '../../util/flattenReactChildren';
import BreadcrumbsItem from '../BreadcrumbsItem';
import Menu from '../Menu';
import styles from './Breadcrumbs.module.css';

type Props = {
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  'aria-label'?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Custom string separator between individual breadcrumbs
   * Defaults to '/'
   */
  separator?: '|' | '>' | '/';
};

type Context = {
  separator?: '|' | '>' | '/';
};

const BreadcrumbsContext = createContext<Context>({});
/**
 * `import {Breadcrumbs} from "@chanzuckerberg/eds";`
 *
 * List of Breadcrumb components showing the user where they are in the system and allow them
 * to navigate to parent pages.
 */

export const Breadcrumbs = ({
  'aria-label': ariaLabel = 'breadcrumbs links',
  className,
  children,
  id,
  separator,
  ...other
}: Props) => {
  const [shouldTruncate, setShouldTruncate] = React.useState(false);

  const ref = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
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
   * Finds all the breadcrumb items between the first and last breadcrumb items so they can be placed in the Menu.
   */
  const menuItems = breadcrumbsItems
    .slice(1, breadcrumbsItems.length - 1)
    .map((breadcrumbItem, index) => {
      const menuItem = breadcrumbItem as JSX.Element;
      return (
        <Menu.Item
          href={menuItem.props.href}
          icon="link"
          // FIXME
          // eslint-disable-next-line react/no-array-index-key
          key={`breadcrumb-menu-item-${index}`}
        >
          {menuItem.props.text}
        </Menu.Item>
      );
    });

  const componentClassName = clsx(styles['breadcrumbs'], className);
  return (
    <BreadcrumbsContext.Provider value={{ separator }}>
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
           * The ellipsis breadcrumb with Menu only exists if there would be overflow and there are 3 or more breadcrumb items.
           */}
          {shouldTruncate && breadcrumbsItems.length > 2 ? (
            <>
              {breadcrumbsItems[0]}
              <BreadcrumbsItem
                href={null}
                menuItems={menuItems}
                separator={separator}
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
    </BreadcrumbsContext.Provider>
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
    throw new Error(
      'Only <Breadcrumbs.Item> or React.Fragment of aforementioned components allowed',
    );
  }
  return flattenedChildren;
};

const CustomSeparatorBreadcrumbsItem = (
  props: React.ComponentProps<typeof BreadcrumbsItem>,
) => {
  const { separator } = useContext(BreadcrumbsContext);
  return <BreadcrumbsItem separator={separator} {...props} />;
};

Breadcrumbs.Item = CustomSeparatorBreadcrumbsItem;
