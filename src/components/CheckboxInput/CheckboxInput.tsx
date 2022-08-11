import clsx from 'clsx';
import React from 'react';
import styles from './CheckboxInput.module.css';
import Icon from '../Icon';

type CheckboxHTMLElementProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'id' | 'size'
>;

export type CheckboxInputProps = CheckboxHTMLElementProps & {
  /**
   * Whether checkbox is checked. Defaults to false.
   * "indeterminate" can be used when a checkbox visually represents
   * a list of checkboxes that is "partially" checked.
   */
  checked?: boolean | 'indeterminate';
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
  '--checkbox-svg-size': string;
}

/**
 * Variables controlling checkbox SVG size.
 * Surfaced here since they're used in the input, label, and CSS
 */
const svgViewBoxSize = 20;
const svgSizeRem = `${svgViewBoxSize / 16}rem`;
export const svgStyle: SvgStyle = {
  /* stylelint-disable-next-line value-keyword-case */
  '--checkbox-svg-size': svgSizeRem,
};

const checkboxIconNameMap = {
  indeterminate: 'checkbox-indeterminate',
  true: 'checkbox-checked',
  false: 'checkbox-unchecked',
  undefined: 'checkbox-unchecked',
};
const CheckboxSvg = ({
  checked,
}: {
  checked: boolean | 'indeterminate' | undefined;
}) => {
  const name = checkboxIconNameMap[`${checked}`] as
    | 'checkbox-indeterminate'
    | 'checkbox-checked'
    | 'checkbox-unchecked';

  return (
    <Icon
      className={styles['checkbox__icon']}
      name={name}
      purpose="decorative"
    />
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
    checked === 'indeterminate'
      ? {
          'aria-checked': 'mixed' as const,
          checked: true,
        }
      : {
          checked,
        };

  return (
    <span
      className={clsx(
        styles['input__wrapper'],
        disabled && styles['input__wrapper--disabled'],
      )}
      style={svgStyle}
    >
      <input
        className={clsx(className, styles['checkbox__input'])}
        data-bootstrap-override="checkbox"
        disabled={disabled}
        ref={ref}
        type="checkbox"
        {...checkedProps}
        {...other}
      />
      <CheckboxSvg checked={checked} />
    </span>
  );
});

CheckboxInput.displayName = 'CheckboxInput';
