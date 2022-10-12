import clsx from 'clsx';
import React, {ReactNode, useEffect, useState, useRef} from 'react';
import styles from './UtilityNavItem.module.css';
import {useMergedRefs} from '../../hooks';

export interface Props {
  /**
   * Aria label
   *
   * Use aria label for icon-only utility nav item.
   */
  'aria-label'?: string;
  /**
   * Child node(s) that can be nested inside component as a menu
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Link to URL. If href is present, the button will be rendered as an <a> element.
   */
  href?: string;
  /**
   * Slot before the item name to put items like avatars
   */
  itemBefore?: ReactNode;
  /**
   * Link text string
   */
  text?: string;
}

/**
 * ```ts
 * import {UtilityNavItem} from "@chanzuckerberg/eds";
 * ```
 *
 * Individual item within the UtilityNav component.
 */
export const UtilityNavItem = React.forwardRef<HTMLLIElement, Props>(
  function UtilityNavItem(
    {
      'aria-label': ariaLabel,
      className,
      children,
      text,
      href,
      itemBefore,
      ...other
    },
    ref,
  ) {
    const [isActive, setIsActive] = useState(false);
    const ownRef = useRef<HTMLLIElement | null>(null);
    const utilityNavItemRef = useMergedRefs(ref, ownRef);
    const TagName = createTagName();

    const togglePopover = () => {
      setIsActive(!isActive);
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleOnClickOutside, false);
      document.addEventListener('touchstart', handleOnClickOutside, false);
      return () => {
        document.removeEventListener('mousedown', handleOnClickOutside, false);
        document.removeEventListener('touchstart', handleOnClickOutside, false);
      };
    }, []);

    const handleOnClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ownRef.current &&
        !ownRef.current.contains(event.target as HTMLElement)
      ) {
        setIsActive(false);
      }
    };

    function createTagName() {
      if (href) {
        return 'a';
      } else {
        return 'button';
      }
    }

    const componentClassName = clsx(styles['utility-nav__item'], className, {
      [styles['eds-is-active']]: isActive === true,
    });

    return (
      <li className={componentClassName} ref={utilityNavItemRef} {...other}>
        <TagName
          aria-expanded={!href && children ? isActive : undefined}
          aria-label={!text ? ariaLabel : undefined}
          className={styles['utility-nav__link']}
          href={href}
          onClick={togglePopover}
        >
          {itemBefore && (
            <div className={styles['utility-nav__item-before']}>
              {itemBefore}
            </div>
          )}
          {text && <span className={styles['utility-nav__text']}>{text}</span>}
        </TagName>
        {children && (
          <div className={styles['utility-nav__item-panel']} hidden={!isActive}>
            {children}
          </div>
        )}
      </li>
    );
  },
);
