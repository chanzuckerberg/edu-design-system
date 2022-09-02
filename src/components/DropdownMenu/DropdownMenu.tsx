import clsx from 'clsx';
import React, {
  ReactNode,
  createContext,
  useRef,
  useEffect,
  KeyboardEvent,
  HTMLAttributes,
} from 'react';
import styles from './DropdownMenu.module.css';
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
  ESCAPE_KEYCODE,
} from '../../util/keycodes';

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
  handleOnKeyDown?: (e: React.KeyboardEvent) => void;
} & HTMLAttributes<HTMLElement>;

export const DropdownMenuContext = createContext<any>({});
/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DropdownMenu} from "@chanzuckerberg/eds";
 * ```
 *
 * Dropdown menu with actions list
 */
export const DropdownMenu: React.FC<Props> = ({
  children,
  className,
  isActive,
  handleOnKeyDown,
  ...other
}) => {
  type Refs = {
    set: Set<HTMLLIElement>;
    list: HTMLLIElement[];
  };
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
    if ([ESCAPE_KEYCODE].includes(e.key)) {
      if (handleOnKeyDown) {
        handleOnKeyDown(e);
      }
    }

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.key)) {
      if (focusIndex < refs.current.list.length - 1) {
        focusIndex++;
      } else {
        focusIndex = 0;
      }
      focusItem(focusIndex);
      // prevents page from scrolling
      e.preventDefault();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.key)) {
      if (focusIndex > 0) {
        focusIndex--;
      } else {
        focusIndex = refs.current.list.length - 1;
      }
      focusItem(focusIndex);
      // prevents page from scrolling
      e.preventDefault();
    }
  };

  const componentClassName = clsx(styles['dropdown-menu'], className);
  return (
    <DropdownMenuContext.Provider value={{ refs: refs }}>
      <div className={componentClassName} {...other}>
        <ul
          className={styles['dropdown-menu__list']}
          onKeyDown={onKeyDown}
          role="menu"
        >
          {children}
        </ul>
      </div>
    </DropdownMenuContext.Provider>
  );
};
