import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

import Text from '../Text';
import styles from './Label.module.css';

export type LabelProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * HTML `for` attribute, which maps the label to an associated input `id`
   */
  htmlFor?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter?: ReactNode;
  /**
   * Indicates that field is required for form to be successfully submitted.
   */
  required?: boolean;
  /**
   * The label text string
   */
  text: string;
};

/**
 * `import {Label} from "@chanzuckerberg/eds";`
 *
 * Component Label used as legends for field groups (i.e. radio field).
 */
export const Label = ({
  className,
  hideLabel,
  htmlFor,
  id,
  labelAfter,
  required = true,
  text,
  ...other
}: LabelProps) => {
  const componentClassName = clsx(
    styles['label'],
    // TODO(next-major): remove this in favor of a local style (and not based on the mixin)
    hideLabel && styles['u-is-vishidden'],
    className,
  );

  return (
    <label className={componentClassName} htmlFor={htmlFor} id={id} {...other}>
      {text}{' '}
      {labelAfter && (
        <Text as="span" preset="body-sm">
          {labelAfter}
        </Text>
      )}
    </label>
  );
};

Label.displayName = 'Label';
