import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './InlineForm.module.css';
import Button from '../../components/Button';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';

export interface Props {
  /**
   * HTML action attribute, which contains the URI to be triggered on form submission
   */
  action?: string;
  /**
   * Button call to action text
   */
  buttonText?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter: ReactNode;
  /**
   * The HTTP method the browser uses to submit the form
   */
  method: 'get' | 'post';
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
   */
  placeholder?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {InlineForm} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const InlineForm = ({
  action,
  buttonText,
  className,
  id,
  label,
  labelAfter,
  method,
  placeholder,
  ...other
}: Props) => {
  const generatedId = useUID();
  const idVar = id || generatedId;

  const componentClassName = clsx(styles['inline-form'], className);
  return (
    <form
      action={action}
      className={componentClassName}
      method={method}
      {...other}
    >
      <Label
        className="inline-form__label u-is-vishidden"
        htmlFor={idVar}
        labelAfter={labelAfter}
        text={label}
      />
      <TextInput
        className={styles['inline-form__input']}
        id={idVar}
        placeholder={placeholder}
      />

      <Button variant="primary">{buttonText}</Button>
    </form>
  );
};
