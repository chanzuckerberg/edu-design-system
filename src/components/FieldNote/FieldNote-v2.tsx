import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import Icon, { type IconName } from '../Icon';
import styles from './FieldNote-v2.module.css';

export interface Props {
  // Component API
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  // Design API
  /**
   * Toggles disabled styling of the field note.
   */
  disabled?: boolean;
  /**
   * Icon to use when an "icon" variant of the avatar. Default is "dangerous"
   */
  icon?: IconName;
  /**
   * Whether there is an error state for the field note text (and icon)
   */
  isError?: boolean;
  /**
   * Whether there is a warning state for the field note text (and icon)
   */
  isWarning?: boolean;
}

/**
 * `import {FieldNote} from "@chanzuckerberg/eds";`
 *
 * Fieldnote component wraps text to describe other components.
 */
export const FieldNote = ({
  children,
  className,
  id,
  disabled,
  icon,
  isError,
  isWarning,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['field-note'],
    disabled && styles['field-note--disabled'],
    isError && styles['field-note--error'],
    isWarning && styles['field-note--warning'],
    className,
  );

  let iconToUse = icon;
  if (isError) {
    iconToUse = 'dangerous';
  } else if (isWarning) {
    iconToUse = 'warning';
  } else if (icon) {
    iconToUse = icon;
  }

  return (
    <div className={componentClassName} id={id} {...other}>
      {(isError || isWarning || iconToUse) && (
        <Icon
          className={styles['field-note__icon']}
          name={iconToUse}
          purpose="informative"
          size="1rem"
          title={isError ? 'error' : 'warning'}
        />
      )}
      {children}
    </div>
  );
};

FieldNote.displayName = 'FieldNote';
