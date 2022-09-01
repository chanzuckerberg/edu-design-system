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
  interface Node {
    value: HTMLLIElement;
    next: this | null;
    prev: this | null;
  }
  interface RefMap {
    head: Node | null;
    tail: Node | null;
    focus: Node | null;
    set: Set<Node>;
  }
  const childRefs = useRef<RefMap>({
    head: null,
    tail: null,
    focus: null,
    set: new Set(),
  });

  useEffect(() => {
    setTimeout(() => {
      if (isActive && childRefs.current.head?.value) {
        (childRefs.current.head.value as HTMLLIElement)
          ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
          ?.focus();
        childRefs.current.focus = childRefs.current.head;
      }
    }, 1);
  }, [isActive]);

  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if ([ESCAPE_KEYCODE].includes(e.key)) {
      if (handleOnKeyDown) {
        handleOnKeyDown(e);
      }
    }
    e.preventDefault();

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.key)) {
      /* 3 */
      (childRefs.current.focus?.next?.value as HTMLLIElement)
        ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
        ?.focus();
      childRefs.current.focus = childRefs.current.focus?.next || null;
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.key)) {
      /* 4 */
      (childRefs.current.focus?.prev?.value as HTMLLIElement)
        ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
        ?.focus();
      childRefs.current.focus = childRefs.current.focus?.prev || null;
    }
  };

  const componentClassName = clsx(styles['dropdown-menu'], className);
  return (
    <DropdownMenuContext.Provider value={{ refs: childRefs }}>
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
