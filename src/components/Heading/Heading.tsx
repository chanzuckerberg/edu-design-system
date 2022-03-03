import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Heading.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Id of the heading
   */
  id?: string;
  /**
   * Size variants of the Heading component, ranging from 1-7. These numbers map to typographic sizing/style presets. This prop is used in instances where a Heading needs to use a specific tag (such as `h3`) for semantic reasons, but needs to be styled like something other than its default styles (such as an `h2` or `h1`).
   */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The rendered tag name of the Heading. The tag name should always relate to the [document outline](http://html5doctor.com/outlines/) and a tag name should never be chosen for its default aesthetic qualities. If a specific style is desired, use the `size` prop to manipulate the Heading style.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Primary UI component for user interaction
 */
export const Heading: React.FC<Props> = ({
  className,
  children,
  as,
  size,
  id,
  ...other
}) => {
  const componentClassName = clsx(styles['heading'], className, {
    [styles['heading--size-1']]: size === 1,
    [styles['heading--size-2']]: size === 2,
    [styles['heading--size-3']]: size === 3,
    [styles['heading--size-4']]: size === 4,
    [styles['heading--size-5']]: size === 5,
    [styles['heading--size-6']]: size === 6,
  });

  const TagName = as;
  return (
    <TagName className={componentClassName} {...other}>
      {children}
    </TagName>
  );
};
