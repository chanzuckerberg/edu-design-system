import clsx from 'clsx';
import React, { ReactNode, useRef, useEffect, KeyboardEvent } from 'react';
import styles from './DropdownMenu.module.css';
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
} from '../../util/keycodes';

export interface Props {
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
}

/**
 * Primary UI component for user interaction
 */
export const DropdownMenu: React.FC<Props> = ({
  children,
  className,
  isActive,
  ...other
}) => {
  const childRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    setTimeout(() => {
      if (isActive) {
        childRefs.current[0]
          .querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
          .focus();
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
    let activeItem = null;

    // TODO: improve `any` type
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
        .querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
        .focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.key)) {
      /* 4 */
      childRefs.current[prev]
        .querySelector<HTMLButtonElement | HTMLAnchorElement>(':first-child')
        .focus();
    }

    // if ([TAB_KEYCODE, SHIFT_TAB_KEYCODE].includes(e.key)) {
    //   if (
    //     childRefs.current.indexOf(activeItem) ===
    //     childRefs.current.length - 1
    //   ) {
    //   }
    // }
  };

  const childrenWithProps = React.Children.map(
    children,
    // TODO: improve `any` type
    (child: any, i: number) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error TODO: fix "No overload matches this call" error
        return React.cloneElement<Props>(child, {
          ref: (el: HTMLLIElement) => (childRefs.current[i] = el),
        });
      }
    },
  );

  const componentClassName = clsx(styles['dropdown-menu'], className);
  return (
    <div className={componentClassName} {...other}>
      <ul className={styles['dropdown-menu__list']} onKeyDown={onKeyDown}>
        {childrenWithProps}
      </ul>
    </div>
  );
};
