import clsx from 'clsx';
import { debounce } from 'lodash';
import React, { createContext, useContext, type ReactNode } from 'react';
import { flattenReactChildren } from '../../util/flattenReactChildren';
// import BreadcrumbsItem from '../BreadcrumbsItem';
import Icon from '../Icon';
import Menu from '../Menu';
import styles from './Breadcrumbs.module.css';

type Separators = '|' | '>' | '/';

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
  separator?: Separators;
};

type Context = {
  separator?: Separators;
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

type BreadcrumbItemProps = {
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
  separator?: Separators;
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
}: BreadcrumbItemProps) => {
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

Breadcrumbs.Item = CustomSeparatorBreadcrumbsItem;
