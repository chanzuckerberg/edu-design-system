import {
  Label,
  Listbox,
  type ListboxProps,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';

import React, {
  useContext,
  useState,
  type ReactNode,
  type MouseEventHandler,
  type ElementType,
} from 'react';

import type { ExtractProps } from '../../util/utility-types';
import type { Status } from '../../util/variant-types';
import FieldLabel from '../FieldLabel';
import FieldNote from '../FieldNote';
import Icon, { type IconName } from '../Icon';

import PopoverContainer from '../PopoverContainer';
import PopoverListItem from '../PopoverListItem';
import Text from '../Text';

import styles from './Select.module.css';

type SelectProps = ListboxProps<
  ElementType,
  string | { [k: string]: unknown },
  { [k: string]: unknown }
> & {
  // Component API
  /**
   * Screen-reader text for the select's label.
   *
   * When possible, use a visible label by passing a <Select.Label> into `children`.
   * In rare cases where there's no visible label, you must provide an `aria-label` for screen readers.
   * If you pass in an `aria-label`, <Select.Label>.
   */
  'aria-label'?: string;
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * Name of the form element, which triggers the generation of hidden key/value form fields (e.g. `name=$name[$key]`).
   *
   * See: https://headlessui.com/react/listbox#using-with-html-forms
   */
  name?: string;
  /**
   * Optional className for additional options menu styling.
   *
   * When not using the compact variant, if optionsClassName is provided please
   * include the width property to define the options menu width.
   */
  optionsClassName?: string;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  // Design API
  /**
   * Text under the text input used to provide a description or error message to describe the input.
   */
  fieldNote?: ReactNode;
  /**
   * Visible text label for the component.
   */
  label?: string;
  /**
   * Whether the label is adjacent to the field (horizontal) or above the field (vertical)
   *
   * **Default is `"vertical"`**.
   */
  labelLayout?: 'vertical' | 'horizontal';
  /**
   * Whether it should show the field hint or not
   *
   * **Default is `"false"`**.
   */
  showHint?: boolean;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
};

type SelectLabelProps = ExtractProps<typeof Label> & {
  disabled?: boolean;
  required?: boolean;
  showHint?: boolean;
};
type SelectOptionsProps = ExtractProps<typeof ListboxOptions>;
type SelectOptionProps = ExtractProps<typeof ListboxOption> & {
  optionClassName?: string;
};
type SelectButtonProps = ExtractProps<typeof ListboxButton> & {
  // Design API
  /**
   * Icon override for component. Default is 'chevron-down'
   */
  icon?: Extract<IconName, 'chevron-down'>;
  /**
   * Indicates state of the select, used to style the button.
   */
  isOpen?: boolean;
};

type SelectButtonWrapperProps = {
  // Component API
  /**
   * Text placed inside the button to describe the field.
   */
  children?: ReactNode;
  /**
   * Optional className for additional styling.
   */
  className?: string;
  // Design API
  /**
   * Icon override for component. Default is 'chevron-down'
   */
  icon?: Extract<IconName, 'chevron-down'>;
  /**
   * Indicates state of the select, used to style the button.
   */
  isOpen?: boolean;
  /**
   * custom click handler for the built-in or wrapper button
   */
  onClick?: MouseEventHandler;
  /**
   * Whether we should truncate the text displayed in the select field
   */
  shouldTruncate?: boolean;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
};

type SelectContextType = {
  optionsClassName?: string;
  status?: SelectButtonWrapperProps['status'];
};

let showNameWarning = true;

const SelectContext = React.createContext<SelectContextType>({});

/**
 * `import {Select} from "@chanzuckerberg/eds";`
 *
 * A popover that reveals or hides a list of options from which to select
 *
 * Supports controlled and uncontrolled behavior, using a render prop in the latter case.
 *
 */
export function Select({
  'aria-label': ariaLabel,
  children,
  className,
  disabled,
  fieldNote,
  id,
  label,
  labelLayout = 'vertical',
  name,
  optionsClassName,
  required,
  showHint,
  status,
  onChange: theirOnChange,
  ...other
}: SelectProps) {
  if (process.env.NODE_ENV !== 'production') {
    if (!name && showNameWarning) {
      console.warn(
        "%c`Select` won't render a form field unless you include a `name` prop.\n\n See https://headlessui.com/react/listbox#using-with-html-forms for more information",
        'font-weight: bold',
      );
      showNameWarning = false;
    }
  }

  // Create a new value to track the internal state of Listbox. Added to work around
  // behavior inherited from HeadlessUI where it will fire onChange even if there is no change
  // Adding to support behavior synced to how <select> tags work
  const [selectedValue, setSelectedValue] = useState(
    other.value !== undefined ? other.value : other.defaultValue,
  );

  const componentClassName = clsx(
    styles['select'],
    fieldNote && styles['select--has-fieldNote'],
    labelLayout && styles[`select--label-layout-${labelLayout}`],
    className,
  );
  const sharedProps: SelectProps = {
    className: componentClassName,
    // Provide a wrapping <div> element for the select. This is needed so that any props
    // passed directly to this component have a corresponding DOM element to receive them.
    // Otherwise we get an error.
    as: 'div' as const,
    disabled,
    name,
    ...other,
  };

  if (typeof children === 'function') {
    return (
      <SelectContext.Provider value={{ optionsClassName, status }}>
        <Listbox
          {...sharedProps}
          // We prefer to pass the aria-label in via an invisible SelectLabel, but we can't
          // easily pass down function children with component children, so we'll settle for
          // using a standard aria-label in this case.
          aria-label={ariaLabel}
        >
          {children}
        </Listbox>
      </SelectContext.Provider>
    );
  }

  return (
    <SelectContext.Provider value={{ optionsClassName, status }}>
      <Listbox
        {...sharedProps}
        onChange={(changedValue) => {
          if (selectedValue !== changedValue) {
            setSelectedValue(changedValue);
            // Use the value from the event because updates to `useState` are queued
            theirOnChange && theirOnChange(changedValue);
          }
        }}
      >
        {(label || required) && (
          <Select.Label
            disabled={disabled}
            required={required}
            showHint={showHint}
          >
            {label}
          </Select.Label>
        )}
        {children}
      </Listbox>
      {fieldNote && (
        <div className={styles['select__footer']}>
          <FieldNote disabled={disabled} status={status}>
            {fieldNote}
          </FieldNote>
        </div>
      )}
    </SelectContext.Provider>
  );
}

const SelectLabel = ({
  children: label,
  required,
  className,
  disabled,
  showHint,
}: SelectLabelProps) => {
  const componentClassName = clsx(
    styles['select__label'],
    disabled && clsx(styles['select__label--disabled']),
    className,
  );

  const requiredTextClassName = clsx(
    styles['select__required-text'],
    disabled && styles['select__required-text--disabled'],
  );

  const overlineClassName = clsx(
    styles['select__overline'],
    !label && styles['select__overline--no-label'],
  );

  return (
    <div className={overlineClassName}>
      <Label
        as={FieldLabel}
        className={componentClassName}
        disabled={disabled}
        size="md"
      >
        {label}
      </Label>
      {required && showHint && (
        <Text
          aria-disabled={disabled ?? undefined}
          as="span"
          className={requiredTextClassName}
          preset="body-sm"
        >
          (Required)
        </Text>
      )}
      {!required && showHint && (
        <Text
          aria-disabled={disabled ?? undefined}
          as="span"
          className={requiredTextClassName}
          preset="body-sm"
        >
          (Optional)
        </Text>
      )}
    </div>
  );
};

/**
 * The trigger for the select component, which is usually a form of `Button` or some targetable/clickable component
 */
const SelectButton = function (props: SelectButtonProps) {
  const { children, className, onClick: theirOnClick, ...other } = props;
  const { status } = useContext(SelectContext);
  return (
    <ListboxButton
      // Render as a fragment instead of the default element. We're rendering our own element in
      // the render prop to control styling and positiong, and we don't want to end up with
      // duplicate buttons.
      as={React.Fragment}
      {...other}
    >
      {(renderProps) => {
        return typeof children === 'function' ? (
          children(renderProps)
        ) : (
          <SelectButtonWrapper
            className={className}
            isOpen={renderProps.open}
            onClick={(event) => {
              theirOnClick && theirOnClick(event);
            }}
            status={status}
          >
            {children}
          </SelectButtonWrapper>
        );
      }}
    </ListboxButton>
  );
};

/**
 * The content container showing the available options when the trigger is activated
 */
const SelectOptions = function (props: SelectOptionsProps) {
  const {
    anchor = { to: 'bottom start', gap: 12 },
    className,
    ...other
  } = props;
  const { optionsClassName } = useContext(SelectContext);

  const componentClassName = clsx(
    styles['select__options'],
    className,
    optionsClassName,
  );

  return (
    <ListboxOptions
      anchor={anchor}
      as={PopoverContainer}
      className={componentClassName}
      modal={false}
      {...other}
    />
  );
};

/**
 * Represents one of the available options for selection
 */
const SelectOption = function (props: SelectOptionProps) {
  const { children, className, optionClassName, ...other } = props;

  const optionItemClassName = clsx(optionClassName, styles['select__option']);

  return (
    <ListboxOption
      // Render as a fragment instead of the default <li>. We're rendering our own <li> in the
      // render prop to control active/selected styling, and we don't want to end up with duplicate
      // <li>'s.
      as={React.Fragment}
      {...other}
    >
      {typeof children === 'function'
        ? children
        : ({ focus, disabled, selected }) => {
            return (
              <PopoverListItem
                className={optionItemClassName}
                icon={selected ? 'check' : undefined}
                isDisabled={disabled}
                isFocused={focus}
              >
                <span className={styles['select__option-text']}>
                  {children}
                </span>
              </PopoverListItem>
            );
          }}
    </ListboxOption>
  );
};

/**
 * The component functioning as a styling for the trigger, selection arrow, and space to
 * show the current value.
 */
export const SelectButtonWrapper = React.forwardRef<
  HTMLButtonElement,
  SelectButtonWrapperProps
>(
  (
    {
      children,
      className,
      icon = 'chevron-down',
      isOpen,
      onClick: theirOnClick,
      shouldTruncate = false,
      ...other
    },
    ref,
  ) => {
    const { status } = useContext(SelectContext);

    const componentClassName = clsx(
      styles['select-button'],
      status === 'warning' && styles['select-button--warning'],
      status === 'critical' && styles['select-button--error'],
      className,
    );
    const iconClassName = clsx(
      styles['select-button__icon'],
      isOpen && styles['select-button__icon--reversed'],
    );
    const textClassName = clsx(
      shouldTruncate && styles['select-button__text--truncated'],
    );

    return (
      <button
        className={componentClassName}
        onClick={(ev) => {
          theirOnClick && theirOnClick(ev);
        }}
        ref={ref}
        type="button"
        {...other}
      >
        {/* Wrapping span ensures that `children` and icon will be correctly pushed to
            either side of the button even if `children` contains more than one element. */}
        <Text as="span" className={textClassName} preset="input">
          {children}
        </Text>
        <Icon
          className={iconClassName}
          name={icon}
          purpose="decorative"
          size="1.5rem"
        />
      </button>
    );
  },
);

Select.displayName = 'Select';
SelectButton.displayName = 'Select.Button';
SelectButtonWrapper.displayName = 'Select.ButtonWrapper';
SelectLabel.displayName = 'Select.Label';
SelectOption.displayName = 'Select.Option';
SelectOptions.displayName = 'Select.Options';

Select.Button = SelectButton;
Select.ButtonWrapper = SelectButtonWrapper;
Select.Label = SelectLabel;
Select.Option = SelectOption;
Select.Options = SelectOptions;
