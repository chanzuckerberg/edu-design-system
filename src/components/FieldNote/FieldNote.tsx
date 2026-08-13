import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import type { Status } from '../../util/variant-types';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import Text from '../Text';
import styles from './FieldNote.module.css';

export type FieldNoteProps = {
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
   * **Default is `"critical"`**.
   */
  icon?: Extract<
    IconName,
    'critical-encircled-filled' | 'dangerous' | 'warning-filled'
  >;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
};

/**
 * ## Usage
 *
 * `FieldNote` is used to add additional context to the attached input control (e.g., `InputField`,
 * `TextareaField`, `Select`, `Combobox`, etc.). `FieldNote` should not be used in isolation, but
 * can be used when building a custom input control.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Default | Neutral helper text sitting below the control. | Format hints. Examples of valid input. |
 * | Warning | `status="warning"` adds a warning icon and treatment. | Input that is accepted but likely not what the user meant. |
 * | Critical | `status="critical"` adds an error icon and treatment. | Validation failures that block submission. |
 *
 * When building a custom control, give the note an `id` and add that `id` to the control's
 * `aria-describedby` so the note is announced with the control. The EDS controls that render a
 * `FieldNote` for you already wire this up.
 *
 * For guidance on what to put in a note, see the do's and don'ts on the control itself (for
 * example, `InputField`).
 */
export const FieldNote = ({
  children,
  className,
  id,
  disabled,
  icon,
  status,
  ...other
}: FieldNoteProps) => {
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
    iconToUse = 'critical-encircled-filled';
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
          size="16px"
          title={title}
        />
      )}
      <Text as="span" preset="body-sm">
        {children}
      </Text>
    </div>
  );
};

FieldNote.displayName = 'FieldNote';
