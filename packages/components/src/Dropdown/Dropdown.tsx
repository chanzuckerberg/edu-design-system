import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import React, { ReactNode, ComponentProps } from "react";
import DropdownButton from "../DropdownButton";
import CheckRoundedIcon from "../Icons/CheckRounded";
import styles from "./Dropdown.module.css";

type Option = { id: string; label: string };
type RenderProp<Arg> = (arg: Arg) => ReactNode;
type PropsWithRenderProp<RenderPropArg> = {
  className?: string;
  /**
   * Pass in the <Dropdown.Label> and <Dropdown.Button> here.
   *
   * The options to be displayed in the dropddown list can be
   * passed in here using <Dropdown.Options> and <Dropdown.Option>
   * or through the `options` prop.
   */
  children?: ReactNode | RenderProp<RenderPropArg>;
  /**
   * All options to be displayed in the dropdown list, passed in as
   * an array of objects.
   *
   * This is an alternative to passing in the options via children.
   */
  options?: Array<Option>;
};

type DropdownOptionProps = {
  value: Option;
  className?: string;
  children?:
    | ReactNode
    | RenderProp<{ active: boolean; disabled: boolean; selected: boolean }>;
};

/**
 * EDS Dropdown. Used to select one from a list of options.
 *
 * Usage:
 * ```
 * return (
 *   <Dropdown>
 *     <Dropdown.Label>Options:</Dropdown.Label>
 *     <Dropdown.Button>Select</Dropdown.Button>
 *     <Dropdown.Options>
 *       <Dropdown.Option>Option 1</Dropdown.Option>
 *       <Dropdown.Option>Option 2</Dropdown.Option>
 *       <Dropdown.Option>Option 3</Dropdown.Option>
 *     </Dropdown.Options>
 *   </Dropdown>
 * );
 * ```
 *
 * or
 *
 * ```
 * const options = [
 *   {
 *     id: option1,
 *     label: 'Option 1',
 *   },
 *   {
 *     id: option2,
 *     label: 'Option 2',
 *   },
 *   {
 *     id: option3,
 *     label: 'Option 3',
 *   },
 * ];
 *
 * return (
 *   <Dropdown options={options}>
 *     <Dropdown.Label>Options:</Dropdown.Label>
 *     <Dropdown.Button>Select</Dropdown.Button>
 *   </Dropdown>
 * );
 * ```
 *
 */
function Dropdown(props: ComponentProps<typeof Listbox>) {
  const { className, options, children, ...rest } = props;

  const optionsList = options ? (
    <DropdownOptions>
      {options.map((option: Option) => (
        <DropdownOption key={option.id} value={option}>
          {option.label}
        </DropdownOption>
      ))}
    </DropdownOptions>
  ) : null;

  const listboxChildren = (
    <>
      {children}
      {optionsList}
    </>
  );

  return (
    <Listbox
      // Provide a wrapping <div> element for the dropdown. This is needed so that any props
      // passed directly to this component have a corresponding DOM element to receive them.
      // Otherwise we get an error.
      as="div"
      className={clsx(styles.dropdown, className)}
      {...rest}
    >
      {listboxChildren}
    </Listbox>
  );
}

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
    <Listbox.Options
      className={clsx(styles.dropdownOptions, className)}
      {...rest}
    />
  );
};

const DropdownOption = function (props: DropdownOptionProps) {
  const { children, className, ...rest } = props;

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
        : ({
            active,
            disabled,
            selected,
          }: {
            active: boolean;
            disabled: boolean;
            selected: boolean;
          }) => (
            <li
              className={clsx(
                styles.dropdownOption,
                active && styles.dropdownOptionActive,
                disabled && styles.dropdownOptionDisabled,
                selected
                  ? styles.dropdownOptionSelected
                  : styles.dropdownOptionUnselected,
                className,
              )}
            >
              {selected && (
                <span className={styles.selectedIconContainer}>
                  <CheckRoundedIcon purpose="decorative" size="1.25rem" />
                </span>
              )}
              <span className={styles.dropdownOptionContent}>{children}</span>
            </li>
          )}
    </Listbox.Option>
  );
};

const DropdownLabel = (props: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) => <Listbox.Label {...props} />;

Dropdown.Button = DropdownTrigger;
Dropdown.Label = DropdownLabel;
Dropdown.Option = DropdownOption;
Dropdown.Options = DropdownOptions;

export default Dropdown;
