import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import Icon, { type IconName } from '../Icon';
import styles from './FieldNote.module.css';

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
   * Icon to use when an "icon" variant of the avatar. Default is "dangerous"
   */
  icon?: IconName;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Error state of the form field
   */
  isError?: boolean;
}

/**
 * `import {FieldNote} from "@chanzuckerberg/eds";`
 *
 * Fieldnote component wraps text to describe other components.
 */
export const FieldNote = ({
  className,
  disabled,
  icon = 'dangerous',
  id,
  isError,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['field-note'],
    disabled && styles['field-note--disabled'],
    isError && styles['field-note--error'],
    className,
  );
  return (
    <div className={componentClassName} id={id} {...other}>
      {isError && (
        <Icon
          className={styles['field-note__icon']}
          name={icon}
          purpose="informative"
          size="1rem"
          title="error"
        />
      )}
      {children}
    </div>
  );
};

FieldNote.displayName = 'FieldNote';
