import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Card.module.css';

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
   * Link to URL. If href is present, the button will be rendered as an <a> element.
   */
  href?: string;
  /**
   * Card rendered on a dark backgorund
   */
  inverted?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<Props> = ({
  className,
  children,
  inverted,
  href,
  ...other
}) => {
  const componentClassName = clsx(styles['card'], className, {
    [styles['card--inverted']]: inverted,
  });

  const TagName = href ? 'a' : 'div';

  return (
    <TagName href={href} className={componentClassName} {...other}>
      {children}
    </TagName>
  );
};
