import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import type { ReactElement, ReactNode, ElementType } from 'react';
import React, { useContext } from 'react';
import styles from './Dropdown.module.css';

import type { ExtractProps } from '../../util/utility-types';

import DropdownButton from '../DropdownButton';
import Icon from '../Icon';

export type OptionsAlignType = 'left' | 'right';
export type VariantType = 'compact' | 'full';

type ListboxProps = ExtractProps<typeof Listbox>;
type DropdownProps = ListboxProps & {
  /**
   * Text for the dropdown label.
   *
   * This is an alternative to passing <Dropdown.Label> in via `children`.
   * If you pass in `labelText`, we expect `buttonText` and `options` props
   * as well and no `children`.
   */
  labelText?: ReactNode | string;
  /**
   * Screen-reader text for the dropdown label.
   *
   * When possible, use a visible label through the `labelText` prop or
   * by passing a <Dropdown.Label> into `chidren`. In rare cases where there's no
   * visible label, you must provide an `aria-label` for screen readers.
   * If you pass in an `aria-label`, you don't need `labelText` or <Dropdown.Label>.
   */
  'aria-label'?: string;
  /**
   * Text for the dropdown label.
   *
   * This is an alternative to passing <Dropdown.Button> in via children.
   * If you pass in `buttonText`, we expect `labelText` (or `aria-label`)
   * and `options` props as well and no `children`.
   */
  buttonText?: ReactNode | string;
  /**
   * All options to be displayed in the dropdown list, passed in as
   * an array of objects.
   *
   * This is an alternative to passing in the options via children.
   * If you pass in `options`, we expect `labelText` (or `aria-label`)
   * and `buttonText` props as well and no `children`.
   */
  options?: Array<{
    key: string | number;
    label: string;
  }>;
  /**
   * Optional className for additional styling.
   */
  className?: string;
  /**
   * The style of the dropdown.
   *
   * Compact renders dropdown button that is only as wide as the content.
   */
  variant?: VariantType;
  /**
   * Align dropdown menu to the left (default) or right of dropdown button.
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

type RenderProp<Arg> = (arg: Arg) => ReactElement;
type PropsWithRenderProp<RenderPropArg> = {
  children?: ReactNode | RenderProp<RenderPropArg>;
  className?: string;
  as?: ElementType;
};

type DropdownOptionProps = {
  value: any;
  disabled?: boolean;
  className?: string;
  children?:
    | ReactNode
    | RenderProp<{ active: boolean; disabled: boolean; selected: boolean }>;
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
      child.type?.name === 'DropdownLabel'
    ) {
      return true;
    } else if ('props' in child && child.props.children) {
      return childrenHaveLabelComponent(child.props.children);
    }
    return false;
  });
}

/**
 * `import {Dropdown} from "@chanzuckerberg/eds";`
 *
 * Note: this component has been deprecated and will be removed in a future release.
 * Please use the Select component instead for forms, and the Menu component for other
 * types of popover-like dropdowns.
 *
 * EDS Dropdown. Used to select one option from a list of options.
 *
 * Built on top of the Headless UI Listbox: https://headlessui.dev/react/listbox#basic-example
 *
 * You can pass in the <Dropdown.Label>, <Dropdown.Button>, and options
 * (using <Dropdown.Options> and <Dropdown.Option>) through `children` to
 * have more control and customization over each aspect of the dropdown's
 * appearance.
 *
 * Alternatively, you can pass all of these in using the `labelText`
 * (or `aria-label`), `buttonText`, and `options` props if you just want
 * the default styling and don't need to customize the appearance. If you
 * pass any of these props in, we expect all of them and no `children`.
 *
 * Examples:
 *
 * ```
 * return (
 *   <Dropdown>
 *     <Dropdown.Label>Options:</Dropdown.Label>
 *     <Dropdown.Button>Select</Dropdown.Button>
 *
 *     <Dropdown.Options>
 *       <Dropdown.Option>Option 1</Dropdown.Option>
 *       <Dropdown.Option>Option 2</Dropdown.Option>
 *       <Dropdown.Option>Option 3</Dropdown.Option>
 *     </Dropdown.Options>
 *   </Dropdown>
 * );
 * ```
 *
 * ```
 * return (
 *   <Dropdown aria-label="Options:">
 *     <Dropdown.Button>Select</Dropdown.Button>
 *
 *     <Dropdown.Options>
 *       <Dropdown.Option>Option 1</Dropdown.Option>
 *       <Dropdown.Option>Option 2</Dropdown.Option>
 *       <Dropdown.Option>Option 3</Dropdown.Option>
 *     </Dropdown.Options>
 *   </Dropdown>
 * );
 * ```
 *
 * ```
 * const options = [
 *   {
 *     key: 'option1',
 *     label: 'Option 1',
 *   },
 *   {
 *     key: 'option2',
 *     label: 'Option 2',
 *   },
 *   {
 *     key: 'option3',
 *     label: 'Option 3',
 *   },
 * ];
 *
 * return (
 *   <Dropdown labelText="Options:" buttonText="Select" options={options} />
 * );
 * ```
 *
 * ```
 * const options = [
 *   ...
 * ];
 *
 * return (
 *   <Dropdown aria-label="Options:" buttonText="Select" options={options} />
 * );
 * ```
 *
 * For compact variant, add variant="compact" and optionally optionsAlign.
 *
 * Examples:
 *
 * ```
 * return (
 *   <Dropdown
 *     aria-label="Options"
 *     optionsAlign="right"
 *     variant="compact"
 *   >
 *     <Dropdown.Options>
 *       <Dropdown.Option>Option 1</Dropdown.Option>
 *       <Dropdown.Option>Option 2</Dropdown.Option>
 *       <Dropdown.Option>Option 3</Dropdown.Option>
 *     </Dropdown.Options>
 *   </Dropdown>
 * );
 * ```
 *
 * ```
 * const options = [
 *   ...
 * ];
 *
 * return (
 *   <Dropdown
 *     aria-label="Options"
 *     options={options}
 *     optionsAlign="right"
 *     variant="compact"
 *   />
 * );
 * ```
 *
 * For dropdown that differs in button and options menu width, style button
 * width with className and options menu width with optionsClassName.
 *
 * Example:
 *
 * ```
 * const options = [
 *   ...
 * ];
 *
 * return (
 *   <Dropdown
 *     aria-label="Options"
 *     className="dropdown--width-15rem"
 *     options={options}
 *     optionsAlign="right"
 *     optionsClassName="dropdown__options--width-24rem"
 *   />
 * );
 *
 * @deprecated
 * ```
 */
export function Dropdown(props: DropdownProps) {
  const {
    className,
    labelText,
    buttonText,
    options,
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
    if (children && [labelText, buttonText, options].some((prop) => !!prop)) {
      throw new Error(
        'If you use the `labelText`, `buttonText`, or `options` props, you cannot use the `children` prop.',
      );
    }

    if (!children && (!buttonText || !options)) {
      throw new Error(
        'If you do not pass in `children`, you must pass in both `buttonText` and `options`.',
      );
    }

    const childrenHaveLabel =
      children && childrenHaveLabelComponent(children as ReactNode);
    if (!labelText && !props['aria-label'] && !childrenHaveLabel) {
      throw new Error('You must provide a visible label or `aria-label`.');
    }
  }

  const componentClassName = clsx(
    styles['dropdown'],
    compact && styles['dropdown--compact'],
    className,
  );
  const sharedProps = {
    className: componentClassName,
    // Provide a wrapping <div> element for the dropdown. This is needed so that any props
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
      <DropdownContext.Provider value={contextValue}>
        <Listbox
          {...sharedProps}
          // We prefer to pass the aria-label in via an invisible DropdownLabel, but we can't
          // easily pass down function children with component children, so we'll settle for
          // using a standard aria-label in this case.
          aria-label={ariaLabel}
        >
          {children}
        </Listbox>
      </DropdownContext.Provider>
    );
  }

  const label = (labelText || ariaLabel) && (
    <DropdownLabel className={ariaLabel && styles['u-is-vishidden']}>
      {labelText || ariaLabel}
    </DropdownLabel>
  );

  const trigger = buttonText && <DropdownTrigger>{buttonText}</DropdownTrigger>;

  const optionsList = options && (
    <DropdownOptions>
      {options.map((option) => {
        const { label, ...other } = option;
        return (
          <DropdownOption value={option} {...other} key={option.key}>
            {label}
          </DropdownOption>
        );
      })}
    </DropdownOptions>
  );

  const childrenToUse = (
    <>
      {label}
      {trigger}
      {optionsList}
      {children}
    </>
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      <Listbox {...sharedProps}>{childrenToUse}</Listbox>
    </DropdownContext.Provider>
  );
}

const DropdownContext = React.createContext<{
  compact?: boolean;
  optionsAlign?: OptionsAlignType;
  optionsClassName?: string;
}>({});

const DropdownLabel = (props: { className?: string; children: ReactNode }) => {
  const { children, className } = props;

  const componentClassName = clsx(styles['label'], className);
  return (
    <Listbox.Label className={componentClassName}>{children}</Listbox.Label>
  );
};

const DropdownTrigger = function (
  props: PropsWithRenderProp<{ disabled: boolean; open: boolean }>,
) {
  const { children, className, ...other } = props;
  const { compact } = useContext(DropdownContext);

  const componentClassName = clsx(
    className,
    compact && styles['dropdown-button--compact'],
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
            <DropdownButton className={componentClassName} isOpen={open}>
              {children}
            </DropdownButton>
          )}
    </Listbox.Button>
  );
};

const DropdownOptions = function (
  props: PropsWithRenderProp<{ open: boolean }>,
) {
  const { className, ...other } = props;
  const { compact, optionsAlign, optionsClassName } =
    useContext(DropdownContext);

  const componentClassName = clsx(
    styles['dropdown__options'],
    className,
    optionsAlign === 'right' && styles['dropdown__options--align-right'],
    optionsClassName || (!compact && styles['dropdown__options--full-width']),
  );
  return <Listbox.Options className={componentClassName} {...other} />;
};

const DropdownOption = function (props: DropdownOptionProps) {
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
            const componentClassName = clsx(
              styles['dropdown__option'],
              active && styles['dropdown__option--active'],
              disabled && styles['dropdown__option--disabled'],
              selected && styles['dropdown__option--selected'],
              className,
            );
            return (
              <li className={componentClassName}>
                {selected && (
                  <span className={styles['selected-icon__container']}>
                    <Icon name="check" purpose="decorative" size="1.25rem" />
                  </span>
                )}
                <span className={styles['option__content']}>{children}</span>
              </li>
            );
          }}
    </Listbox.Option>
  );
};

Dropdown.Button = DropdownTrigger;
Dropdown.Label = DropdownLabel;
Dropdown.Option = DropdownOption;
Dropdown.Options = DropdownOptions;
