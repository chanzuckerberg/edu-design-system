import clsx from "clsx";
import React from "react";
import icons from "../../icons/spritemap/spritemap.svg";
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
  const name = indeterminate ? "remove" : "check";
  const computedSvg = (
    <use
      className={styles["checkmark__content"]}
      fill="none"
      xlinkHref={`${icons}#${name}`}
    />
  );

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
      {computedSvg}
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
