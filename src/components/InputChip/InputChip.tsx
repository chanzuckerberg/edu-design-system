import clsx from 'clsx';
import React, { type MouseEventHandler } from 'react';
import type { IconOrContent } from '../../util/utility-types';
import type { Size } from '../../util/variant-types';
import { IconSlot, useSemanticIcon } from '../Icon';
import Text from '../Text';

import styles from './InputChip.module.css';

export type InputChipProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Whether the chip is in a non-interactive, disabled state
   */
  isDisabled?: boolean;
  /**
   * Text used in the chip to give it a description
   */
  label: string;
  /**
   * Leading slot for the chip. Takes an EDS icon name, or any content to render in its
   * place at the chip's own type size.
   */
  leadingComponent?: IconOrContent;
  /**
   * click handler for the action button on the chip (ex: to dismiss or remove the chip from the screen)
   */
  onClick?: MouseEventHandler;
  /**
   * The display size of the chip
   */
  size?: Extract<Size, 'sm' | 'md'>;
};

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Input | A chip that represents user-generated input and can be edited or removed. | Displaying selected tags, keywords, or values in a form or input field, or combining multiple pieces of data such as a name and avatar. |
 *
 * ### Best Practices
 *
 * * **Displaying multi-selection from a large list**: show selections already made without reopening a long select dropdown. Input chips are most helpful when the list of options exceeds 15 items.
 * * **Representing search filters or criteria**: show active filters or search parameters to make complex filtering feel organized and easily editable.
 * * **Handling user-generated or free-form data**: transform user-entered text (e.g., email addresses) into a discrete component that confirms the UI recognizes the input.
 *
 * ## Interaction
 *
 * Unless used as a toggle, chips should always be presented as a group. Depending on the use, groups can either wrap to multiple lines or scroll horizontally.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep labels to 1-2 words.
 * * Represent one piece of information per chip (a discrete thing, grouping, or category).
 */
export const InputChip = ({
  className,
  isDisabled,
  label,
  leadingComponent,
  onClick,
  size = 'md',
  ...other
}: InputChipProps) => {
  const componentClassName = clsx(
    styles['input-chip'],
    isDisabled && styles[`input-chip--disabled`],
    className,
  );

  // The chip's action button is semantic: it is the same close affordance as every other
  // one in the app, so it is set once through `IconProvider` rather than per chip. The
  // leading slot above is the consumer's to fill, and is left alone.
  const closeIcon = useSemanticIcon('close');

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['input-chip__label']}>
        <IconSlot
          className={styles['input-chip__leading-component']}
          content={leadingComponent}
          purpose="decorative"
        />
        <Text as="span" preset="body-xs">
          {label}
        </Text>
      </div>
      <button
        className={styles['input-chip__action-button']}
        disabled={isDisabled}
        onClick={onClick}
      >
        <IconSlot
          content={closeIcon}
          purpose="informative"
          title={`remove ${label}`}
        />
      </button>
    </div>
  );
};
