import clsx from 'clsx';
import React, { type MouseEventHandler } from 'react';
import type { Size } from '../../util/variant-types';
import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './InputChip.module.css';

export interface Props {
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
   * Leading glyph (icon) for the chip
   */
  leadingComponent: IconName | React.ReactNode; // TODO: check that it only allows Avatar
  /**
   * click handler for the action button on the chip (ex: to dismiss or remove the chip from the screen)
   */
  onClick?: MouseEventHandler;
  /**
   * The display size of the chip
   */
  size?: Extract<Size, 'sm' | 'md'>;
}

/**
 * `import {InputChip} from "@chanzuckerberg/eds";`
 *
 * Compact, interactive elements used to display user-generated information.
 */
export const InputChip = ({
  className,
  isDisabled,
  label,
  leadingComponent,
  onClick,
  size = 'md',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['input-chip'],
    isDisabled && styles[`input-chip--disabled`],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['input-chip__label']}>
        {leadingComponent && typeof leadingComponent === 'string' && (
          <Icon
            className={styles['input-chip__leading-component']}
            name={leadingComponent as IconName}
            purpose="decorative"
          />
        )}
        <Text as="span" preset="body-xs">
          {label}
        </Text>
      </div>
      <button
        className={styles['input-chip__action-button']}
        disabled={isDisabled}
        onClick={onClick}
      >
        <Icon name="close" purpose="informative" title={`remove ${label}`} />
      </button>
    </div>
  );
};
