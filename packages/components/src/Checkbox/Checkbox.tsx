import clsx from "clsx";
import React from "react";
import styles from "./Checkbox.module.css";

type Props = {
  /**
   * Whether checkbox is checked. Defaults to false.
   * TODO: add "indeterminate" state
   */
  checked?: boolean;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Visible text label for the checkbox.
   * TODO: allow `aria-label` prop
   */
  label: React.ReactNode;
  /**
   * Callback when checkbox state changes
   */
  onChange?: () => void;
};

/**
 * Using a technique from https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/,
 * we hide the checkbox input and instead completely style through an
 * SVG overlaid on top of the input element.
 */
const CheckboxSvg = () => {
  const size = "1.25rem";
  const checkmarkPath =
    "M15.5605 5.2094C15.447 5.12571 15.3181 5.06522 15.1811 5.03137C15.0442 4.99752 14.902 4.99099 14.7625 5.01214C14.6231 5.0333 14.4892 5.08172 14.3684 5.15465C14.2477 5.22758 14.1425 5.32359 14.0589 5.43718L8.96703 12.3478L5.72917 9.7572C5.50592 9.58618 5.22455 9.50943 4.94539 9.54341C4.66622 9.57738 4.41148 9.71937 4.23576 9.93893C4.06004 10.1585 3.97733 10.4382 4.00536 10.718C4.03339 10.9978 4.16993 11.2555 4.38572 11.4359L8.49687 14.7244C8.61048 14.8133 8.74065 14.8786 8.87979 14.9166C9.01893 14.9546 9.16424 14.9645 9.30724 14.9457C9.45024 14.9269 9.58805 14.8798 9.71264 14.8071C9.83723 14.7344 9.94609 14.6377 10.0329 14.5225L15.7917 6.71187C15.8753 6.59806 15.9356 6.4689 15.9691 6.33178C16.0027 6.19465 16.009 6.05225 15.9875 5.91272C15.966 5.77318 15.9173 5.63925 15.844 5.51857C15.7707 5.39789 15.6744 5.29283 15.5605 5.2094Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={styles.outline}
        width="18"
        height="18"
        x="1"
        y="1"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        rx="3"
      ></rect>
      <path className={styles.content} fill="none" d={checkmarkPath} />
    </svg>
  );
};

/**
 * WIP: Design system Checkbox.
 * For testing styling only, component changes should be made in
 * EDSCandidates in traject instead.
 */
function Checkbox(
  // All remaining props are passed to the `input` element
  { className, id, label, ...rest }: Props,
) {
  const checkboxId = id || "test-id";

  return (
    <div className={clsx(className, styles.checkbox)}>
      {/* TODO: surface Checkbox.Input and Checkbox.Label elements */}
      <input
        className={styles.checkboxInput}
        id={checkboxId}
        type="checkbox"
        {...rest}
      />
      <CheckboxSvg />
      <label className={styles.checkboxLabel} htmlFor={checkboxId}>
        {label}
      </label>
    </div>
  );
}
export default Checkbox;
