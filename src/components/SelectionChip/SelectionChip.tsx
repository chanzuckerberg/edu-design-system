import clsx from 'clsx';
import React, { forwardRef } from 'react';

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
  leadingIcon?: IconName;
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
 * Compact, interactive UI elements used to make selections. Can have optional icon.
 *
 * ## Usage
 *
 * `SelectionChip` is used to represent user controls or selections outside the context of a form. `SelectionChip` can be used in place of a checkbox group, radioButton group, or toggle.
 * Unless used as a toggle, `SelectionChip` should always be presented as a group.
 *
 * `SelectionChip` helps users make quick choices that lead to an immediate action. Unlike form inputs that collect information for later use, selection chips support decisions that happen right away. A common example is choosing a clothing size before clicking "Add to Cart" - the size selection directly enables the main action of adding the item to your cart.
 *
 * There are a few benefits to using selectionChips over form-based selection, like checkbox or radio button groups:
 * * **Enable Quick Selection**: Use them when you want users to choose from a limited set of related, easily digestible options. For example, selection chips work well for selecting filters or tags in search and content filtering.
 * * **Show Multi-Select Options**: They’re ideal when users need the option to select multiple items at once, especially when toggling on/off multiple states or filters.
 * * **Enhance Readability in Tight Spaces**: Selection chips help maintain readability while maximizing the available screen space, especially on mobile.
 * * **Improve Visual Clarity**: They work best when there’s a need to show clear boundaries around items. Chips with subtle visual indicators like icons or colors can also convey context.
 * * **Replace Dropdowns or Radio Buttons**: When dropdowns or radio buttons feel too clunky or take up too much space, selection chips are a sleek alternative that’s easier to scan.
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

    const generatedIdVar = React.useId();
    const idVar = id || generatedIdVar;

    return (
      <label
        className={componentClassName}
        htmlFor={idVar}
        // TODO(next-major): use inert when using React 19+
        // inert={isDisabled}
        {...other}
      >
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
        {leadingIcon && <Icon name={leadingIcon} purpose="decorative" />}
        <Text
          as="span"
          className={styles['selection-chip__label']}
          preset="label-lg"
        >
          {label}
        </Text>
      </label>
    );
  },
);
