import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { useEffect, useState, ReactNode } from 'react';
import styles from './InlineForm.module.css';
import { Button } from '../Button/Button';
import { Label } from '../Label/Label';
import { TextInput } from '../TextInput/TextInput';

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
  id?: any;
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
 * Primary UI component for user interaction
 */
export const InlineForm: React.FC<Props> = ({
  action,
  buttonText,
  className,
  id,
  label,
  labelAfter,
  method,
  placeholder,
  ...other
}) => {
  const [idVar, setId] = useState();

  useEffect(() => {
    setId(id || nanoid());
  }, [id]);

  const componentClassName = clsx(styles['inline-form'], className, {});
  return (
    <form
      className={componentClassName}
      method={method}
      action={action}
      {...other}
    >
      <Label
        htmlFor={idVar}
        labelAfter={labelAfter}
        className="inline-form__label u-is-vishidden"
        text={label}
      />
      <TextInput
        id={idVar}
        className={styles['inline-form__input']}
        placeholder={placeholder}
      />

      <Button variant="primary" text={buttonText} />
    </form>
  );
};
