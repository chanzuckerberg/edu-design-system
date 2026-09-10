import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { assertEdsUsage } from '../../util/logging';
import type { IconOrContent } from '../../util/utility-types';
import type { Status } from '../../util/variant-types';
import { hasSlotContent, IconSlot, useSemanticIcon } from '../Icon';
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
   * Leading slot for the note. Takes an EDS icon name, or any content to render in its
   * place at 16px.
   *
   * Only set this alongside a `status`. A note with no status has nothing for an icon to
   * report, and the icon reads as a status the note does not have; EDS warns in that case.
   *
   * `status` supplies this slot's default, and the icon it picks comes from
   * `IconProvider`, so an app changes every status icon in one place. An explicit value
   * here wins over that default for this one note, and the status treatment (color, and
   * the announced "error"/"warning") still applies.
   *
   * Custom content is rendered as-is and carries its own accessible treatment, so it does
   * not receive the status title an icon name would.
   */
  icon?: IconOrContent;
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

  const hasStatusIcon = status === 'critical' || status === 'warning';

  assertEdsUsage(
    [!hasStatusIcon && hasSlotContent(icon)],
    'FieldNote can only show an icon when `status` is "warning" or "critical". Otherwise the icon reports a state the note does not have.',
  );

  // The status icon is semantic, so which glyph a status draws is set app-wide through
  // `IconProvider`.
  const statusIcon = useSemanticIcon(hasStatusIcon ? status : undefined);

  // `status` is a default for the slot, not an override of it. An explicitly passed value
  // losing to an inferred one is the surprising direction, and it would silently drop a
  // consumer's own content the moment a status was set.
  const iconToUse = hasSlotContent(icon) ? icon : statusIcon;

  // Describes the status rather than whichever icon renders, so it stays correct when a
  // consumer swaps the icon out. `IconSlot` applies it to an icon name only.
  const title =
    status === 'critical'
      ? 'error'
      : status === 'warning'
        ? 'warning'
        : 'fieldnote status icon';

  return (
    <div
      aria-disabled={disabled ?? undefined}
      className={componentClassName}
      id={id}
      {...other}
    >
      <IconSlot
        className={styles['field-note__icon']}
        content={iconToUse}
        purpose="informative"
        size="16px"
        title={title}
      />
      <Text as="span" preset="body-sm">
        {children}
      </Text>
    </div>
  );
};

FieldNote.displayName = 'FieldNote';
