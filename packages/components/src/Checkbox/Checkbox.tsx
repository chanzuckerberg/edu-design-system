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
  onChange: () => void;
};

/**
 * WIP: Design system Checkbox.
 * For testing styling only, component changes should be made in
 * EDSCandidates in traject instead.
 */
function Checkbox(
  // All remaining props are passed to the `input` element
  { className, label, ...rest }: Props,
) {
  const checkboxId = "test-id";

  return (
    <div className={clsx(className, styles.checkbox)}>
      {/* TODO: surface Checkbox.Input and Checkbox.Label elements */}
      <input
        className={styles.checkboxInput}
        id={checkboxId}
        type="checkbox"
        {...rest}
      />
      <label className={styles.checkboxLabel} htmlFor={checkboxId}>
        {label}
      </label>
    </div>
  );
}
export default Checkbox;
