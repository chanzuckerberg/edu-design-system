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
  sublabel?: ReactNode;
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
  const componentClassName = clsx(styles['toggle__sublabel'], className);
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
 * `import {Toggle} from "@chanzuckerberg/eds";`
 *
 * Toggle wrapping the Headless UI Switch component https://headlessui.dev/react/switch, generally used as an input for controlling between two states.
 *
 * **NOTE**: This component requires `label` or `aria-label` prop
 */
export const Toggle = ({ label, sublabel, ...other }: ToggleProps) => {
  const wrapperClassName = clsx(
    styles['toggle__wrapper'],
    sublabel && styles['toggle--has-sublabel'],
  );
  return label ? (
    <ToggleWrapper as="div" className={wrapperClassName}>
      <ToggleButton {...other} />
      <ToggleLabel>
        <>
          {label}
          {sublabel && <ToggleSubLabel>{sublabel}</ToggleSubLabel>}
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
