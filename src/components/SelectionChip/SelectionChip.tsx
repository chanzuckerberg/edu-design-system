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
 * ## Usage
 *
 * Compact, interactive UI elements used to make selections. Can have an optional icon.
 *
 * A selection chip is an interactive chip that can be selected, deselected, or toggled. Use it to represent user controls or selections outside the context of a form, in place of a checkbox group, radio button group, or toggle. Common uses include filtering content and selecting multiple items.
 *
 * ### Best Practices
 *
 * * **Enable quick selection**: When you want users to choose from a limited set of related, easily digestible options, such as selecting filters or tags in search and content filtering.
 * * **Show multi-select options**: When users need the option to select multiple items at once, especially when toggling on/off multiple states or filters.
 * * **Enhance readability in tight spaces**: Selection chips help maintain readability while maximizing available screen space, especially on mobile.
 * * **Improve visual clarity**: When you need to show clear boundaries around items. Chips with subtle visual indicators like icons or colors can also convey context.
 * * **Replace dropdowns or radio buttons**: When dropdowns or radio buttons are too clunky or take up too much space.
 *
 * ## Interaction
 *
 * Unless used as a toggle, chips should always be presented as a group.
 *
 * Selection chips don't have built-in error handling. To show that something went wrong with a selection, pair the chips with an `InlineNotification` or `FieldNote` component to display the error message.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep labels to 1-2 words.
 * * Represent one piece of info per chip. This could be a discrete thing, a grouping, category, etc.
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
        <div className={styles['selection-chip__body']}>
          {leadingIcon && <Icon name={leadingIcon} purpose="decorative" />}
          <Text
            as="span"
            className={styles['selection-chip__label']}
            preset="label-lg"
          >
            {label}
          </Text>
        </div>
      </label>
    );
  },
);
