import React from 'react';
import styles from './LoadingIndicator.module.css';
import Icon from '../../components/Icon';
import { EdsThemeColorTextNeutralDefault } from '../../tokens-dist/ts/colors';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   */
  size?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {LoadingIndicator} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const LoadingIndicator = ({
  className,
  size = '3rem',
  ...other
}: Props) => {
  return (
    <div className={className} {...other}>
      <Icon
        className={styles['loading-indicator__icon']}
        color={EdsThemeColorTextNeutralDefault}
        name="spinner"
        purpose="decorative"
        size={size}
      />
    </div>
  );
};
