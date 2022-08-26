import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './FieldNote.module.css';
import Icon, { IconName } from '../Icon';

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
   * Toggles disabled styling of the field note.
   */
  disabled?: boolean;
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FieldNote} from "@chanzuckerberg/eds";
 * ```
 *
 * Fieldnote component wraps text to describe other components.
 */
export const FieldNote = ({
  className,
  disabled,
  id,
  isError,
  inverted,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['field-note'],
    disabled && styles['field-note--disabled'],
    inverted && styles['field-note--inverted'],
    isError && styles['field-note--error'],
    className,
  );
  return (
    <div className={componentClassName} id={id} {...other}>
      {isError && (
        <Icon
          className={styles['field-note__icon']}
          name="dangerous"
          purpose="informative"
          title="error"
        />
      )}
      {children}
    </div>
  );
};
