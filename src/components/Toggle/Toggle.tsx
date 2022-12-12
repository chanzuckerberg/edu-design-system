import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import styles from './Toggle.module.css';

type ToggleLabelProps = {
  /**
   * Visible text label for the toggle.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling the toggle label.
   */
  className?: string;
};

type ToggleButtonProps = {
  /**
   * Additional classnames passed in for styling the toggle button.
   */
  className?: string;
  /**
   * Whether toggle is checked or unchecked.
   */
  checked: boolean;
  /**
   * Callback called when toggle state is changed.
   */
  onChange: (checked: boolean) => void;
  /**
   * Whether toggle is disabled.
   */
  disabled?: boolean;
};

type ToggleProps = ToggleButtonProps & {
  /**
   * When possible, use a visible label through the `label` prop instead.
   * In rare cases where there's no visible label, you must provide an
   * `aria-label` for screen readers.
   */
  'aria-label'?: string;
  /**
   * Visible text label for the toggle.
   */
  children?: React.ReactNode;
  /**
   * Visible text label for the toggle.
   */
  label?: React.ReactNode;
};

const ToggleLabel = ({ children, className }: ToggleLabelProps) => {
  const componentClassName = clsx(styles['toggle__label'], className);
  return <Switch.Label className={componentClassName}>{children}</Switch.Label>;
};

const ToggleButton = ({ className, checked, ...other }: ToggleButtonProps) => (
  <Switch
    checked={checked}
    className={clsx(
      styles['toggle__button'],
      checked
        ? styles['toggle__button--checked']
        : styles['toggle__button--unchecked'],
      className,
    )}
    {...other}
  >
    {/* This span is the circular part of the toggle */}
    <span className={styles['toggle__button-circle']} />
  </Switch>
);

/**
 * In order to use the individual <Toggle.Label> and <Toggle.Button> subcomponents for customization,
 * they need to be wrapped in this <ToggleWrapper> component for some functionality HeadlessUI provides.
 */
const ToggleWrapper = Switch.Group;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Toggle} from "@chanzuckerberg/eds";`
 *
 * Toggle wrapping the Headless UI Switch component https://headlessui.dev/react/switch, generally used as an input for controlling between two states.
 *
 * Example Usage:
 *
 * ```tsx
 * <Toggle checked={checked} label="Lorem Ipsum" onChange={onChange} />
 *
 * <Toggle.Wrapper as="div" className={styles.customWrapperStyles}>
 *   <Toggle.Label> Some label </Toggle.Label>
 *   <Toggle.Button onChange={onChange} checked={checked} className={customCssModulesClassname} />
 * </Toggle.Wrapper>
 * ```
 */
export const Toggle = ({ label, ...other }: ToggleProps) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !label &&
    !('aria-label' in other)
  ) {
    throw new Error('You must provide a visible label or aria-label');
  }

  return label ? (
    <ToggleWrapper as="div" className={styles['toggle__wrapper']}>
      <ToggleButton {...other} />
      <ToggleLabel>{label}</ToggleLabel>
    </ToggleWrapper>
  ) : (
    <ToggleButton {...other} />
  );
};
Toggle.Label = ToggleLabel;
Toggle.Button = ToggleButton;
Toggle.Wrapper = ToggleWrapper;
