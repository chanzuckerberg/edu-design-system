import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import styles from './Toggle.module.css';
import type { ExtractProps } from '../../util/utility-types';

type ToggleLabelProps = {
  /**
   * Visible text label for the toggle.
   */
  children: React.ReactNode;
} & ExtractProps<typeof Switch.Label>;

type ToggleInputProps = ExtractProps<typeof Switch> & {
  /**
   * Additional classnames passed in for styling the toggle.
   * To target the circular part of the toggle, use `.container > .toggle`
   */
  className?: string;
  /**
   * Whether toggle is checked or unchecked.
   * As a controlled component, and following data down / actions up,
   * both checked and onChange are required to manage toggle state.
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

type ToggleProps = ToggleInputProps & {
  /**
   * When possible, use a visible label through the `label` prop instead.
   * In rare cases where there's no visible label, you must provide an
   * `aria-label` for screen readers.
   */
  'aria-label'?: string;
  /**
   * Visible text label for the toggle.
   */
  label?: React.ReactNode;
};

export const ToggleLabel = ({ children }: ToggleLabelProps) => {
  return <Switch.Label className={styles.label}>{children}</Switch.Label>;
};

export const ToggleInput = ({
  className,
  checked,
  ...rest
}: ToggleInputProps) => {
  return (
    <Switch
      checked={checked}
      className={clsx(
        className,
        styles.container,
        checked ? styles.containerChecked : styles.containerUnchecked,
      )}
      {...rest}
    >
      {/* This span is the circular part of the toggle */}
      <span className={styles.toggle} />
    </Switch>
  );
};

export const ToggleWrapper = Switch.Group;

/**
 * ```ts
 * import Toggle from 'v2/core/EDSCandidates/Toggle';
 * ```
 * ```ts
 * import {ToggleWrapper, ToggleLabel, ToggleInput} from 'v2/core/EDSCandidates/Toggle';
 * ```
 *
 * Toggle wrapping the Headless UI Switch component https://headlessui.dev/react/switch
 *
 *
 * @example
 * <Toggle label="Lorem Ipsum" />
 *
 * @example
 * <ToggleWrapper as="div" className={styles.customWrapperStyles}>
 *   <ToggleLabel> Some label </ToggleLabel>
 *   <ToggleInput onChange={onChange} checked={checked} className={styles.customToggleStyles} />
 * </ToggleWrapper>
 *
 */
const Toggle = ({ checked = false, label, ...rest }: ToggleProps) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !label &&
    !('aria-label' in rest)
  ) {
    throw new Error('You must provide a visible label or aria-label');
  }
  return label ? (
    <ToggleWrapper as="div" className={styles.switchWrapper}>
      <ToggleInput checked={checked} {...rest} />
      <ToggleLabel>{label}</ToggleLabel>
    </ToggleWrapper>
  ) : (
    <ToggleInput checked={checked} {...rest} />
  );
};

export default Toggle;
