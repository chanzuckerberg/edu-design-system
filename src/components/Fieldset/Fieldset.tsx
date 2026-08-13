import clsx from 'clsx';
import type { ReactNode } from 'react';

import React, { createContext, useContext } from 'react';

import { assertEdsUsage } from '../../util/logging';
import type { RenderProps } from '../../util/utility-types';
import type { Status } from '../../util/variant-types';

import FieldLabel from '../FieldLabel';
import FieldNote from '../FieldNote';
import Text from '../Text';

import styles from './Fieldset.module.css';

type FieldsetSharedProps = {
  /**
   * Indicates disabled state of the input.
   */
  isDisabled?: boolean;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
};

type FieldsetProps = {
  // Component API
  /**
   * The contents of the fieldset. We suggest a Fieldset.Legend followed by
   * interactive elements within Fieldset.Items.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  // Design API
  /**
   * Text under the component used to provide a description or error message to describe the state.
   */
  fieldNote?: ReactNode;
} & FieldsetSharedProps &
  React.HTMLAttributes<HTMLFieldSetElement>;

type FieldsetItemsProps = {
  // Component API
  /**
   * Type of element the immediate wrapper around the contents should be.
   *
   * **Default is `"div"`**.
   */
  as?: string | React.ElementType;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
} & RenderProps<FieldsetSharedProps>;

type FieldsetLegendProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * Whether it should show the field hint or not
   *
   * **Default is `"false"`**.
   */
  showHint?: boolean;
  /**
   * Secondary text used to describe the content in more detail
   */
  subTitle?: string;
  /**
   * The title/heading of the component
   */
  title?: string;
} & FieldsetSharedProps;

const FieldsetContext = createContext<FieldsetSharedProps>({});

/**
 * ## Usage
 *
 * Label and contain a set of fields, to clearly indicate the fields have a close relationship.
 * Especially useful when showing `Checkbox` and `Radio` controls in a set. Can show its own label
 * and field note.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Radio set | Groups mutually exclusive options under a single legend. | Picking one plan, one delivery method, one answer. |
 * | Checkbox set | Groups related checkboxes that answer one question. | "Select all that apply" questions. |
 * | With a field note | `fieldNote` adds a description or error below the group, and inherits the group's `status`. | Validation that applies to the set rather than one control. |
 *
 * Compose it as a `Fieldset.Legend` to label the group, followed by the controls wrapped in
 * `Fieldset.Items`. `isDisabled` and `status` set on `Fieldset` flow down to both.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `Fieldset` when you wish to label a set of `Radio` fields, and want to avoid lengthy text in an adjacent element.
 *
 * ### Don'ts
 *
 * * Avoid using `Fieldset` with non-control content, like blocks of text or other components. Instead, use `Card`.
 * * Don't use `Fieldset` with `Checkbox` unless the checkboxes are part of an overlapping set (e.g., "Select all that apply" in the label for the `Fieldset`).
 *
 * ## Resources
 *
 * * https://www.w3.org/WAI/WCAG22/Techniques/html/H71
 */
export function Fieldset({
  children,
  className,
  fieldNote,
  isDisabled,
  status,
}: FieldsetProps) {
  return (
    <FieldsetContext.Provider value={{ isDisabled, status }}>
      <fieldset className={className}>{children}</fieldset>
      {fieldNote && (
        <div className={styles['fieldset__footer']}>
          <FieldNote disabled={isDisabled} status={status}>
            {fieldNote}
          </FieldNote>
        </div>
      )}
    </FieldsetContext.Provider>
  );
}

/**
 * Helper sub-component for styling the control elements in the component.
 */
export const FieldsetItems = ({
  children,
  as: Component = 'div',
  className,
  ...other
}: FieldsetItemsProps) => {
  const props = useContext(FieldsetContext);

  const componentClassName = clsx(styles['fieldset-items'], className);
  return (
    <Component className={componentClassName} {...other}>
      {typeof children === 'function' ? children(props) : <>{children}</>}
    </Component>
  );
};

/**
 * Helper sub-component for styling the legend in a fieldset.
 */
const FieldsetLegend = ({
  className,
  isDisabled: _,
  required,
  showHint,
  subTitle,
  title,
  ...other
}: FieldsetLegendProps) => {
  const { isDisabled } = useContext(FieldsetContext);

  const componentClassName = clsx(
    styles['fieldset-legend'],
    isDisabled && styles['fieldset-legend--disabled'],
    className,
  );

  assertEdsUsage(
    [!title && !!subTitle],
    'When using "subTitle" you must also use "title"',
  );

  return (
    <legend
      aria-disabled={isDisabled ?? undefined}
      className={componentClassName}
      {...other}
    >
      {title && (
        <div className={styles['fieldset-legend__overline']}>
          {title && (
            <FieldLabel disabled={isDisabled} size="md">
              {title}
            </FieldLabel>
          )}
          {required && showHint && (
            <Text
              aria-disabled={isDisabled ?? undefined}
              as="span"
              className={styles['fieldset-legend__hint']}
              preset="body-sm"
            >
              (Required)
            </Text>
          )}
          {!required && showHint && (
            <Text
              aria-disabled={isDisabled ?? undefined}
              as="span"
              className={styles['fieldset-legend__hint']}
              preset="body-sm"
            >
              (Optional)
            </Text>
          )}
        </div>
      )}
      {subTitle && <FieldNote disabled={isDisabled}>{subTitle}</FieldNote>}
    </legend>
  );
};

Fieldset.displayName = 'Fieldset';
FieldsetItems.displayName = 'Fieldset.Items';
FieldsetLegend.displayName = 'Fieldset.Legend';

Fieldset.Items = FieldsetItems;
Fieldset.Legend = FieldsetLegend;
