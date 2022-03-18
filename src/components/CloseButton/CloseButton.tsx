import clsx from 'clsx';
import React, { forwardRef } from 'react';
import styles from './CloseButton.module.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

type CloseButtonProps = {
  /**
   * Stylistic variations for the close button type.
   * - **brand** - results in a blue background color on hover
   * - **neutral** - results in a gray background color on hover
   * - **success** - results in a green background color on hover
   * - **warning** - results in an orange background color on hover
   * - **alert** - results in a red background color on hover
   */
  variant?: 'brand' | 'neutral' | 'success' | 'warning' | 'alert';
  // TODO(Icon): handle this when the Icon component is done
  /**
   * Size of the icon. Does not affect actual button size. The button is larger than the
   * icon to ensure the hit box is large enough (for accessibility).
   *
   * The string should be some number + px, rem, em, vh, etc. Ex: 2rem.
   * Recommendation: use "EdsSizeLineHeight" tokens from
   * @chanzuckerberg/eds-tokens/json/variables.json
   */
  // iconSize?: string;
  /**
   * Custom aria-label. If undefined, "close" will be used.
   */
  'aria-label'?: string;
  onClose: () => void;
  className?: string;
};

/**
 * ```ts
 * import {CloseButton} from "@chanzuckerberg/eds-components";
 * ```
 *
 * Generic close button.
 */
const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      className,
      variant = 'neutral',
      onClose,
      // TODO(Icon): handle this when the Icon component is done
      // iconSize = '2rem',
      'aria-label': ariaLabel = 'close',
      ...rest
    },
    ref,
  ) => (
    <Button
      className={clsx(
        styles['close-button'],
        className,
        // Variants
        variant === 'brand' && styles['close-button--variant-brand'],
        variant === 'neutral' && styles['close-button--variant-neutral'],
        variant === 'success' && styles['close-button--variant-success'],
        variant === 'warning' && styles['close-button--variant-warning'],
        variant === 'alert' && styles['close-button--variant-alert'],
      )}
      onClick={onClose}
      variant="bare"
      ref={ref}
      text={<Icon name="x" title={ariaLabel} />}
      {...rest}
    />
  ),
);
CloseButton.displayName = 'CloseButton';

export default CloseButton;
