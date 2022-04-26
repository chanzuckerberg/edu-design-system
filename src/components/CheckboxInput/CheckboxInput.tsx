import clsx from "clsx";
import React from "react";
import styles from "./CheckboxInput.module.css";

type CheckboxHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "checked" | "id" | "size"
>;

export type CheckboxInputProps = CheckboxHTMLElementProps & {
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

interface SvgStyle extends React.CSSProperties {
  "--checkbox-svg-size": string;
}

/**
 * Variables controlling checkbox SVG size.
 * Surfaced here since they're used in the input, label, and CSS
 */
const svgViewBoxSize = 20;
const svgSizeRem = `${svgViewBoxSize / 16}rem`;
export const svgStyle: SvgStyle = {
  /* stylelint-disable-next-line value-keyword-case */
  "--checkbox-svg-size": svgSizeRem,
};

/**
 * Using a technique from https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/,
 * we hide the checkbox input and instead completely style through an
 * SVG overlaid on top of the input element.
 */
const CheckboxSvg = ({ indeterminate }: { indeterminate?: boolean }) => {
  const checkmarkPath = indeterminate
    ? "M 14.00,9.00 C 14.55,9.00 15.00,9.45 15.00,10.00 15.00,10.00 15.00,10.00 15.00,10.00 15.00,10.55 14.55,11.00 14.00,11.00 14.00,11.00 6.00,11.00 6.00,11.00 5.45,11.00 5.00,10.55 5.00,10.00 5.00,10.00 5.00,10.00 5.00,10.00 5.00,9.45 5.45,9.00 6.00,9.00 6.00,9.00 14.00,9.00 14.00,9.00 Z"
    : "M15.5605 5.2094C15.447 5.12571 15.3181 5.06522 15.1811 5.03137C15.0442 4.99752 14.902 4.99099 14.7625 5.01214C14.6231 5.0333 14.4892 5.08172 14.3684 5.15465C14.2477 5.22758 14.1425 5.32359 14.0589 5.43718L8.96703 12.3478L5.72917 9.7572C5.50592 9.58618 5.22455 9.50943 4.94539 9.54341C4.66622 9.57738 4.41148 9.71937 4.23576 9.93893C4.06004 10.1585 3.97733 10.4382 4.00536 10.718C4.03339 10.9978 4.16993 11.2555 4.38572 11.4359L8.49687 14.7244C8.61048 14.8133 8.74065 14.8786 8.87979 14.9166C9.01893 14.9546 9.16424 14.9645 9.30724 14.9457C9.45024 14.9269 9.58805 14.8798 9.71264 14.8071C9.83723 14.7344 9.94609 14.6377 10.0329 14.5225L15.7917 6.71187C15.8753 6.59806 15.9356 6.4689 15.9691 6.33178C16.0027 6.19465 16.009 6.05225 15.9875 5.91272C15.966 5.77318 15.9173 5.63925 15.844 5.51857C15.7707 5.39789 15.6744 5.29283 15.5605 5.2094Z";

  return (
    <svg
      aria-hidden="true"
      height={svgSizeRem}
      viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
      width={svgSizeRem}
    >
      <rect
        className={styles["checkmark__outline"]}
        fill="none"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        x="1"
        y="1"
      />
      <path
        className={styles["checkmark__content"]}
        d={checkmarkPath}
        fill="none"
      />
    </svg>
  );
};

/**
 * Checkbox input element, exported for greater flexibility.
 * You must provide an `id` prop and connect it to a visible label.
 */
export const CheckboxInput = React.forwardRef<
  HTMLInputElement,
  CheckboxInputProps
>(({ checked, className, disabled, ...other }, ref) => {
  // Make indeterminate checkbox visually match the colors of a
  // checked state, but announce itself as "mixed" to screen readers
  const checkedProps =
    checked === "indeterminate"
      ? {
          "aria-checked": "mixed" as const,
          checked: true,
        }
      : {
          checked,
        };

  return (
    <span
      className={clsx(
        styles["input__wrapper"],
        disabled && styles["input__wrapper--disabled"],
      )}
    >
      <input
        className={clsx(className, styles["checkbox__input"])}
        data-bootstrap-override="checkbox"
        disabled={disabled}
        ref={ref}
        style={svgStyle}
        type="checkbox"
        {...checkedProps}
        {...other}
      />
      <CheckboxSvg indeterminate={checked === "indeterminate"} />
    </span>
  );
});

CheckboxInput.displayName = "CheckboxInput";
