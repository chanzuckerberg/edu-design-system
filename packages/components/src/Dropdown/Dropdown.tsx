import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import React, { ReactNode, ComponentProps, ElementType } from "react";
import DropdownButton from "../DropdownButton";
import CheckRoundedIcon from "../Icons/CheckRounded";
import styles from "./Dropdown.module.css";

type Option = { id: string; label: string };

type ListboxProps = ComponentProps<typeof Listbox>;
type DropdownProps = ListboxProps & {
  /**
   * Text for the dropdown label.
   *
   * This is an alternative to passing <Dropdown.Label> in via `children`.
   * If you pass in `labelText`, we expect `buttonText`, and `options` props
   * as well and no `children`.
   */
  labelText?: ReactNode | string;
  /**
   * Screen-reader text for the dropdown label.
   *
   * When possible, use a visible label through the `labelText` prop or
   * by passing a <Label> into `chidren`. In rare cases where there's no
   * visible label, you must provide an `aria-label` for screen readers.
   * If you pass in an `aria-label`, you don't need `labelText` or <Label>.
   */
  "aria-label"?: string;
  /**
   * Text for the dropdown label.
   *
   * This is an alternative to passing <Dropdown.Button> in via children.
   * If you pass in `buttonText`, we expect `labelText` (or `aria-label`),
   * and `options` props as well and no `children`.
   */
  buttonText?: ReactNode | string;
  /**
   * All options to be displayed in the dropdown list, passed in as
   * an array of objects.
   *
   * This is an alternative to passing in the options via children.
   * If you pass in `options`, we expect `labelText` (or `aria-label`),
   * and `buttonText` props as well and no `children`.
   */
  options?: Array<Option>;
  /**
   * Optional className for additional styling.
   */
  className?: string;
};

type RenderProp<Arg> = (arg: Arg) => ReactNode;
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
    if (typeof child === "string" || typeof child === "number") {
      return false;
    } else if (
      "props" in child &&
      child.type &&
      typeof child.type !== "string" &&
      child.type?.name === "DropdownLabel"
    ) {
      return true;
    } else if ("props" in child && child.props.children) {
      return childrenHaveLabelComponent(child.props.children);
    }
    return false;
  });
}

/**
 * ```ts
 * import {Dropdown} from "@chanzuckerberg/eds-components";
 * ```
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
 *     id: 'option1',
 *     label: 'Option 1',
 *   },
 *   {
 *     id: 'option2',
 *     label: 'Option 2',
 *   },
 *   {
 *     id: 'option3',
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
 */
function Dropdown(props: DropdownProps) {
  const {
    className,
    labelText,
    buttonText,
    options,
    children,
    "aria-label": ariaLabel,
    ...rest
  } = props;

  if (process.env.NODE_ENV !== "production") {
    if (children && [labelText, buttonText, options].some((prop) => !!prop)) {
      throw new Error(
        "If you use the `labelText`, `buttonText`, or `options` props, you cannot use the `children` prop.",
      );
    }

    if (!children && (!buttonText || !options)) {
      throw new Error(
        "If you do not pass in `children`, you must pass in both `buttonText` and `options`.",
      );
    }

    const childrenHaveLabel = children && childrenHaveLabelComponent(children);
    if (!labelText && !props["aria-label"] && !childrenHaveLabel) {
      throw new Error("You must provide a visible label or `aria-label`.");
    }
  }

  const sharedProps = {
    className: clsx(styles.dropdown, className),
    // Provide a wrapping <div> element for the dropdown. This is needed so that any props
    // passed directly to this component have a corresponding DOM element to receive them.
    // Otherwise we get an error.
    as: "div" as const,
    ...rest,
  };

  if (typeof children === "function") {
    return (
      <Listbox
        {...sharedProps}
        // We prefer to pass the aria-label in via an invisible DropdownLabel, but we can't
        // easily pass down function children with component children, so we'll settle for
        // using a standard aria-label in this case.
        aria-label={ariaLabel}
      >
        {children}
      </Listbox>
    );
  }

  const label = (labelText || ariaLabel) && (
    <DropdownLabel className={ariaLabel && styles.srOnly}>
      {labelText || ariaLabel}
    </DropdownLabel>
  );

  const trigger = buttonText && <DropdownTrigger>{buttonText}</DropdownTrigger>;

  const optionsList = options && (
    <DropdownOptions>
      {options.map((option) => (
        <DropdownOption key={option.id} value={option}>
          {option.label}
        </DropdownOption>
      ))}
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

  return <Listbox {...sharedProps}>{childrenToUse}</Listbox>;
}

const DropdownLabel = (props: { className?: string; children: ReactNode }) => {
  const { children, className } = props;

  return (
    <Listbox.Label className={clsx(styles.label, className)}>
      {children}
    </Listbox.Label>
  );
};

const DropdownTrigger = function (
  props: PropsWithRenderProp<{ disabled: boolean; open: boolean }>,
) {
  const { children, className, ...rest } = props;
  return (
    <Listbox.Button
      // Render as a fragment instead of the default element. We're rendering our own element in
      // the render prop to control styling and positiong, and we don't want to end up with
      // duplicate buttons.
      as={React.Fragment}
      {...rest}
    >
      {typeof children === "function" ? (
        children
      ) : (
        <DropdownButton className={className}>{children}</DropdownButton>
      )}
    </Listbox.Button>
  );
};

const DropdownOptions = function (
  props: PropsWithRenderProp<{ open: boolean }>,
) {
  const { className, ...rest } = props;
  return (
    <Listbox.Options className={clsx(styles.options, className)} {...rest} />
  );
};

const DropdownOption = function (props: DropdownOptionProps) {
  const { children, className, ...rest } = props;

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
      {...rest}
    >
      {typeof children === "function"
        ? children
        : ({ active, disabled, selected }: RenderProps) => (
            <li
              className={clsx(
                styles.option,
                active && styles.optionActive,
                disabled && styles.optionDisabled,
                selected && styles.optionSelected,
                className,
              )}
            >
              {selected && (
                <span className={styles.selectedIconContainer}>
                  <CheckRoundedIcon purpose="decorative" size="1.25rem" />
                </span>
              )}
              <span className={styles.optionContent}>{children}</span>
            </li>
          )}
    </Listbox.Option>
  );
};

Dropdown.Button = DropdownTrigger;
Dropdown.Label = DropdownLabel;
Dropdown.Option = DropdownOption;
Dropdown.Options = DropdownOptions;

export default Dropdown;
