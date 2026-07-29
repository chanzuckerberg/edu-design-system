import {
  Combobox as HeadlessCombobox,
  type ComboboxProps as HeadlessComboboxProps,
  ComboboxButton,
  type ComboboxButtonProps as HeadlessComboboxButtonProps,
  ComboboxInput,
  type ComboboxInputProps as HeadlessComboboxInputProps,
  ComboboxOption,
  type ComboboxOptionProps as HeadlessComboboxOptionProps,
  ComboboxOptions,
  type ComboboxOptionsProps as HeadlessComboboxOptionsProps,
  Label,
} from '@headlessui/react';
import clsx from 'clsx';

import React, {
  useContext,
  useRef,
  useState,
  type ChangeEventHandler,
  type CSSProperties,
  type ElementType,
  type KeyboardEventHandler,
  type ReactNode,
} from 'react';

import type { ExtractProps } from '../../util/utility-types';
import type { Status } from '../../util/variant-types';

import Checkbox from '../Checkbox';
import FieldLabel from '../FieldLabel';
import FieldNote from '../FieldNote';
import Icon, { type IconName } from '../Icon';
import InputChip from '../InputChip';
import PopoverContainer from '../PopoverContainer';
import PopoverListItem from '../PopoverListItem';
import type { PopoverListItemProps } from '../PopoverListItem/PopoverListItem';
import Radio from '../Radio';
import Text from '../Text';

import styles from './Combobox.module.css';

type ComboboxValue = string | { [k: string]: unknown };

/**
 * The field holds one value normally, and a list of them when `multiple` is set.
 */
type ComboboxSelection = ComboboxValue | ComboboxValue[];

export type ComboboxProps = Omit<
  HeadlessComboboxProps<ComboboxValue, boolean | undefined, ElementType>,
  // HeadlessUI derives these from a `multiple` type parameter, which we can't supply at the
  // component boundary. We restate them in terms of `ComboboxSelection` instead, which keeps
  // both single and multiple usage readable.
  'by' | 'defaultValue' | 'onChange' | 'value'
> & {
  // Component API
  /**
   * Compare option values by a named key, or by a comparison function, instead of by reference.
   * Useful when the selected value and the option come from different places.
   *
   * See: https://headlessui.com/react/combobox#binding-objects-as-values
   */
  by?: string | ((a: ComboboxValue, z: ComboboxValue) => boolean);
  /**
   * The default value of the combobox field (when uncontrolled)
   */
  defaultValue?: ComboboxSelection;
  /**
   * Fires when a value is selected. Passes the selected value, or the list of selected values
   * when `multiple` is set.
   */
  onChange?: (value: ComboboxSelection | null) => void;
  /**
   * The value of the combobox field (when controlled)
   */
  value?: ComboboxSelection;
  /**
   * Screen-reader text for the combobox's label.
   *
   * When possible, use a visible label by passing a <Combobox.Label> into `children`.
   * In rare cases where there's no visible label, you must provide an `aria-label` for screen readers.
   */
  'aria-label'?: string;
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * Name of the form element, which triggers the generation of hidden key/value form fields (e.g. `name=$name[$key]`).
   *
   * See: https://headlessui.com/react/combobox#using-with-html-forms
   */
  name?: string;
  /**
   * Optional className for additional options menu styling.
   *
   * If optionsClassName is provided please include the width property to define
   * the options menu width.
   */
  optionsClassName?: string;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  // Design API
  /**
   * Text under the field used to provide validation hints or error message to describe the input error.
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
  /**
   * Add additional descriptive text for the field name
   */
  subLabel?: ReactNode;
};

type ComboboxLabelProps = ExtractProps<typeof Label> & {
  disabled?: boolean;
  required?: boolean;
  showHint?: boolean;
  /**
   * Add additional descriptive text for the field name
   */
  subLabel?: ReactNode;
};

type ComboboxOptionsProps = HeadlessComboboxOptionsProps<'div'>;

type ComboboxOptionProps = HeadlessComboboxOptionProps<'div', ComboboxValue> &
  Pick<PopoverListItemProps, 'subLabel'> & {
    optionClassName?: string;
  };

type ComboboxButtonProps = HeadlessComboboxButtonProps<'button'> & {
  // Component API
  /**
   * Screen-reader text for the toggle, used when the field has no visible label. When there
   * is one, HeadlessUI names the toggle from that label and this is ignored.
   *
   * **Default is `"Show options"`**.
   */
  'aria-label'?: string;
  // Design API
  /**
   * Icon to use for combobox button, which is only allowed to be 'chevron-down'
   */
  icon?: Extract<IconName, 'chevron-down'>;
};

type ComboboxInputProps = Omit<
  HeadlessComboboxInputProps<'input', ComboboxValue>,
  'displayValue' | 'onChange'
> & {
  // Component API
  /**
   * Screen-reader text for the field. Prefer a visible label on `<Combobox>` (or a
   * `<Combobox.Label>`); this is the escape hatch when there's no visible label.
   *
   * Inherited from `<Combobox aria-label="...">` when not set here.
   */
  'aria-label'?: string;
  /**
   * Optional className for additional styling of the field wrapper.
   */
  className?: string;
  /**
   * Maps the currently selected value to the text shown in the text field. Receives `null`
   * when nothing is selected.
   *
   * See: https://headlessui.com/react/combobox#binding-objects-as-values
   */
  displayValue?: (item: ComboboxValue | null) => string;
  /**
   * Optional className for additional styling of the inner `<input>` element.
   */
  inputClassName?: string;
  /**
   * Fires on every keystroke in the text field. Use it to filter the options passed
   * to `Combobox.Options`.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Fires on key down in the text field. Runs before the component's own handling, so calling
   * `preventDefault()` here opts out of backspace-to-remove.
   */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  // Design API
  /**
   * Maps a selected value to the text shown on its chip, when `multiple` is set.
   *
   * **Defaults to the value's `label`**, or the value itself when it's a string.
   */
  chipLabel?: (item: ComboboxValue) => string;
  /**
   * Leading glyph (icon) or content for a selected value's chip, when `multiple` is set.
   */
  chipLeadingComponent?: (item: ComboboxValue) => IconName | ReactNode;
  /**
   * Icon to use for combobox button, which is only allowed to be 'chevron-down'
   */
  icon?: Extract<IconName, 'chevron-down'>;
  /**
   * Whether we should truncate the text displayed in the combobox field
   */
  shouldTruncate?: boolean;
  /**
   * Whether selected values appear as removable chips inside the field, when `multiple` is set.
   * Turn it off to surface the selection yourself. Also governs whether backspace on an empty
   * field removes the last chip.
   *
   * **Default is `"true"`**.
   */
  showChips?: boolean;
};

type ComboboxInputWrapperProps = {
  // Component API
  /**
   * The text field (and any other content) placed inside the field's border.
   */
  children?: ReactNode;
  /**
   * Optional className for additional styling.
   */
  className?: string;
  // Design API
  /**
   * Whether the field is holding selection chips, which lets its contents wrap onto more
   * than one line.
   */
  hasChips?: boolean;
  /**
   * Icon to use for combobox button, which is only allowed to be 'chevron-down'
   */
  icon?: Extract<IconName, 'chevron-down'>;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
};

type ComboboxContextType = {
  ariaLabel?: string;
  disabled?: boolean;
  optionsClassName?: string;
  /**
   * Drops one value from the selection. Backs the remove button on each chip.
   */
  removeValue?: (value: ComboboxValue) => void;
  required?: boolean;
  /**
   * The current selection, always as a list. Empty unless `multiple` is set.
   */
  selectedValues?: ComboboxValue[];
  status?: ComboboxProps['status'];
  multiple?: boolean; // pulls from HeadlessUI
};

/**
 * Maps a selected value to chip text. Combobox values are either strings or objects carrying a
 * `label`, which matches what `Select` documents for its own option values.
 */
const defaultChipLabel = (value: ComboboxValue) =>
  typeof value === 'string' ? value : String(value.label ?? '');

let showNameWarning = true;

const ComboboxContext = React.createContext<ComboboxContextType>({});

/**
 * HeadlessUI infers its value type from a `multiple` type parameter, which we can't supply from
 * a plain props object. Our own `ComboboxProps` already describes the same shape, so we render
 * through it directly. Behavior is unchanged; only the inference is pinned down.
 */
const ComboboxRoot = HeadlessCombobox as React.ComponentType<ComboboxProps>;

/**
 * ## Usage
 *
 * A text field paired with a list of options. Typing filters the list, so use it where a
 * `Select` would be unwieldy. Supports controlled and uncontrolled behavior.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standard | Type to filter a list of options; one can be selected. | Country selector. Assignee picker. |
 * | Multi-select | Type to filter, and select more than one option from the list. | Filter panels. Role or permission assignments. |
 * | Disabled | Non-interactive; used to show unavailable or inactive states. | Feature-gated selections. Incomplete forms. |
 * | Preselected | Default selection appears in the field before user interacts. | Recommended settings. "Most common" default. |
 *
 * Filtering is left to the consumer, since only the consumer knows how the option data is
 * shaped and where it comes from. Use `onChange` on `Combobox.Input` to capture the query,
 * then pass the filtered list to `Combobox.Options`.
 *
 * ### Best Practices
 *
 * * Use `Combobox` for long lists where typing is faster than scrolling. For 3-10 options, use `Select`.
 * * Order the menu options logically to make it easier for users to find the option they want. Default to alphabetical order.
 * * Keep the option list the same width as the field that triggered it.
 * * Always render something when the filtered list is empty, so the field doesn't look broken.
 *
 * ## Interaction
 *
 * The field is always editable, so users can either type to narrow the list or open the full
 * list with the toggle button. In single-select mode, only one selection can be made. In
 * multi-select mode, one or more selections can be made from the list, and each one shows in
 * the field as a chip. A chip goes away either through its own close button or by pressing
 * backspace in an empty field.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use short, precise labels whenever possible.
 * * Avoid truncated items.
 * * In short lists, order from most common to least common choices.
 * * In longer lists use alphabetical order, but if there are 2 or 3 very common selections, consider repeating them at the top of the list.
 * * Use sentence case.
 *
 * ### Don'ts
 *
 * * Use periods at the end of labels.
 * * Place placeholder text within the field; it can cause accessibility issues with color contrast, inconsistent screen-reader behavior, and text disappearing as users type.
 *
 * ## Resources
 *
 * * https://headlessui.com/react/combobox
 */
export function Combobox({
  'aria-label': ariaLabel,
  by,
  children,
  className,
  disabled,
  fieldNote,
  label,
  labelLayout = 'vertical',
  name,
  optionsClassName,
  required,
  showHint,
  status,
  onChange: theirOnChange,
  subLabel,
  ...other
}: ComboboxProps) {
  // TODO: convert this to use assertEdsUsage? (issue as warning)
  if (process.env.NODE_ENV !== 'production') {
    if (!name && showNameWarning) {
      console.warn(
        "%c`Combobox` won't render a form field unless you include a `name` prop.\n\n See https://headlessui.com/react/combobox#using-with-html-forms for more information",
        'font-weight: bold',
      );
      showNameWarning = false;
    }
  }

  // Create a new value to track the internal state of Combobox. Added to work around
  // behavior inherited from HeadlessUI where it will fire onChange even if there is no change
  // Adding to support behavior synced to how <select> tags work
  const [selectedValue, setSelectedValue] = useState<
    ComboboxSelection | null | undefined
  >(other.value !== undefined ? other.value : other.defaultValue);

  const componentClassName = clsx(
    styles['combobox'],
    fieldNote && styles['combobox--has-fieldNote'],
    labelLayout && styles[`combobox--label-layout-${labelLayout}`],
    className,
  );

  const { defaultValue: theirDefaultValue, ...restProps } = other;

  // Removing a chip has to change what HeadlessUI treats as selected, and it offers no
  // imperative way in. So for multi-select we drive its value from the copy we already track,
  // seeded from `defaultValue`. The consumer's uncontrolled API is unchanged.
  const shouldControlValue =
    Boolean(other.multiple) && other.value === undefined;

  const handleChange = (changedValue: ComboboxSelection | null) => {
    if (selectedValue !== changedValue) {
      setSelectedValue(changedValue);
      // Use the value from the event because updates to `useState` are queued
      theirOnChange && theirOnChange(changedValue);
    }
  };

  const sharedProps: ComboboxProps = {
    className: componentClassName,
    // Provide a wrapping <div> element for the combobox. This is needed so that any props
    // passed directly to this component have a corresponding DOM element to receive them.
    // Otherwise we get an error.
    as: 'div' as const,
    by,
    disabled,
    // HeadlessUI uses `invalid` to mark the field (and its descendants) as invalid for
    // assistive tech. Derive it from `status` unless the consumer sets it themselves.
    invalid: other.invalid ?? status === 'critical',
    name,
    ...restProps,
    ...(shouldControlValue
      ? { value: selectedValue ?? [] }
      : { defaultValue: theirDefaultValue }),
    onChange: handleChange,
  };

  // The chips in the field need to know what's selected. When controlled, the consumer's value
  // is the source of truth; otherwise we read the copy tracked above.
  const currentValue = other.value !== undefined ? other.value : selectedValue;
  const selectedValues =
    other.multiple && Array.isArray(currentValue) ? currentValue : [];

  /**
   * Compares two option values the same way HeadlessUI does, honoring `by` so that values
   * loaded separately from the option list still match.
   */
  const isSameValue = (a: ComboboxValue, z: ComboboxValue) => {
    if (typeof by === 'function') {
      return by(a, z);
    }

    if (
      typeof by === 'string' &&
      typeof a === 'object' &&
      typeof z === 'object'
    ) {
      return a[by] === z[by];
    }

    return a === z;
  };

  const context: ComboboxContextType = {
    // The accessible name has to land on the `<input>`, not on the wrapping element, so we
    // hand it down to `Combobox.Input` rather than putting it on the root.
    ariaLabel,
    disabled,
    optionsClassName,
    removeValue: (valueToRemove) => {
      const remaining = selectedValues.filter(
        (value) => !isSameValue(value, valueToRemove),
      );

      setSelectedValue(remaining);
      theirOnChange && theirOnChange(remaining);
    },
    required,
    selectedValues,
    status,
    multiple: other.multiple,
  };

  if (typeof children === 'function') {
    return (
      <ComboboxContext.Provider value={context}>
        <ComboboxRoot {...sharedProps}>{children}</ComboboxRoot>
      </ComboboxContext.Provider>
    );
  }

  return (
    <ComboboxContext.Provider value={context}>
      <ComboboxRoot {...sharedProps}>
        {(label || required) && (
          <Combobox.Label
            disabled={disabled}
            required={required}
            showHint={showHint}
            subLabel={subLabel}
          >
            {label}
          </Combobox.Label>
        )}
        {children}
      </ComboboxRoot>
      {fieldNote && (
        <div className={styles['combobox__footer']}>
          <FieldNote disabled={disabled} status={status}>
            {fieldNote}
          </FieldNote>
        </div>
      )}
    </ComboboxContext.Provider>
  );
}

const ComboboxLabelComponent = ({
  children: label,
  required,
  className,
  disabled,
  showHint,
  subLabel,
}: ComboboxLabelProps) => {
  const componentClassName = clsx(
    styles['combobox__label'],
    disabled && clsx(styles['combobox__label--disabled']),
    className,
  );

  const requiredTextClassName = clsx(
    styles['combobox__required-text'],
    disabled && styles['combobox__required-text--disabled'],
  );

  const overlineClassName = clsx(
    styles['combobox__overline'],
    !label && styles['combobox__overline--no-label'],
  );

  const subLabelClassName = clsx(
    styles['combobox__subLabel'],
    disabled && styles['combobox__label--disabled'],
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
      {label && subLabel && (
        <div className={subLabelClassName}>
          {/* TODO: is there a way to coerce HeadlessUI into using aria-describedby like InputField/TextareaField */}
          <Text as="span" preset="body-sm">
            {subLabel}
          </Text>
        </div>
      )}
    </div>
  );
};

/**
 * The toggle for the option list. Unlike `Select`, this is not the primary way into the
 * component: the text field is. It sits at the end of the field and reveals the full,
 * unfiltered list.
 */
const ComboboxButtonComponent = function (props: ComboboxButtonProps) {
  const {
    'aria-label': ariaLabel = 'Show options',
    children,
    className,
    icon = 'chevron-down',
    ...other
  } = props;

  const componentClassName = clsx(styles['combobox-input__button'], className);

  return (
    <ComboboxButton
      // The icon is decorative and the field's label belongs to the text input, so without
      // this the toggle reaches assistive tech as an unnamed button.
      aria-label={ariaLabel}
      className={componentClassName}
      {...other}
    >
      {(renderProps) => {
        if (typeof children === 'function') {
          return children(renderProps);
        }

        // HeadlessUI's render prop has to hand back a single element, so arbitrary children
        // get wrapped rather than returned as-is.
        return children ? (
          <>{children}</>
        ) : (
          <Icon
            className={clsx(
              styles['combobox-input__icon'],
              renderProps.open && styles['combobox-input__icon--reversed'],
            )}
            name={icon}
            purpose="decorative"
            size="24px"
          />
        );
      }}
    </ComboboxButton>
  );
};

/**
 * The editable text field for the component, wrapped in the bordered field styling along
 * with the toggle button for the option list.
 *
 * When `multiple` is set, the values picked so far appear ahead of the text field as chips,
 * each one removable. The text field then holds only the query, which is why `displayValue`
 * has no effect in that mode.
 */
const ComboboxInputComponent = function (props: ComboboxInputProps) {
  const {
    'aria-label': ariaLabel,
    chipLabel = defaultChipLabel,
    chipLeadingComponent,
    className,
    icon = 'chevron-down',
    inputClassName,
    onKeyDown: theirOnKeyDown,
    shouldTruncate = false,
    showChips = true,
    ...other
  } = props;
  const {
    ariaLabel: contextAriaLabel,
    disabled,
    multiple,
    removeValue,
    required,
    selectedValues = [],
    status,
  } = useContext(ComboboxContext);

  const fieldClassName = clsx(
    styles['combobox-input__field'],
    shouldTruncate && styles['combobox-input__field--truncated'],
    inputClassName,
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const hasChips = Boolean(showChips && multiple && selectedValues.length > 0);

  /**
   * Backspace on an empty field drops the last chip, which is what people expect from a field
   * full of chips. HeadlessUI doesn't bind Backspace on the combobox input as of v2.2, so
   * there's nothing to fight with; we still mark the event handled in case that changes.
   */
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    theirOnKeyDown && theirOnKeyDown(event);

    if (
      !hasChips ||
      event.key !== 'Backspace' ||
      event.defaultPrevented ||
      // Only once the query is gone, so backspace still edits text first
      event.currentTarget.value !== ''
    ) {
      return;
    }

    event.preventDefault();
    removeValue && removeValue(selectedValues[selectedValues.length - 1]);
  };

  return (
    <ComboboxInputWrapper
      className={className}
      hasChips={hasChips}
      icon={icon}
      status={status}
    >
      {hasChips && (
        // A list, so screen readers announce how many values are currently selected
        <ul className={styles['combobox-input__chips']}>
          {selectedValues.map((value, index) => (
            // The selection is an ordered list and position is what removal acts on, so the
            // index is the stable identity here
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${index}-${chipLabel(value)}`}>
              <InputChip
                isDisabled={disabled}
                label={chipLabel(value)}
                leadingComponent={chipLeadingComponent?.(value)}
                onClick={(event) => {
                  // Without this the click reaches the field and reopens the option list
                  event.preventDefault();
                  event.stopPropagation();
                  removeValue?.(value);
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <ComboboxInput
        aria-label={ariaLabel ?? contextAriaLabel}
        className={fieldClassName}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        required={required}
        style={
          {
            '--combobox__input-width': `calc(${inputRef.current?.value || 0} * 1ch)`,
          } as CSSProperties
        }
        {...other}
      />
    </ComboboxInputWrapper>
  );
};

/**
 * The content container showing the available options. Pass in the options that match the
 * current query; `Combobox` does no filtering of its own.
 */
const ComboboxOptionsComponent = function (props: ComboboxOptionsProps) {
  const {
    anchor = { to: 'bottom start', gap: 24, offset: -12 },
    className,
    ...other
  } = props;
  const { optionsClassName } = useContext(ComboboxContext);

  const componentClassName = clsx(
    styles['combobox__options'],
    className,
    optionsClassName,
  );

  return (
    <ComboboxOptions
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
const ComboboxOptionComponent = function (props: ComboboxOptionProps) {
  const {
    children,
    className,
    optionClassName,
    subLabel: optionSubLabel,
    ...other
  } = props;

  const optionItemClassName = clsx(optionClassName, styles['combobox__option']);
  const { multiple } = useContext(ComboboxContext);

  return (
    <ComboboxOption
      // Render as a fragment instead of the default <div>. We're rendering our own element in
      // the render prop to control active/selected styling, and we don't want to end up with
      // duplicate elements.
      as={React.Fragment}
      {...other}
    >
      {typeof children === 'function'
        ? children
        : ({ focus, disabled, selected }) => {
            return (
              <PopoverListItem
                __type="selectitem"
                className={optionItemClassName}
                isDisabled={disabled}
                isFocused={focus}
                leadingContent={
                  multiple ? (
                    <Checkbox
                      aria-hidden="true"
                      aria-label="checkbox"
                      checked={selected}
                      // @ts-expect-error inert properly supported in React 19
                      inert="true"
                      readOnly
                    />
                  ) : (
                    <Radio
                      aria-hidden="true"
                      aria-label="radio"
                      checked={selected}
                      // @ts-expect-error inert properly supported in React 19
                      inert="true"
                      readOnly
                    />
                  )
                }
                subLabel={optionSubLabel}
              >
                <span className={styles['combobox__option-text']}>
                  {children}
                </span>
              </PopoverListItem>
            );
          }}
    </ComboboxOption>
  );
};

/**
 * The component providing the field border, background, and the toggle button, with space
 * for the text field. Use it directly when you need to render your own `ComboboxInput` but
 * want to keep the EDS field appearance.
 */
export const ComboboxInputWrapper = React.forwardRef<
  HTMLDivElement,
  ComboboxInputWrapperProps
>(
  (
    {
      children,
      className,
      hasChips,
      icon = 'chevron-down',
      status: theirStatus,
      ...other
    },
    ref,
  ) => {
    const { status: contextStatus } = useContext(ComboboxContext);
    const status = theirStatus ?? contextStatus;

    const componentClassName = clsx(
      styles['combobox-input'],
      hasChips && styles['combobox-input--has-chips'],
      status === 'warning' && styles['combobox-input--warning'],
      status === 'critical' && styles['combobox-input--error'],
      className,
    );

    return (
      <div className={componentClassName} ref={ref} {...other}>
        {children}
        <ComboboxButtonComponent icon={icon} />
      </div>
    );
  },
);

Combobox.displayName = 'Combobox';
ComboboxButtonComponent.displayName = 'Combobox.Button';
ComboboxInputComponent.displayName = 'Combobox.Input';
ComboboxInputWrapper.displayName = 'Combobox.InputWrapper';
ComboboxLabelComponent.displayName = 'Combobox.Label';
ComboboxOptionComponent.displayName = 'Combobox.Option';
ComboboxOptionsComponent.displayName = 'Combobox.Options';

Combobox.Button = ComboboxButtonComponent;
Combobox.Input = ComboboxInputComponent;
Combobox.InputWrapper = ComboboxInputWrapper;
Combobox.Label = ComboboxLabelComponent;
Combobox.Option = ComboboxOptionComponent;
Combobox.Options = ComboboxOptionsComponent;
