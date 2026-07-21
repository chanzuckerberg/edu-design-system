import { Switch, Label, Field, Description } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';
import type { EitherInclusive, ExtractProps } from '../../util/utility-types';
import { default as EDSLabel } from '../Label';
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
  subLabel?: ReactNode;
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
  return <Label as={EDSLabel} className={componentClassName} text={children} />;
};

const ToggleSubLabel = ({ children, className }: ToggleLabelProps) => {
  const componentClassName = clsx(styles['toggle__subLabel'], className);
  return (
    <Description as="span" className={componentClassName}>
      {children}
    </Description>
  );
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
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Enable/Disable a feature | Turns a feature on or off. | Dark mode toggle in a settings menu. |
 * | Show/Hide content | Reveals or hides additional UI elements. | Show/hide advanced search filters. |
 * | Activate notifications | Turns notifications on or off. | Push notifications toggle in a mobile app. |
 * | Privacy & security settings | Adjusts user privacy or security preferences. | Allow/block location sharing. |
 * | Subscription/opt-in settings | Lets users opt in or out of subscriptions. | Newsletter sign-up toggle. |
 * | Account preferences | Changes user-specific account features. | Two-factor authentication toggle. |
 * | Mode switching | Switches between different UI modes. | Toggle between grid view and list view. |
 * | Accessibility options | Improves usability for accessibility. | High contrast mode toggle. |
 *
 * **NOTE**: This component requires a `label` or `aria-label` prop.
 *
 * ### Best Practices
 *
 * * Use only for binary yes/no or on/off options.
 * * Don't use a toggle to perform a single action.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Write labels in sentence case.
 * * Use punctuation in full-sentence secondary labels, and punctuate all secondary labels in a list the same way.
 * * Ensure labels are clear without surrounding information for context.
 * * Include alt text for toggles that don't have a label.
 *
 * ### Dont's
 *
 * * Don't add end punctuation to the primary label.
 * * Don't mix full-sentence and partial-sentence secondary labels.
 *
 * ## Resources
 *
 * * https://headlessui.dev/react/switch
 */
export const Toggle = ({ label, subLabel, ...other }: ToggleProps) => {
  const wrapperClassName = clsx(
    styles['toggle__wrapper'],
    subLabel && styles['toggle--has-subLabel'],
  );
  return label ? (
    <ToggleWrapper as="div" className={wrapperClassName}>
      <ToggleButton {...other} />
      <ToggleLabel>
        <>
          {label}
          {subLabel && <ToggleSubLabel>{subLabel}</ToggleSubLabel>}
        </>
      </ToggleLabel>
    </ToggleWrapper>
  ) : (
    <ToggleButton {...other} />
  );
};

Toggle.displayName = 'Toggle';
ToggleLabel.displayName = 'Toggle.Label';
ToggleButton.displayName = 'Toggle.Button';
ToggleWrapper.displayName = 'Toggle.Wrapper';
ToggleSubLabel.displayName = 'Toggle.SubLabel';

Toggle.Label = ToggleLabel;
Toggle.Button = ToggleButton;
Toggle.Wrapper = ToggleWrapper;
Toggle.SubLabel = ToggleSubLabel;
