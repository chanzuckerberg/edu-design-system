import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './AvatarBlock.module.css';

import { Avatar } from '../..';

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
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
}

/**
 * Primary UI component for user interaction
 */
export const AvatarBlock: React.FC<Props> = ({
  children,
  className,
  href,
  ...other
}) => {
  const TagName = createTagName();

  function createTagName() {
    if (href) {
      return 'a';
    } else {
      return 'button';
    }
  }

  const componentClassName = clsx(styles['avatar-block'], className, {});
  return (
    <TagName className={componentClassName} {...other}>
      <div className={styles['avatar-block__header']}>
        <Avatar />
      </div>
      <div className={styles['avatar-block__body']}>{children}</div>
    </TagName>
  );
};
