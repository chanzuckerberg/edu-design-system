import clsx from 'clsx';
import React, { ChangeEventHandler } from 'react';
import styles from './Select.module.css';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * The array of items to be passed into the select menu. The array must take on the specified shape
   */
  items?: any;
  /**
   * Toggle multiple select option
   */
  multiple?: boolean;
  /**
   * Function that fires when field value has changed
   */
  onChange?: ChangeEventHandler;
  /**
   * Option group label for select menus with option groups
   */
  optGroupLabel?: string;
  /**
   * Turns on read only status for select
   */
  readOnly?: boolean;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * The HTML value attribute of the select menu
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Select: React.FC<Props> = ({
  className,
  id,
  multiple,
  disabled,
  value,
  onChange,
  ariaDescribedBy,
  items,
  readOnly,
  required,
  ...other
}) => {
  const componentClassName = clsx(styles['select'], className, {});
  return (
    <select
      className={componentClassName}
      id={id}
      multiple={multiple}
      disabled={disabled}
      read-only={readOnly}
      required={required}
      value={value}
      aria-describedby={ariaDescribedBy}
      onChange={onChange}
      {...other}
    >
      {items.map((item: any, index: any) => {
        return item.optGroupLabel ? (
          <optgroup key={`option-${index}`} label={item.optGroupLabel}>
            {item.optGroupItems.map((optGroupItem: any, index: any) => {
              return (
                <option
                  key={`option-group-${index}`}
                  value={optGroupItem.value}
                >
                  {optGroupItem.label}
                </option>
              );
            })}
          </optgroup>
        ) : (
          <option key={`option-${index}`} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};
