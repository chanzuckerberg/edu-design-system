import clsx from 'clsx';
import debounce from 'lodash/debounce';

import React, {
  createContext,
  forwardRef,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

import { createPortal } from 'react-dom';
import breakpoints from '../../design-tokens/tier-1-definitions/breakpoints';

import Button from '../Button';
import Hr from '../Hr';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import Menu from '../Menu';
import Text from '../Text';

import styles from './AppHeader.module.css';

/**
 * A nav group is a set of navigation items of the types listed below
 */
type NavGroup = {
  /**
   * Identifier for the nav group (used to distinguish it from other navigation groups)
   */
  name: string;
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavSeparator | NavMenu | NavTree)[];
};

/**
 * Abstract type for every possible navigation bar item in an `AppHeader`. This should not be used directly.
 */
type NavItem = {
  /**
   * Identifier for the nav item (used to distinguish it from other navigation items)
   */
  name: string;
  /**
   * Icon from the set of defined EDS icon set, when `iconLayout` is used.
   */
  icon?: IconName;

  /**
   * Allows configuation of the icon's positioning within `AppHeader`.
   *
   * - When set to a value besides `"none"`, an icon must be specified.
   * - When `"icon-only"`, `aria-label` must be given a value.
   */
  iconLayout?: 'none' | 'left' | 'right' | 'icon-only';
};

/**
 * Nav links are a type of nav item, that can be used for directing users to different locations.
 * They should not be used for modifying or acting on the contents of a given page.
 */
type NavLink = NavItem & {
  /**
   * Defines the type of nav item as a link, with the appropriate / related properties.
   */
  type: 'link';
  /**
   * Link: whether the associated nav item is marking the current page / location
   */
  isCurrent?: boolean;
  /**
   * Link: marks when an item will navigate to an external resource.
   */
  isExternal?: boolean;
  /**
   * Link: the target URL for the navigation item
   */
  href: string;
};

/**
 * Nav buttons are a type of nav item, that can be wired to trigger an interaction. They should not
 * be used for navigation.
 */
type NavButton = NavItem & {
  /**
   * Defines the type of nav item as a button, with the appropriate / related properties.
   */
  type: 'button';
};

/**
 * Separators exist as a separate and distinct Nav item, for maximum customizability
 */
type NavSeparator = NavItem & {
  type: 'separator';
};

/**
 * Nav menus are a set of nested navigation items (of the same type as a NavGroup's navItems)
 */
type NavMenu = NavItem & {
  type: 'menu';
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavSeparator)[];
};

/**
 * Nav trees are just like menus but appear as expanded when in a vertical orientation
 */
type NavTree = NavItem & {
  type: 'tree';
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavSeparator)[];
};

type AppHeaderEventHandler = (
  event: React.SyntheticEvent,
  navItem: NavItem,
) => void;

export type AppHeaderProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Handle the click event for any given clickable nav item in the header. Includes the data from the associated/clicked `NavItem` for reference
   * (e.g., attaching events, tracking, etc.)
   */
  onButtonClick?: AppHeaderEventHandler;
  // Design API
  /**
   * Web location for the home page. Use this to direct where the main page of the application lives.
   */
  href?: string;
  /**
   * Sets of navigation groups in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navGroups?: NavGroup[];
  /**
   * Sets the default orientation of the App Header.
   *
   * * `vertical` alignment places the navigation along the left edge of the screen
   * * `horizontal` alignment spans the top portion of the screen and can flex into a responsive display with an expanding vertical menu
   *
   * **Default is `"horizontal"`**.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Determines how the appheader attaches to the window.
   *
   * * `floating` describes an overlay appearance where `AppHeader` is not flush with the edge of the window
   * * `docked' describes an appearance where `AppHeader` is flush with the edge of the window
   */
  style?: 'floating' | 'docked';
  /**
   * Text used to describe the contents of the page with more detail.
   */
  subTitle?: string;
  /**
   * Element used for the application's logo (can be text or an image)
   */
  title: ReactNode;
};

type AppHeaderTitleProps = {
  // Component API
  // Design API
  // Insert props/values as defined in figma for AppHeader
  /**
   * Element used for the application's logo (can be text or an image)
   */
  title?: ReactNode;
  /**
   * Text used to describe the contents of the page with more detail.
   */
  subTitle?: string;
};

type AppHeaderNavGroupProps = NavGroup & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Handle the click event for any given button in the header
   */
  onButtonClick?: AppHeaderEventHandler;
  // Design API
};

type AppHeaderLinkProps = NavLink &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    // Component API
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
     * Whether it is appearing in a vertical orientation (like in a drawer)
     */
    isVertical?: boolean;
    // Design API
    /**
     * Marks whether the link will direct to an external resource or not
     */
    isExternal?: boolean;
  };

type AppHeaderButtonProps = NavButton &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    // Component API
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
     * Handle the click event for any given button in the header
     */
    onButtonClick?: AppHeaderEventHandler;
    /**
     * Whether it is appearing in a vertical orientation (like in a drawer)
     */
    isVertical?: boolean;
    // Design API
  };

type AppHeaderDrawerProps = {
  /**
   * Handle the click event for any given button in the header
   */
  onButtonClick?: AppHeaderEventHandler;
  /**
   * Sets of navigation groups in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navGroups?: NavGroup[];
};

// Handling for any properties that should be used in sub-components
const AppHeaderContext = createContext<
  Pick<AppHeaderProps, 'orientation' | 'href'>
>({
  orientation: 'horizontal',
  href: '#',
});

/**
 * `import {AppHeader} from "@chanzuckerberg/eds";`
 *
 * Provides app-level navigation and serves as the `<header>` element for accessibility landmarks
 */
export const AppHeader = ({
  className,
  href,
  navGroups,
  onButtonClick,
  orientation,
  style = 'docked',
  subTitle,
  title,
  ...other
}: AppHeaderProps) => {
  // TODO: handle scenario where the prop changes but state is already using a value
  const [headerOrientation, setHeaderOrientation] = useState(
    orientation || 'horizontal',
  );
  const componentClassName = clsx(
    styles['app-header'],
    headerOrientation && styles[`app-header--orientation-${headerOrientation}`],
    style && styles[`app-header--style-${style}`],
    className,
  );

  const drawerComponentClassName = clsx(
    style && styles[`app-header--style-${style}`],
    styles['app-header__drawer'],
  );

  useEffect(() => {
    // Setup debounce to trigger on the (default) trailing edge of the calls
    const debouncedHandleOnResize = debounce(function handleOnResize() {
      // compare the screen width to the smallest breakpoint. if it's wider...
      if (window.innerWidth > parseInt(breakpoints['eds-bp-sm'], 10)) {
        // ...change to original user value (with default specified)
        setHeaderOrientation(orientation || 'horizontal');
      } else {
        // ...change 'vertical' to 'horizontal' if the original value was vertical
        setHeaderOrientation('horizontal');
      }
    }, 16); // ~1/60 fps

    window.addEventListener('resize', debouncedHandleOnResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleOnResize);
    };
  }, [orientation]);

  return (
    <AppHeaderContext.Provider value={{ href, orientation: headerOrientation }}>
      <header className={componentClassName} {...other}>
        <div>
          <div className={styles['app-header__content']}>
            <div className={styles['app-header-title']}>
              {href ? (
                <a
                  aria-label="homepage"
                  href={href}
                  onClick={(ev) => {
                    onButtonClick &&
                      onButtonClick(ev, {
                        type: 'link',
                        href: href,
                      } as NavLink);
                  }}
                >
                  <AppHeaderTitle subTitle={subTitle} title={title} />
                </a>
              ) : (
                <AppHeaderTitle subTitle={subTitle} title={title} />
              )}
            </div>
            {headerOrientation === 'horizontal' && (
              <>
                <div className={styles['app-header__nav-groups']}>
                  {navGroups?.map((navGroup) => (
                    <AppHeaderNavGroup
                      key={`navGroup-${navGroup.name}`}
                      name={navGroup.name}
                      navItems={navGroup.navItems}
                      onButtonClick={onButtonClick}
                    />
                  ))}
                </div>
                <div className={styles['app-header__menu']}>
                  <AppHeaderButton
                    aria-label="Show Menu"
                    icon="menu"
                    iconLayout="icon-only"
                    name="hamburger-menu"
                    onClick={() => {
                      document.getElementById('popover')?.showPopover();
                    }}
                    type="button"
                  />
                </div>
              </>
            )}
            {headerOrientation === 'vertical' && (
              <AppHeaderDrawerContent
                navGroups={navGroups}
                onButtonClick={onButtonClick}
              />
            )}
          </div>
        </div>
      </header>
      {headerOrientation === 'horizontal'
        ? createPortal(
            <div
              className={drawerComponentClassName}
              id="popover"
              // @ts-expect-error popover properly supported in React 19 ; useId to keep unique?
              popover="auto"
            >
              <div className={styles['app-header__drawer-button']}>
                <Button
                  aria-label="Close popover menu"
                  className={styles['app-header__drawer-button-instance']}
                  icon="close"
                  iconLayout="icon-only"
                  onClick={() => {
                    document.getElementById('popover')?.hidePopover();
                  }}
                  rank="tertiary"
                  size="lg"
                />
              </div>
              <AppHeaderDrawerContent
                navGroups={navGroups}
                onButtonClick={onButtonClick}
              />
            </div>,
            document.body,
          )
        : null}
    </AppHeaderContext.Provider>
  );
};

/**
 * Sub-component for handling the title elements of the AppHeader
 *
 * @param props Properties for use with the AppHeaderTitleProps
 * @returns ReactNode
 */
const AppHeaderTitle = ({ title, subTitle }: AppHeaderTitleProps) => {
  const componentClassName = clsx(
    styles['app-header-title__title'],
    typeof title === 'object' && styles['app-header-title--has-logo'],
  );
  return (
    <>
      <div className={componentClassName}>
        {typeof title === 'string' ? (
          <Text as="span" preset="headline-sm">
            {title}
          </Text>
        ) : (
          <>{title}</>
        )}
      </div>
      {subTitle && (
        <div className={styles['app-header-title__sub-title']}>
          <Text as="span" preset="body-md">
            {subTitle}
          </Text>
        </div>
      )}
    </>
  );
};

/**
 * Sub-component for the individual navigation groups within the app header.
 *
 * @param props properties for AppHeaderNavGroupProps
 * @returns ReactNode
 */
const AppHeaderNavGroup = ({
  name,
  navItems,
  onButtonClick,
  ...other
}: AppHeaderNavGroupProps) => {
  const componentClassName = clsx(styles['app-header__nav-group']);
  return (
    <nav aria-label={name} className={componentClassName} {...other}>
      <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.name}>
              {navItem.type === 'button' && (
                <AppHeaderButton
                  {...navItem}
                  onClick={(ev) => {
                    onButtonClick && onButtonClick(ev, navItem);
                  }}
                />
              )}
              {navItem.type === 'link' && (
                <AppHeaderLink key={navItem.name} {...navItem} />
              )}
              {(navItem.type === 'menu' || navItem.type === 'tree') && (
                <Menu>
                  <Menu.PlainButton as={React.Fragment}>
                    <AppHeaderButton
                      icon={navItem.icon}
                      iconLayout={navItem.iconLayout}
                      name={navItem.name}
                      type="button"
                    >
                      {navItem.name}
                    </AppHeaderButton>
                  </Menu.PlainButton>
                  <Menu.Items
                    anchor={{ to: 'bottom end', gap: 12 }}
                    className={styles['app-header__nav-items']}
                  >
                    {navItem.navItems?.map((navItem) => {
                      switch (navItem.type) {
                        case 'link':
                          return (
                            <Menu.Item href={navItem.href} key={navItem.name}>
                              {navItem.name}
                            </Menu.Item>
                          );
                        case 'button':
                          return (
                            <Menu.Item
                              key={navItem.name}
                              onClick={(ev) => {
                                onButtonClick && onButtonClick(ev, navItem);
                              }}
                            >
                              {navItem.name}
                            </Menu.Item>
                          );
                        default:
                          return <Menu.Item>N/A</Menu.Item>;
                      }
                    })}
                  </Menu.Items>
                </Menu>
              )}
              {/* In horizontal layouts, we never render the horizontal rule */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

/**
 * Sub-component for the individual app header links.
 *
 * @param props Properties for the links within the App Header
 * @returns ReactNode
 */
const AppHeaderLink = forwardRef<HTMLAnchorElement, AppHeaderLinkProps>(
  (
    {
      className,
      icon,
      iconLayout = 'none',
      isCurrent = false,
      isExternal = false,
      isVertical,
      name,
      type,
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['app-header__nav-item'],
      styles[`app-header__nav-item--link`],
      isCurrent && styles['app-header__nav-item--is-current'],
      isExternal && styles['app-header__nav-item--is-external'],
    );
    return (
      <a
        className={componentClassName}
        ref={ref}
        {...other}
        target={isExternal ? '_blank' : undefined}
      >
        <span
          className={clsx(
            styles['app-header__nav-item--link'],
            iconLayout &&
              styles[`app-header__nav-item--icon-layout-${iconLayout}`],
          )}
        >
          {!(iconLayout === 'icon-only') && (
            <Text as="span" preset="label-md">
              {name}
            </Text>
          )}
          {icon && iconLayout && (
            <Icon name={icon} purpose="decorative" size="24px" />
          )}
        </span>
        {isExternal && isVertical && (
          <Icon name="open-in-new" purpose="decorative" size="24px" />
        )}
      </a>
    );
  },
);

/**
 * Sub-component for the individual app header buttons.
 *
 * @param props Properties for the button within the App Header
 * @returns ReactNode
 */
const AppHeaderButton = forwardRef<HTMLButtonElement, AppHeaderButtonProps>(
  (
    { className, icon, iconLayout = 'none', isVertical, name, type, ...other },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['app-header__nav-item'],
      styles[`app-header__nav-item--button`],
      iconLayout && styles[`app-header__nav-item--icon-layout-${iconLayout}`],
    );
    return (
      <button className={componentClassName} ref={ref} {...other}>
        {isVertical && (
          <Icon name={'chevron-down'} purpose="decorative" size="24px" />
        )}
        <span
          className={clsx(
            styles['app-header__nav-item--button'],
            iconLayout &&
              styles[`app-header__nav-item--icon-layout-${iconLayout}`],
          )}
        >
          {!(iconLayout === 'icon-only') && (
            <Text as="span" preset="label-md">
              {name}
            </Text>
          )}
          {icon && iconLayout && (
            <Icon name={icon} purpose="decorative" size="24px" />
          )}
        </span>
      </button>
    );
  },
);

/**
 * Sub-component for the AppHeader Drawer, which is reused for the vertical orientation of `AppHeader`
 *
 * @param props App drawer props for rendering the navigation group and wrapper
 * @returns ReactNote
 */
const AppHeaderDrawerContent = ({
  navGroups,
  onButtonClick,
}: AppHeaderDrawerProps) => (
  <div className={styles['drawer-content']}>
    {navGroups?.map((navGroup) => (
      <nav
        aria-label={navGroup.name}
        className={styles['drawer-content__nav-group']}
        key={navGroup.name}
      >
        <ul>
          {navGroup.navItems.map((navItem) => {
            return (
              <li
                className={clsx(
                  styles['drawer-content__nav-group-item'],
                  navItem.type &&
                    styles[
                      `drawer-content__nav-group-item--type-${navItem.type}`
                    ],
                )}
                key={navItem.name}
              >
                {navItem.type === 'button' && (
                  <AppHeaderButton
                    key={navItem.name}
                    {...navItem}
                    onClick={(ev) => {
                      onButtonClick && onButtonClick(ev, navItem);
                    }}
                  />
                )}
                {navItem.type === 'link' && (
                  <AppHeaderLink isVertical key={navItem.name} {...navItem} />
                )}
                {navItem.type === 'separator' && (
                  <Hr
                    className={styles['app-header__nav-item--separator']}
                    key={navItem.name}
                    {...navItem}
                  />
                )}
                {navItem.type === 'tree' && (
                  <menu>
                    <div className={styles['drawer-content__header-container']}>
                      <div>
                        <span
                          className={clsx(
                            styles['app-header__nav-item--button'],
                            styles['app-header_nav-item-label'],
                            navItem.iconLayout &&
                              styles[
                                `app-header__nav-item--icon-layout-${navItem.iconLayout}`
                              ],
                          )}
                        >
                          {!(navItem.iconLayout === 'icon-only') && (
                            <Text as="span" preset="overline-sm">
                              {navItem.name}
                            </Text>
                          )}
                          {navItem.icon && navItem.iconLayout && (
                            <Icon
                              name={navItem.icon}
                              purpose="decorative"
                              size="24px"
                            />
                          )}
                        </span>
                      </div>
                    </div>
                    <ul>
                      {navItem.navItems.map((navItem) => (
                        <li key={navItem.name}>
                          {navItem.type === 'button' && (
                            <AppHeaderButton
                              key={navItem.name}
                              {...navItem}
                              onClick={(ev) => {
                                onButtonClick && onButtonClick(ev, navItem);
                              }}
                            />
                          )}
                          {navItem.type === 'link' && (
                            <AppHeaderLink key={navItem.name} {...navItem} />
                          )}
                          {navItem.type === 'separator' && (
                            <Hr key={navItem.name} {...navItem} />
                          )}
                        </li>
                      ))}
                    </ul>
                  </menu>
                )}
                {navItem.type === 'menu' && (
                  <Menu>
                    <Menu.PlainButton as={React.Fragment}>
                      <AppHeaderButton
                        icon={navItem.icon}
                        iconLayout={navItem.iconLayout}
                        isVertical
                        name={navItem.name}
                        type="button"
                      >
                        {navItem.name}
                      </AppHeaderButton>
                    </Menu.PlainButton>
                    <Menu.Items
                      anchor={{ to: 'bottom end', gap: 12 }}
                      className={styles['app-header__nav-items']}
                    >
                      {navItem.navItems?.map((navItem) => {
                        switch (navItem.type) {
                          case 'link':
                            return (
                              <Menu.Item href={navItem.href} key={navItem.name}>
                                {navItem.name}
                              </Menu.Item>
                            );
                          case 'button':
                            return (
                              <Menu.Item
                                key={navItem.name}
                                onClick={(ev) => {
                                  onButtonClick && onButtonClick(ev, navItem);
                                }}
                              >
                                {navItem.name}
                              </Menu.Item>
                            );
                          default:
                            return <Menu.Item>N/A</Menu.Item>;
                        }
                      })}
                    </Menu.Items>
                  </Menu>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    ))}
  </div>
);

AppHeader.displayName = 'AppHeader';
