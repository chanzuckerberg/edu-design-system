import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { useId } from '../../util/useId';
import type { ForwardedRefComponent } from '../../util/utility-types';

import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './SelectionChip.module.css';

export type SelectionChipProps = {
  // Component API
  // Design API
  /**
   * Whether the chip is disabled or not
   */
  isDisabled?: boolean;
  /**
   * Text used in the chip to give it a description
   */
  label: string;
  /**
   * Leading icon for the chip
   */
  leadingIcon: IconName;
  /**
   * Chip types (correspond to the equivalent input types)
   */
  type?: 'checkbox' | 'radio';
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'id' | 'name' | 'className' | 'checked' | 'defaultChecked' | 'onChange'
>;

type SelectionChipRefProps = ForwardedRefComponent<
  HTMLInputElement,
  SelectionChipProps
>;

/**
 * `import {SelectionChip} from "@chanzuckerberg/eds";`
 *
 * Compact, interactive UI elements used to make selections.
 */
export const SelectionChip: SelectionChipRefProps = forwardRef(
  (
    {
      checked,
      className,
      defaultChecked,
      id,
      isDisabled,
      label,
      leadingIcon,
      name,
      onChange,
      type = 'checkbox',
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['selection-chip'],
      leadingIcon && styles['selection-chip--has-icon'],
      isDisabled && styles['selection-chip--disabled'],
      className,
    );

    const generatedIdVar = useId();
    const idVar = id || generatedIdVar;

    return (
      <label className={componentClassName} htmlFor={idVar} {...other}>
        {leadingIcon && <Icon name={leadingIcon} purpose="decorative" />}
        <Text
          as="span"
          className={styles['selection-chip__label']}
          preset="label-lg"
        >
          {label}
        </Text>
        <input
          checked={checked}
          className={styles['selection-chip__input']}
          defaultChecked={defaultChecked}
          disabled={isDisabled}
          id={idVar}
          name={name}
          onChange={onChange}
          ref={ref}
          type={type}
        />
      </label>
    );
  },
);
