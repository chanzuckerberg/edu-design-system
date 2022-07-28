import clsx from 'clsx';
import React, {
  ReactNode,
  useRef,
  useEffect,
  KeyboardEvent,
  HTMLAttributes,
} from 'react';
import styles from './DropdownMenu.module.css';
import { isReactFragment } from '../../util/isReactFragment';
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
  const childRefs = useRef<Array<HTMLLIElement>>([]);

  useEffect(() => {
    setTimeout(() => {
      if (isActive && childRefs) {
        childRefs.current[0]
          ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
          ?.focus();
      }
    }, 1);
  }, [isActive]);

  /**
   * On KeyDown
   * 1) Find active item. If there isn't one, do nothing on Keydown
   * 2) Set active item, next item, and previous item.
   * 3) If right or down arrow key keyed, focus on next item.
   * 4) If left or up arrow key keyed, focus on the previous item.
   */
  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if ([ESCAPE_KEYCODE].includes(e.key)) {
      if (handleOnKeyDown) {
        handleOnKeyDown(e);
      }
    }

    let activeItem = null;

    childRefs.current.map((item: HTMLLIElement) => {
      if (item.querySelector(':first-child') === document.activeElement) {
        activeItem = item;
      }
      return item;
    });

    if (!activeItem) return;

    const index = childRefs.current.indexOf(activeItem); /* 2 */
    const next = index === childRefs.current.length - 1 ? 0 : index + 1; /* 2 */

    const prev = index === 0 ? childRefs.current.length - 1 : index - 1; /* 2 */

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.key)) {
      /* 3 */
      childRefs.current[next]
        ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
        ?.focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.key)) {
      /* 4 */
      childRefs.current[prev]
        ?.querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
        ?.focus();
    }
  };

  /**
   * Pass props down to children
   * 1) Cycle through children and pass down ref
   * 2) If fragment is used for children (ProjectCardDropdown)
   */
  const childrenWithProps = React.Children.map(
    children,
    // TODO: improve `any` type
    (child: ReactNode, i: number) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        if (isReactFragment(child)) {
          const newChildren = child.props.children;
          return newChildren.map((item: ReactNode, i: number) => {
            return React.cloneElement<Props>(
              item as any,
              {
                ref: (el: HTMLLIElement) => (childRefs.current[i] = el) /* 1 */,
              } as any,
            );
          });
        } else {
          return React.cloneElement<Props>(
            child as any,
            {
              ref: (el: HTMLLIElement) => (childRefs.current[i] = el) /* 1 */,
            } as any,
          );
        }
      }
    },
  );

  const componentClassName = clsx(styles['dropdown-menu'], className);
  return (
    <div className={componentClassName} {...other}>
      <ul
        className={styles['dropdown-menu__list']}
        onKeyDown={onKeyDown}
        role="presentation"
      >
        {childrenWithProps}
      </ul>
    </div>
  );
};
