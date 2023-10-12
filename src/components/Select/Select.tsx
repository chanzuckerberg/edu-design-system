import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import type { ReactElement, ReactNode, ElementType } from 'react';

import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { usePopper } from 'react-popper';
import type { ExtractProps } from '../../util/utility-types';

import Icon, { type IconName } from '../Icon';

import PopoverContainer, { defaultPopoverModifiers } from '../PopoverContainer';
import type { PopoverContext, PopoverOptions } from '../PopoverContainer';

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

type SelectProps = ExtractProps<typeof Listbox> &
  PopoverOptions & {
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
     * Name of the form element, which triggers the generation of a hidden form field.
     * @see https://headlessui.com/react/listbox#using-with-html-forms
     */
    name?: string;
    /**
     * Align select's popover to the left (default) or right of the trigger button's bottom edge.
     * @deprecated
     */
    optionsAlign?: OptionsAlignType;
    /**
     * Optional className for additional options menu styling.
     *
     * When not using the compact variant, if optionsClassName is provided please
     * include the width property to define the options menu width.
     */
    optionsClassName?: string;
    /**
     * The style of the select.
     *
     * Compact renders select trigger button that is only as wide as the content.
     */
    variant?: VariantType;
  };

type SelectOption = {
  label: string;
  [k: string]: string | number | boolean;
};

type SelectOptionProps = {
  value: SelectOption;
  disabled?: boolean;
  className?: string;
  children?: ReactNode | RenderProp<OptionRenderProps>;
};

type OptionRenderProps = {
  active: boolean;
  disabled: boolean;
  selected: boolean;
};

type SelectButtonProps = {
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
};

type SelectContextType = PopoverContext & {
  compact?: boolean;
  optionsAlign?: OptionsAlignType;
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
    modifiers = defaultPopoverModifiers,
    name,
    onFirstUpdate,
    optionsAlign,
    optionsClassName,
    placement = 'bottom-start',
    strategy,
    variant,
    ...other
  } = props;

  if (process.env.NODE_ENV !== 'production' && !name && showNameWarning) {
    console.warn(
      "%c`Select` won't render a form field unless you include a `name` prop.\n\n See https://headlessui.com/react/listbox#using-with-html-forms for more information",
      'font-weight: bold',
    );
    showNameWarning = false;
  }

  // Translate old optionsAlign to placement values
  // TODO: when removing optionsAlign, also remove this
  const optionsPlacement: SelectProps['placement'] = optionsAlign
    ? ({ left: 'bottom-start', right: 'bottom-end' }[
        optionsAlign
      ] as SelectProps['placement'])
    : placement;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    referenceElement,
    popperElement,
    { placement: optionsPlacement, modifiers, strategy, onFirstUpdate },
  );

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
    ...other,
  };

  const contextValue = Object.assign(
    { compact },
    optionsAlign ? { optionsAlign } : null,
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
      <Listbox {...sharedProps}>{children}</Listbox>
    </SelectContext.Provider>
  );
}

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

/**
 * The trigger for the select component, which is usually a form of `Button` or some targetable/clickable component
 */
const SelectButton = function (
  props: PropsWithRenderProp<{
    disabled: boolean;
    open: boolean;
    value: SelectOption;
  }>,
) {
  const { children, className, ...other } = props;
  const { compact, setReferenceElement } = useContext(SelectContext);

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
      ref={setReferenceElement}
      {...other}
    >
      {(renderProps) => {
        return typeof children === 'function' ? (
          children(renderProps)
        ) : (
          <SelectButtonWrapper
            className={componentClassName}
            isOpen={renderProps.open}
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
const SelectOptions = function (props: PropsWithRenderProp<{ open: boolean }>) {
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
  const { children, className, ...other } = props;

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
        : ({ active, disabled, selected }: OptionRenderProps) => {
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

/**
 * The component functioning as a styling for the trigger, selection arrow, and space to show the current value
 */
export const SelectButtonWrapper = React.forwardRef<
  HTMLButtonElement,
  SelectButtonProps
>(({ children, className, icon = 'expand-more', isOpen, ...other }, ref) => {
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
        name={icon}
        purpose="decorative"
        size="1.25rem"
      />
    </button>
  );
});

Select.Button = SelectButton;
Select.ButtonWrapper = SelectButtonWrapper;
Select.Label = SelectLabel;
Select.Option = SelectOption;
Select.Options = SelectOptions;
