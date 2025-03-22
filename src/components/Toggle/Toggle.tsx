import { Switch, Label, Field } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';
import type { EitherInclusive, ExtractProps } from '../../util/utility-types';

import styles from './Toggle.module.css';

type ToggleLabelProps = {
  /**
   * Visible text label for the toggle.
   */
  children: ReactNode;
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
  children?: ReactNode;
} & EitherInclusive<
    {
      /**
       * Visible text label for the component.
       */
      label: ReactNode;
    },
    {
      /**
       * Aria-label to provide an accesible name for the text input if no visible label is provided.
       */
      'aria-label': string;
    }
  >;

const ToggleLabel = ({ children, className }: ToggleLabelProps) => {
  const componentClassName = clsx(styles['toggle__label'], className);
  return <Label className={componentClassName}>{children}</Label>;
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
    <span className={styles['toggle__button-thumb']} />
  </Switch>
);

/**
 * In order to use the individual <Toggle.Label> and <Toggle.Button> sub-components for customization,
 * they need to be wrapped in this <ToggleWrapper> component for some functionality HeadlessUI provides.
 *
 * Instead of direct assignment to ToggleWrapper, wrapping into a custom component prevents TypeScript erroring of using private Headless Switch Group.
 */
const ToggleWrapper = (props: ExtractProps<typeof Field>) => (
  <Field {...props} />
);

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
 *
 * NOTE: This component requires `label` or `aria-label` prop
 */
export const Toggle = ({ label, ...other }: ToggleProps) => {
  return label ? (
    <ToggleWrapper as="div" className={styles['toggle__wrapper']}>
      <ToggleButton {...other} />
      <ToggleLabel>{label}</ToggleLabel>
    </ToggleWrapper>
  ) : (
    <ToggleButton {...other} />
  );
};

Toggle.displayName = 'Toggle';
ToggleLabel.displayName = 'Toggle.Label';
ToggleButton.displayName = 'Toggle.Button';
ToggleWrapper.displayName = 'Toggle.Wrapper';

Toggle.Label = ToggleLabel;
Toggle.Button = ToggleButton;
Toggle.Wrapper = ToggleWrapper;
