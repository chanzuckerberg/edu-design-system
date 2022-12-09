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
  const componentClassName = (styles['toggle__label'], className);
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

const ToggleWrapper = Switch.Group;

/**
 * ```ts
 * import Toggle from 'v2/core/EDSCandidates/Toggle';
 * ```
 * ```ts
 * import {ToggleWrapper, ToggleLabel, ToggleButton} from 'v2/core/EDSCandidates/Toggle';
 * ```
 *
 * Toggle wrapping the Headless UI Switch component https://headlessui.dev/react/switch
 *
 *
 * @example
 * <Toggle checked={checked} label="Lorem Ipsum" onChange={onChange} />
 *
 * @example
 * <Toggle.Wrapper as="Fragment" className={styles.customWrapperStyles}>
 *   <Toggle.Label> Some label </Toggle.Label>
 *   <Toggle.Button onChange={onChange} checked={checked} className={customCssModulesClassname} />
 * </Toggle.Wrapper>
 *
 */
export const Toggle = ({ label, ...other }: ToggleProps) => {
  // TODO-JL: Consider if (children) return <Switch.Group>{children}</Switch.Group>
  if (
    process.env.NODE_ENV !== 'production' &&
    !label &&
    !('aria-label' in other)
  ) {
    throw new Error('You must provide a visible label or aria-label');
  }

  return label ? (
    <ToggleWrapper as="div" className={styles['toggle__wrapper']}>
      <Toggle.Button {...other} />
      <ToggleLabel>{label}</ToggleLabel>
    </ToggleWrapper>
  ) : (
    <ToggleButton {...other} />
  );
};
Toggle.Label = ToggleLabel;
Toggle.Button = ToggleButton;
Toggle.Wrapper = ToggleWrapper;
