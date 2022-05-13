import clsx from 'clsx';
import React, {
  ReactNode,
  MouseEventHandler,
  KeyboardEvent,
  useState,
} from 'react';
import { ESCAPE_KEYCODE, R_ARROW_KEYCODE } from '../../util/keycodes';
import styles from '../DropdownMenu/DropdownMenu.module.css';
import { Icon, IconName } from '../Icon/Icon';
export interface Props {
  /**
   * Stylistic variations for the Box
   * - **top** horizontally and vertically aligns the content
   */
  align?: 'top-left';
  /**
   * Icon name
   */
  iconName?: IconName;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
  /**
   * On click handler for component
   */
  onHover?: MouseEventHandler;
  /**
   * Item text
   */
  text?: string;
  /**
   * Stylistic variations of the GridL
   * - **lined** yields a dropdown item with a border bottom
   */
  variant?: 'lined';
}

/**
 * Primary UI component for user interaction
 */
export const DropdownMenuItem: React.FC<Props> = ({
  align,
  className,
  href,
  children,
  iconName,
  text,
  variant,
  ...other
}) => {
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggle active state
   * 1) Used for click handlers
   */
  const handleClick = () => {
    if (isActive === true) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  /**
   * Open dropdown
   * 1) Used for hover and arrow key strike states to active dropdown item
   */
  const openDropdown = () => {
    setIsActive(true);
  };

  /**
   * Close dropdown
   * 1) Used for mouseleave and escape key strike to close dropdown
   */
  const closeDropdown = () => {
    setIsActive(false);
  };

  /**
   * Handle onKeyDown
   * 1) If escape button is struck, close the modal
   */
  function handleOnKeyDown(e: KeyboardEvent<HTMLLIElement>) {
    if (e.code === ESCAPE_KEYCODE) {
      closeDropdown(); /* 1 */
    }
    if (e.code === R_ARROW_KEYCODE) {
      openDropdown();
    }
  }

  const TagName = createTagName();

  function createTagName() {
    if (href) {
      return 'a';
    } else {
      return 'button';
    }
  }

  const componentClassName = clsx(
    'link-list__item',
    className,
    align === 'top-left' && styles['eds-c-dropdown-menu__item--align-top-left'],
    variant === 'lined' && styles['eds-c-dropdown-menu__item--lined'],
    children && isActive === true && styles['big-is-active'],
  );

  return (
    <li
      className={componentClassName}
      {...other}
      onKeyDown={handleOnKeyDown}
      role="presentation"
    >
      <TagName
        aria-expanded={isActive}
        className={styles['eds-c-dropdown__link']}
        href={href}
        onClick={handleClick}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        {iconName && (
          <Icon
            className={styles['eds-c-dropdown__icon']}
            name={iconName}
            purpose="decorative"
            size="1.25rem"
          />
        )}
        <span className={styles['eds-c-dropdown__text']}>{text}</span>
      </TagName>
    </li>
  );
};
