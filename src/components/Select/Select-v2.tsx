import { Listbox } from '@headlessui/react';
import clsx from 'clsx';

import React, {
  useContext,
  useState,
  type ReactNode,
  type MouseEventHandler,
} from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { useId } from '../../util/useId';
import type { ExtractProps } from '../../util/utility-types';
import type { Status } from '../../util/variant-types';
import FieldLabel from '../FieldLabel';
import { FieldNoteV2 as FieldNote } from '../FieldNote';
import { IconV2 as Icon, type IconNameV2 as IconName } from '../Icon';
import {
  defaultPopoverModifiers,
  PopoverContainerV2 as PopoverContainer,
} from '../PopoverContainer';
import type { PopoverContext, PopoverOptions } from '../PopoverContainer';
import { PopoverListItemV2 as PopoverListItem } from '../PopoverListItem';
import Text from '../Text';

import styles from './Select-v2.module.css';

type SelectProps = ExtractProps<typeof Listbox> &
  PopoverOptions & {
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

type SelectLabelProps = ExtractProps<typeof Listbox.Label> & {
  disabled?: boolean;
  htmlFor: string;
  required?: boolean;
  showHint?: boolean;
};
type SelectOptionsProps = ExtractProps<typeof Listbox.Options>;
type SelectOptionProps = ExtractProps<typeof Listbox.Option> & {
  optionClassName?: string;
};
type SelectButtonProps = ExtractProps<typeof Listbox.Button> & {
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
  status?: 'default' & Extract<Status, 'warning' | 'critical'>;
};

type SelectContextType = PopoverContext & {
  optionsClassName?: string;
  status?: SelectButtonWrapperProps['status'];
};

let showNameWarning = true;

function childrenHaveLabelComponent(children?: ReactNode): boolean {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.some((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return false;
    } else if (
      'props' in child &&
      child.type &&
      typeof child.type !== 'string' &&
      child.type?.name === 'SelectLabel'
    ) {
      return true;
    } else if ('props' in child && child.props.children) {
      return childrenHaveLabelComponent(child.props.children);
    }
    return false;
  });
}

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
  modifiers = defaultPopoverModifiers,
  name,
  onFirstUpdate,
  optionsClassName,
  placement = 'bottom-start',
  required,
  showHint,
  status,
  strategy,
  onChange: theirOnChange,
  ...other
}: SelectProps) {
  if (process.env.NODE_ENV !== 'production') {
    const childrenHaveLabel =
      children && childrenHaveLabelComponent(children as ReactNode);
    if (!ariaLabel && !label && !childrenHaveLabel) {
      throw new Error('You must provide a visible label or `aria-label`.');
    }
    if (!name && showNameWarning) {
      console.warn(
        "%c`Select` won't render a form field unless you include a `name` prop.\n\n See https://headlessui.com/react/listbox#using-with-html-forms for more information",
        'font-weight: bold',
      );
      showNameWarning = false;
    }
  }

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    referenceElement,
    popperElement,
    { placement, modifiers, strategy, onFirstUpdate },
  );

  // Create a new value to track the internal state of Listbox. Added to work around
  // behavior inherited from HeadlessUI where it will fire onChange even if there is no change
  // Adding to support behavior synced to how <select> tags work
  const [selectedValue, setSelectedValue] = useState(
    other.value !== undefined ? other.value : other.defaultValue,
  );

  const generatedIdVar = useId();
  const idVar = id || generatedIdVar;

  const componentClassName = clsx(
    styles['select'],
    fieldNote && styles['select--has-fieldNote'],
    labelLayout && styles[`select--label-layout-${labelLayout}`],
    className,
  );
  const sharedProps = {
    className: componentClassName,
    // Provide a wrapping <div> element for the select. This is needed so that any props
    // passed directly to this component have a corresponding DOM element to receive them.
    // Otherwise we get an error.
    as: 'div' as const,
    disabled,
    id: idVar,
    name,
    ...other,
  };

  const contextValue = Object.assign(
    {},
    optionsClassName ? { optionsClassName } : null,
    { setReferenceElement },
    { setPopperElement },
    { popperStyles: popperStyles.popper },
    { popperAttributes: popperAttributes.popper },
    { status },
  );

  if (typeof children === 'function') {
    return (
      <SelectContext.Provider value={contextValue}>
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
    <SelectContext.Provider value={contextValue}>
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
            htmlFor={idVar}
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
  htmlFor,
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
      <Listbox.Label
        as={FieldLabel}
        className={componentClassName}
        disabled={disabled}
        htmlFor={htmlFor}
      >
        {label}
      </Listbox.Label>
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
  const { setReferenceElement, status } = useContext(SelectContext);
  return (
    <Listbox.Button
      // Render as a fragment instead of the default element. We're rendering our own element in
      // the render prop to control styling and positiong, and we don't want to end up with
      // duplicate buttons.
      as={React.Fragment}
      ref={setReferenceElement}
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
    </Listbox.Button>
  );
};

/**
 * The content container showing the available options when the trigger is activated
 */
const SelectOptions = function (props: SelectOptionsProps) {
  const { className, ...other } = props;
  const { optionsClassName, setPopperElement, popperStyles, popperAttributes } =
    useContext(SelectContext);

  const componentClassName = clsx(
    styles['select__options'],
    className,
    optionsClassName,
  );

  const optionProps = {
    as: PopoverContainer,
    className: componentClassName,
    ref: setPopperElement,
    style: popperStyles,
    ...popperAttributes,
    ...other,
  };
  if (typeof document !== 'undefined') {
    return (
      <>{createPortal(<Listbox.Options {...optionProps} />, document.body)}</>
    );
  }
  return null;
};

/**
 * Represents one of the available options for selection
 */
const SelectOption = function (props: SelectOptionProps) {
  const { children, className, optionClassName, ...other } = props;

  const optionItemClassName = clsx(optionClassName, styles['select__option']);

  return (
    <Listbox.Option
      // Render as a fragment instead of the default <li>. We're rendering our own <li> in the
      // render prop to control active/selected styling, and we don't want to end up with duplicate
      // <li>'s.
      as={React.Fragment}
      {...other}
    >
      {typeof children === 'function'
        ? children
        : ({ active, disabled, selected }) => {
            return (
              <PopoverListItem
                className={optionItemClassName}
                icon={selected ? 'check' : undefined}
                isDisabled={disabled}
                isFocused={active}
              >
                <span className={styles['select__option-text']}>
                  {children}
                </span>
              </PopoverListItem>
            );
          }}
    </Listbox.Option>
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
        <span className={textClassName}>{children}</span>
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
