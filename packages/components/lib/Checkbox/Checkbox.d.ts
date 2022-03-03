import React from "react";
declare type CheckboxHTMLElementProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "checked" | "id" | "size">;
declare type InputProps = CheckboxHTMLElementProps & {
    /**
     * Whether checkbox is checked. Defaults to false.
     * "indeterminate" can be used when a checkbox visually represents
     * a list of checkboxes that is "partially" checked.
     */
    checked?: boolean | "indeterminate";
    /**
     * Additional classnames passed in for styling.
     */
    className?: string;
    /**
     * Checkbox ID. Used to connect the input with a label for accessibility purposes.
     */
    id: string;
};
declare type LabelProps = {
    /**
     * Text to render in label.
     */
    children: React.ReactNode;
    /**
     * Additional classnames passed in for styling.
     */
    className?: string;
    /**
     * ID of input that label is associated with.
     */
    htmlFor: string;
    /**
     * Size of the checkbox label.
     */
    size?: "small" | "medium";
};
export declare type CheckboxProps = Omit<InputProps, "id"> & {
    /**
     * HTML id attribute. If not passed, this component
     * will generate an id to use for accessibility.
     */
    id?: string;
    /**
     * Visible text label for the checkbox.
     */
    label?: React.ReactNode;
    /**
     * Size of the checkbox label.
     */
    size?: LabelProps["size"];
};
/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export declare const CheckboxInput: React.ForwardRefExoticComponent<CheckboxHTMLElementProps & {
    /**
     * Whether checkbox is checked. Defaults to false.
     * "indeterminate" can be used when a checkbox visually represents
     * a list of checkboxes that is "partially" checked.
     */
    checked?: boolean | "indeterminate" | undefined;
    /**
     * Additional classnames passed in for styling.
     */
    className?: string | undefined;
    /**
     * Checkbox ID. Used to connect the input with a label for accessibility purposes.
     */
    id: string;
} & React.RefAttributes<HTMLInputElement>>;
/**
 * Label element, exported for greater flexibility. Can be used with any form input.
 */
export declare const Label: ({ children, className, htmlFor, size, }: LabelProps) => JSX.Element;
/**
 * Checkbox control indicating if something is selected or unselected.
 *
 * Requires either a visible label or an accessible name.
 */
declare const Checkbox: React.ForwardRefExoticComponent<Omit<InputProps, "id"> & {
    /**
     * HTML id attribute. If not passed, this component
     * will generate an id to use for accessibility.
     */
    id?: string | undefined;
    /**
     * Visible text label for the checkbox.
     */
    label?: React.ReactNode;
    /**
     * Size of the checkbox label.
     */
    size?: LabelProps["size"];
} & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
