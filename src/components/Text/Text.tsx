import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Text.module.css';

export interface Props {
  /**
   * The rendered tag name of the Heading. The tag name should always relate to the [document outline](http://html5doctor.com/outlines/) and a tag name should never be chosen for its default aesthetic qualities. If a specific style is desired, use the `size` prop to manipulate the Heading style.
   */
  as: 'p' | 'span';
  /**
   * The child node(s)
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Text: React.FC<Props> = ({
  as = 'p',
  className,
  children,
  ...other
}) => {
  const componentClassName = clsx(styles['text'], className, {});
  const TagName = as;

  return (
    <TagName className={componentClassName} {...other}>
      {children}
    </TagName>
  );
};
