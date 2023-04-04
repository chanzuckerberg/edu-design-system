import { Listbox } from '@headlessui/react';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode, ElementType } from 'react';
import React, { useContext } from 'react';

import type { ExtractProps } from '../../util/utility-types';

import Icon from '../Icon';

import PopoverContainer from '../PopoverContainer';
import PopoverListItem from '../PopoverListItem';
import styles from './Select.module.css';

export type OptionsAlignType = 'left' | 'right';
export type VariantType = 'compact' | 'full';

type RenderProp<Arg> = (arg: Arg) => ReactElement;
type PropsWithRenderProp<RenderPropArg> = {
  children?: ReactNode | RenderProp<RenderPropArg>;
  className?: string;
  as?: ElementType;
};

type SelectProps = ExtractProps<typeof Listbox> & {
  /**
   * Screen-reader text for the select's label.
   *
   * When possible, use a visible label by passing a <Select.Label> into `chidren`.
   * In rare cases where there's no visible label, you must provide an `aria-label` for screen readers.
   * If you pass in an `aria-label`, <Select.Label>.
   */
  'aria-label'?: string;
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * The style of the select.
   *
   * Compact renders select trigger button that is only as wide as the content.
   */
  variant?: VariantType;
  /**
   * Align select's popover to the left (default) or right of the trigger button.
   */
  optionsAlign?: OptionsAlignType;
  /**
   * Optional className for additional options menu styling.
   *
   * When not using the compact variant, if optionsClassName is provided please
   * include the width property to define the options menu width.
   */
  optionsClassName?: string;
};

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

/**
 * `import {Select} from "@chanzuckerberg/eds";`
 *
 * A dropdown that reveals or hides a list of options to select
 *
 * Examples:
 *
 * ```
 * return (
 *   <Select>
 *     <Select.Label>Options:</Select.Label>
 *     <Select.Button>Select</Select.Button>
 *
 *     <Select.Options>
 *       <Select.Option>Option 1</Select.Option>
 *       <Select.Option>Option 2</Select.Option>
 *       <Select.Option>Option 3</Select.Option>
 *     </Select.Options>
 *   </Select>
 * );
 * ```
 *
 * ```
 * return (
 *   <Select aria-label="Options:">
 *     <Select.Button>Select</Select.Button>
 *
 *     <Select.Options>
 *       <Select.Option>Option 1</Select.Option>
 *       <Select.Option>Option 2</Select.Option>
 *       <Select.Option>Option 3</Select.Option>
 *     </Select.Options>
 *   </Select>
 * );
 * ```
 *
 * For compact variant, add variant="compact" and optionally optionsAlign.
 *
 * Example:
 *
 * ```
 * return (
 *   <Select
 *     aria-label="Options"
 *     optionsAlign="right"
 *     variant="compact"
 *   >
 *     <Select.Options>
 *       <Select.Option>Option 1</Select.Option>
 *       <Select.Option>Option 2</Select.Option>
 *       <Select.Option>Option 3</Select.Option>
 *     </Select.Options>
 *   </Select>
 * );
 * ```
 *
 * For select components that differs in button and option popoover width, style
 * width with `className` and options popover width with `optionsClassName`.
 *
 * Example:
 *
 * ```
 * return (
 *   <Select
 *     aria-label="Options"
 *     optionsAlign="right"
 *     variant="compact"
 *     className="select--width-15em"
 *     optionsClassName="select__options--width-24rem"
 *   >
 *     <Select.Options>
 *       <Select.Option>Option 1</Select.Option>
 *       <Select.Option>Option 2</Select.Option>
 *       <Select.Option>Option 3</Select.Option>
 *     </Select.Options>
 *   </Select>
 * );
 * ```
 */
export function Select(props: SelectProps) {
  const {
    className,
    children,
    'aria-label': ariaLabel,
    // Defaulting to null is required to explicitly state that this component is controlled, and prevents warning from Headless
    value = null,
    variant,
    optionsAlign,
    optionsClassName,
    ...other
  } = props;

  const compact = variant === 'compact';

  if (process.env.NODE_ENV !== 'production') {
    const childrenHaveLabel =
      children && childrenHaveLabelComponent(children as ReactNode);
    if (!props['aria-label'] && !childrenHaveLabel) {
      throw new Error('You must provide a visible label or `aria-label`.');
    }
  }

  const componentClassName = clsx(
    styles['select'],
    compact && styles['select--compact'],
    className,
  );
  const sharedProps = {
    className: componentClassName,
    // Provide a wrapping <div> element for the select. This is needed so that any props
    // passed directly to this component have a corresponding DOM element to receive them.
    // Otherwise we get an error.
    as: 'div' as const,
    value,
    ...other,
  };

  const contextValue = Object.assign(
    { compact },
    optionsAlign ? { optionsAlign } : null,
    optionsClassName ? { optionsClassName } : null,
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
      <Listbox {...sharedProps}>{children}</Listbox>
    </SelectContext.Provider>
  );
}

const SelectContext = React.createContext<{
  compact?: boolean;
  optionsAlign?: OptionsAlignType;
  optionsClassName?: string;
}>({});

const SelectLabel = (props: { className?: string; children: ReactNode }) => {
  const { children, className } = props;

  const componentClassName = clsx(styles['select__label'], className);
  const overlineClassName = clsx(styles['select__overline']);
  return (
    <div className={overlineClassName}>
      <Listbox.Label className={componentClassName}>{children}</Listbox.Label>
    </div>
  );
};

const SelectTrigger = function (
  props: PropsWithRenderProp<{ disabled: boolean; open: boolean }>,
) {
  const { children, className, ...other } = props;
  const { compact } = useContext(SelectContext);

  const componentClassName = clsx(
    className,
    compact && styles['select-button--compact'],
  );
  return (
    <Listbox.Button
      // Render as a fragment instead of the default element. We're rendering our own element in
      // the render prop to control styling and positiong, and we don't want to end up with
      // duplicate buttons.
      as={React.Fragment}
      {...other}
    >
      {typeof children === 'function'
        ? children
        : ({ open }) => (
            <SelectButton className={componentClassName} isOpen={open}>
              {children}
            </SelectButton>
          )}
    </Listbox.Button>
  );
};

/**
 * The content container showing the available options when the trigger is activated
 */
const SelectOptions = function (props: PropsWithRenderProp<{ open: boolean }>) {
  const { className, ...other } = props;
  const { compact, optionsAlign, optionsClassName } = useContext(SelectContext);

  const componentClassName = clsx(
    styles['select__options'],
    className,
    optionsAlign === 'right' && styles['select__options--align-right'],
    optionsClassName || (!compact && styles['select__options--full-width']),
    compact && styles['select__options--compact'],
  );

  return (
    <Listbox.Options
      as={PopoverContainer}
      className={componentClassName}
      {...other}
    />
  );
};

type SelectOptionProps = {
  value: any;
  disabled?: boolean;
  className?: string;
  children?:
    | ReactNode
    | RenderProp<{ active: boolean; disabled: boolean; selected: boolean }>;
};

/**
 * Represents one of the available options for selection
 */
const SelectOption = function (props: SelectOptionProps) {
  const { children, className, ...other } = props;

  type RenderProps = {
    active: boolean;
    disabled: boolean;
    selected: boolean;
  };

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
        : ({ active, disabled, selected }: RenderProps) => {
            return (
              <PopoverListItem
                active={active}
                className={styles['select__option-item']}
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

type SelecButtonProps = {
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * Text placed inside the button to describe the field.
   */
  children?: ReactNode;
  /**
   * Indicates state of the select, used to style the button.
   */
  isOpen?: boolean;
};

/**
 * The component functioning as a trigger, which also shows the current selection
 */
export const SelectButton = React.forwardRef<
  HTMLButtonElement,
  SelecButtonProps
>(({ children, className, isOpen, ...other }, ref) => {
  const componentClassName = clsx(styles['select-button'], className);
  const iconClassName = clsx(
    styles['select-button__icon'],
    isOpen && styles['select-button__icon--reversed'],
  );
  return (
    <button className={componentClassName} ref={ref} {...other}>
      {/* Wrapping span ensures that `children` and icon will be correctly pushed to
            either side of the button even if `children` contains more than one element. */}
      <span>{children}</span>
      <Icon
        className={iconClassName}
        name="expand-more"
        purpose="decorative"
        size="1.25rem"
      />
    </button>
  );
});

Select.Button = SelectTrigger;
Select.Label = SelectLabel;
Select.Option = SelectOption;
Select.Options = SelectOptions;
