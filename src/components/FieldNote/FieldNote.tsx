import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './FieldNote.module.css';
import { Icon } from '../Icon/Icon';

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
   * Name of the fieldnote icon
   */
  iconName?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * Inverted variation for dark backgrounds
   */
  inverted?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const FieldNote: React.FC<Props> = ({
  className,
  id,
  iconName,
  isError,
  inverted,
  children,
  ...other
}) => {
  const componentClassName = clsx(
    styles['field-note'],
    className,
    inverted && styles['field-note--inverted'],
    isError && styles['eds-is-error'],
  );
  return (
    <div
      className={componentClassName}
      aria-live="assertive"
      id={id}
      {...other}
    >
      {isError && (
        <Icon
          className={styles['field-note__icon']}
          title="error"
          name={isError && 'x-circle'}
        />
      )}
      {children}
    </div>
  );
};
