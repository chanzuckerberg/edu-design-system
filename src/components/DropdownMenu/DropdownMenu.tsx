import { clsx } from 'clsx';
import type {
  ReactNode,
  KeyboardEvent,
  HTMLAttributes,
  MouseEventHandler,
} from 'react';
import React, { createContext, useRef, useEffect } from 'react';
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
  ESCAPE_KEYCODE,
  HOME_KEYCODE,
  END_KEYCODE,
  TAB_KEYCODE,
} from '../../util/keycodes';
import styles from './DropdownMenu.module.css';

// This component is deprecated and will be replaced by the Menu component
export type Props = {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Sets the component to open or close by default
   */
  isActive?: boolean;
  /**
   * Callback used to close the dropdown menu. Typically sets active state to false in parent.
   */
  closeDropdownMenu?: () => void;
} & HTMLAttributes<HTMLElement>;

type Refs = {
  set: Set<HTMLLIElement>;
  list: HTMLLIElement[];
};

type ContextRefs = {
  refs: React.MutableRefObject<Refs>;
};
export const DropdownMenuContext = createContext<ContextRefs | null>(null);

/**
 * The DropdownMenu component is deprecated and will be removed in a future release.
 *
 * `import {DropdownMenu} from "@chanzuckerberg/eds";`
 *
 * Dropdown menu with actions list.
 *
 * @deprecated
 */
export const DropdownMenu: React.FC<Props> = ({
  children,
  className,
  closeDropdownMenu,
  isActive,
  ...other
}) => {
  const refs = useRef<Refs>({
    set: new Set(),
    list: [],
  });

  let focusIndex = 0;
  const focusItem = (index: number) => {
    refs.current.list[index]
      ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
      ?.focus();
  };

  useEffect(() => {
    if (isActive && refs.current.list.length) {
      focusItem(0);
    }
  }, [isActive]);

  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    // Calls callback on escape or tab key, typically to close the menu.
    if (
      (e.key === ESCAPE_KEYCODE || e.key === TAB_KEYCODE) &&
      closeDropdownMenu
    ) {
      closeDropdownMenu();
      // Prevents focus from moving onto next element in tab order and keeps it on trigger button.
      e.preventDefault();
    }

    // Focus next element with right or down arrow key.
    if (e.key === R_ARROW_KEYCODE || e.key === D_ARROW_KEYCODE) {
      if (focusIndex < refs.current.list.length - 1) {
        focusIndex++;
      } else {
        // Wrap around to top of menu since we're at the bottom
        focusIndex = 0;
      }
      focusItem(focusIndex);
      // prevents page from scrolling
      e.preventDefault();
    }

    // Focus previous element with left or up arrow key.
    if (e.key === L_ARROW_KEYCODE || e.key === U_ARROW_KEYCODE) {
      if (focusIndex > 0) {
        focusIndex--;
      } else {
        // Wrap around to bottom of menu since we're at the bottom
        focusIndex = refs.current.list.length - 1;
      }
      focusItem(focusIndex);
      // prevents page from scrolling
      e.preventDefault();
    }

    // Focus first item with home key.
    if (e.key === HOME_KEYCODE) {
      focusIndex = 0;
      focusItem(focusIndex);
      // prevents page from scrolling
      e.preventDefault();
    }

    // Focus last item with end key.
    if (e.key === END_KEYCODE) {
      focusIndex = refs.current.list.length - 1;
      focusItem(focusIndex);
      // prevents page from scrolling
      e.preventDefault();
    }
  };

  const handleOnClick: MouseEventHandler = (e) => {
    focusIndex = refs.current.list.findIndex((ref) =>
      ref.contains(e.target as HTMLElement),
    );
    focusItem(focusIndex);
  };

  const componentClassName = clsx(styles['dropdown-menu'], className);
  return (
    <DropdownMenuContext.Provider value={{ refs }}>
      <div className={componentClassName} {...other}>
        <ul
          className={styles['dropdown-menu__list']}
          onClick={handleOnClick}
          onKeyDown={onKeyDown}
          role="menu"
        >
          {children}
        </ul>
      </div>
    </DropdownMenuContext.Provider>
  );
};
