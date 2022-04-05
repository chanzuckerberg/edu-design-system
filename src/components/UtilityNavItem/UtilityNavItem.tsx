import clsx from 'clsx';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { useMergedRefs } from '../../hooks';
import Icon from '../Icon';
import styles from '../UtilityNav/UtilityNav.module.css';

export interface Props {
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
   * Link text string
   */
  text?: string;
}

/**
 * Primary UI component for user interaction
 */
export const UtilityNavItem = React.forwardRef<HTMLLIElement, Props>(
  function UtilityNavItem({ className, children, text, href, ...other }, ref) {
    const [isActive, setIsActive] = useState(false);
    const ownRef = useRef<HTMLLIElement | null>(null);
    const utilityNavItemRef = useMergedRefs(ref, ownRef);
    const TagName = createTagName();

    const togglePanel = () => {
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ownRef.current &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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

    const componentClassName = clsx(
      'utility-nav__item',
      className,
      isActive && 'eds-is-active',
    );

    return (
      <li className={componentClassName} ref={utilityNavItemRef} {...other}>
        <TagName
          className={styles['utility-nav__link']}
          href={href}
          onClick={togglePanel}
          aria-expanded={!href && children ? isActive : undefined}
        >
          <span className={styles['utility-nav__text']}>{text}</span>
          {children && (
            <Icon
              purpose="decorative"
              name="expand-more"
              className={styles['utility-nav__icon']}
            />
          )}
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
