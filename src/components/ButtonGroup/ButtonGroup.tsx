import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

import styles from './ButtonGroup.module.css';

type ButtonGroupProps = {
  // Component API
  /**
   * The buttons. Should not be wrapped in another element – we just want the buttons.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   *
   * This will be applied to the container we're placing around the buttons.
   */
  className?: string;
  // Design API
  /**
   * Whether the buttons should be laid out horizontally or stacked vertically (along with relative button position).
   *
   * (**Note**: `horizontal-align-left` should ONLY be used in combination with `AppNotification`)
   */
  buttonLayout?:
    | 'horizontal'
    | 'vertical'
    | 'horizontal-progressive'
    | 'horizontal-align-left';
};

/**
 * `import {ButtonGroup} from "@chanzuckerberg/eds";`
 *
 * A container for buttons grouped together horizontally or vertically.
 */
export function ButtonGroup({
  children,
  className,
  buttonLayout = 'horizontal',
}: ButtonGroupProps) {
  const componentClassName = clsx(
    styles['button-group'],
    buttonLayout && styles[`button-group--${buttonLayout}`],
    className,
  );

  return <div className={componentClassName}>{children}</div>;
}
