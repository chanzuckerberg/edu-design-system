import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import type { ReactNode, MouseEventHandler } from 'react';

import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { usePopper } from 'react-popper';
import type { ExtractProps } from '../../util/utility-types';

import Icon, { type IconName } from '../Icon';

import PopoverContainer, { defaultPopoverModifiers } from '../PopoverContainer';
import type { PopoverContext, PopoverOptions } from '../PopoverContainer';

import PopoverListItem from '../PopoverListItem';
import Text from '../Text';
import styles from './Select.module.css';

type SelectProps = ExtractProps<typeof Listbox> &
  PopoverOptions & {
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
     * Visible text label for the component.
     */
    label?: string;
    /**
     * Indicates that field is required for form to be successfully submitted
     */
    required?: boolean;
  };

type SelectLabelProps = ExtractProps<typeof Listbox.Label> & {
  disabled?: boolean;
  required?: boolean;
};
type SelectOptionsProps = ExtractProps<typeof Listbox.Options>;
type SelectOptionProps = ExtractProps<typeof Listbox.Option> & {
  optionClassName?: string;
};
type SelectButtonProps = ExtractProps<typeof Listbox.Button> & {
  /**
   * Icon override for component. Default is 'expand-more'
   */
  icon?: Extract<IconName, 'expand-more'>;
  /**
   * Indicates state of the select, used to style the button.
   */
  isOpen?: boolean;
};

type SelectButtonWrapperProps = {
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * Text placed inside the button to describe the field.
   */
  children?: ReactNode;
  /**
   * Icon override for component. Default is 'expand-more'
   */
  icon?: Extract<IconName, 'expand-more'>;
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
};

type SelectContextType = PopoverContext & {
  optionsClassName?: string;
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
export function Select(props: SelectProps) {
  const {
    'aria-label': ariaLabel,
    children,
    className,
    label,
    modifiers = defaultPopoverModifiers,
    name,
    onFirstUpdate,
    optionsClassName,
    placement = 'bottom-start',
    required,
    strategy,
    onChange: theirOnChange,
    ...other
  } = props;

  if (process.env.NODE_ENV !== 'production') {
    const childrenHaveLabel =
      children && childrenHaveLabelComponent(children as ReactNode);
    if (!props['aria-label'] && !props.label && !childrenHaveLabel) {
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

  const componentClassName = clsx(styles['select'], className);
  const sharedProps = {
    className: componentClassName,
    // Provide a wrapping <div> element for the select. This is needed so that any props
    // passed directly to this component have a corresponding DOM element to receive them.
    // Otherwise we get an error.
    as: 'div' as const,
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
          <Select.Label disabled={props.disabled} required={required}>
            {label}
          </Select.Label>
        )}
        {children}
      </Listbox>
    </SelectContext.Provider>
  );
}

const SelectLabel = (props: SelectLabelProps) => {
  const { children: label, required, className, disabled } = props;

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
      <Listbox.Label className={componentClassName}>{label}</Listbox.Label>
      {required && (
        <Text as="span" className={requiredTextClassName} preset="body-sm">
          Required
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
  const { setReferenceElement } = useContext(SelectContext);

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
  const optionClasses = clsx(styles['select__option-item'], optionClassName);

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
                active={active}
                className={optionClasses}
                disabled={disabled}
                icon={selected ? 'check' : undefined}
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
      icon = 'expand-more',
      isOpen,
      shouldTruncate = false,
      onClick: theirOnClick,
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(styles['select-button'], className);
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
          size="1.25rem"
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
