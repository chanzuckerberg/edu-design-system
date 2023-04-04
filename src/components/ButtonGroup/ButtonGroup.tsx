import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './ButtonGroup.module.css';

type Props = {
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
  /**
   * How much space there should be between the buttons.
   * 'max' does not work with 'vertical' orientation.
   */
  spacing?: 'none' | '1x' | 'max';
  /**
   * Whether the buttons should be laid out horizontally or stacked vertically.
   * 'vertical' does not work with 'max' spacing.
   */
  orientation?: 'horizontal' | 'vertical';
};

/**
 * `import {ButtonGroup} from "@chanzuckerberg/eds";`
 *
 * A container for buttons grouped together horizontally or vertically.
 *
 * Example usage:
 *
 * ```tsx
 * <ButtonGroup
 *   className={componentClassName}
 *   spacing='1x'
 *   orientation='vertical'
 * >
 *   <Button>Left button</Button>
 *   <Button>Right button</Button>
 * </ButtonGroup>
 * ```
 */
export function ButtonGroup({
  children,
  className,
  spacing = '1x',
  orientation = 'horizontal',
}: Props) {
  if (
    spacing === 'max' &&
    orientation === 'vertical' &&
    process.env.NODE_ENV !== 'production'
  ) {
    console.warn(
      "*** Weird prop combo warning ***: Are you sure you want max spacing *and* vertical orientation? It's a valid combination, but it's extremely unlikely to ever be used intentionally.",
    );
  }
  const componentClassName = clsx(
    styles['button-group'],
    spacing === '1x' && styles['button-group--spacing-1x'],
    spacing === 'max' && styles['button-group--spacing-max'],
    orientation === 'vertical' && styles['button-group--vertical'],
    className,
  );
  return <div className={componentClassName}>{children}</div>;
}
