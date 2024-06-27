import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import type { Status } from '../../util/variant-types';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import styles from './FieldNote.module.css';

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
   * Icon to use when an "icon" variant of the avatar.
   *
   * **Default is `"dangerous"`**.
   */
  icon?: Extract<IconName, 'dangerous' | 'warning-filled'>;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
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
  status,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['field-note'],
    disabled && styles['field-note--disabled'],
    status === 'critical' && styles['field-note--error'],
    status === 'warning' && styles['field-note--warning'],
    className,
  );

  let iconToUse = icon;
  let title = 'fieldnote status icon';
  if (status === 'critical') {
    iconToUse = 'dangerous';
    title = 'error';
  } else if (status === 'warning') {
    iconToUse = 'warning-filled';
    title = 'warning';
  }

  return (
    <div
      aria-disabled={disabled ?? undefined}
      className={componentClassName}
      id={id}
      {...other}
    >
      {(status === 'critical' || status === 'warning' || iconToUse) && (
        <Icon
          className={styles['field-note__icon']}
          name={iconToUse}
          purpose="informative"
          size="1rem"
          title={title}
        />
      )}
      {children}
    </div>
  );
};

FieldNote.displayName = 'FieldNote';
