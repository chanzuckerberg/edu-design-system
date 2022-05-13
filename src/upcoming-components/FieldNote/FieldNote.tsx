import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './FieldNote.module.css';
import Icon, { IconName } from '../../components/Icon';

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
  iconName?: IconName;
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
export const FieldNote = ({
  className,
  id,
  iconName,
  isError,
  inverted,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['field-note'],
    className,
    inverted && styles['field-note--inverted'],
    isError && styles['eds-is-error'],
  );
  return (
    <div
      aria-live="assertive"
      className={componentClassName}
      id={id}
      {...other}
    >
      {isError && (
        <Icon
          className={styles['field-note__icon']}
          name={isError ? 'cancel' : undefined}
          purpose="informative"
          title="error"
        />
      )}
      {children}
    </div>
  );
};
