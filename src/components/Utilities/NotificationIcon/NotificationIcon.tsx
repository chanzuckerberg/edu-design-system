import clsx from 'clsx';
import * as React from 'react';

import styles from './NotificationIcon.module.css';
import { Icon } from '../../Icon/Icon';

export type NotificationVariant =
  | 'brand'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'alert';

type Props = {
  /**
   * Stylistic variations for the NotificationIcon type.
   * - **brand** - results in a purple check-circle icon
   * - **neutral** - results in a gray information-circle icon
   * - **success** - results in a green check-circle icon
   * - **warning** - results in a yellow exclamation-circle icon
   * - **alert** - results in a red x-circle icon
   */
  variant: NotificationVariant;
};

// TODO(Icon): Update to use the icons from figma after the Icon component is done:
//             https://github.com/chanzuckerberg/edu-design-system/blob/main/packages/components/src/common/Notifications/NotificationIcon/NotificationIcon.tsx#L25

export const variantToIconAssetsMap = {
  brand: {
    name: 'check-circle',
    title: 'attention',
  },
  neutral: {
    name: 'information-circle',
    title: 'notice',
  },
  success: {
    name: 'check-circle',
    title: 'success',
  },
  warning: {
    name: 'exclamation-circle',
    title: 'warning',
  },
  alert: {
    name: 'x-circle',
    title: 'alert',
  },
};

/**
 * An icon that appears in notifcation components (ie Banner and Toast).
 * This icon communicates the tone of the notification through its image,
 * color, and title text.
 */
export const NotificationIcon = ({ variant }: Props) => {
  const iconAssets = variantToIconAssetsMap[variant];

  const componentClassName = clsx(
    // Base styles
    styles['notification-icon'],
    // Variants
    variant === 'neutral' && styles['notification-icon--neutral'],
    variant === 'brand' && styles['notification-icon--brand'],
    variant === 'alert' && styles['notification-icon--alert'],
    variant === 'warning' && styles['notification-icon--warning'],
    variant === 'success' && styles['notification-icon--success'],
  );

  return (
    <Icon
      className={componentClassName}
      name={iconAssets.name}
      title={iconAssets.title}
    />
  );
};

export default NotificationIcon;
