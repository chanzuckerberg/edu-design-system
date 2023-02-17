import clsx from 'clsx';
import React from 'react';
import styles from './Slider.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Slider} from "@chanzuckerberg/eds";`
 *
 * TODO: update this comment with a description of the component.
 */
export const Slider = ({ className, ...other }: Props) => {
  const componentClassName = clsx(styles['slider'], className);

  return (
    <div className={componentClassName} {...other}>
      Hello!
    </div>
  );
};
