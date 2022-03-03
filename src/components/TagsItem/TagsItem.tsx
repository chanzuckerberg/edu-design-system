import React, { useState } from 'react';
import clsx from 'clsx';
import styles from '../Tags/Tags.module.css';
import { Icon } from '../Icon/Icon';

export interface Props {
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
  onClick?: Function;
  /**
   * Text string of the tag
   */
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const TagsItem: React.FC<Props> = ({
  className,
  dismissible,
  onClick,
  text,
  ...other
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  function handleOnClick(e) {
    console.log('Hello');
    e.preventDefault();
    if (dismissible === true) {
      setIsDismissed(true);
    }
    if (onClick) {
      onClick(e);
    }
  }

  const componentClassName = clsx('tags__item', className, {});
  return (
    isDismissed !== true && (
      <li className={componentClassName} {...other}>
        <button
          className={styles['tags__tag']}
          onClick={(e) => handleOnClick(e)}
        >
          <span className={styles['tags__text']}>{text}</span>
          {dismissible && (
            <Icon className={styles['tags__icon']} name="x" title="Close" />
          )}
        </button>
      </li>
    )
  );
};
