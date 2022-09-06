import React, { useState, MouseEvent } from 'react';
import Icon from '../../components/Icon';
import styles from '../Tags/Tags.module.css';

export interface TagsItemProps {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles whether or not a tag is dismissible (rendered with an x button)
   */
  dismissible?: boolean;
  /**
   * Click handler function that a user can pass in when a tag is clicked
   */
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  /**
   * Text string of the tag
   */
  text: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TagsItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const TagsItem = ({
  className,
  dismissible,
  onClick,
  text,
  ...other
}: TagsItemProps) => {
  const [isDismissed, setIsDismissed] = useState(false);

  function handleOnClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (dismissible === true) {
      setIsDismissed(true);
    }
    if (onClick) {
      onClick(e);
    }
  }
  if (isDismissed) {
    return null;
  }

  return (
    <li className={className} {...other}>
      <button className={styles['tags__tag']} onClick={handleOnClick}>
        <span>{text}</span>
        {dismissible && (
          <Icon
            className={styles['tags__icon']}
            name="close"
            purpose="informative"
            size="0.875rem"
            title="Close"
          />
        )}
      </button>
    </li>
  );
};
