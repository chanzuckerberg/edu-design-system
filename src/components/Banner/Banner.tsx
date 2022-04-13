import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import styles from './Banner.module.css';
import Button from '../Button';
import Icon from '../Icon';

export interface Props {
  /**
   * A button or link that's placed in the banner separately from the main content.
   */
  action?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles the ability to dismiss the banner via an close button in the top right of the banner
   */
  dismissable?: boolean;
  /**
   * Optional callback to be triggered when the banner is dismissed
   */
  onDismiss?: () => void;
  /**
   * Controls the layout of the banner
   * - **vertical** renders the banner content center aligned and stacked
   */
  orientation?: 'vertical';
  /**
   * The child node(s) contains the banner message
   */
  text?: ReactNode;
  /**
   * Stylistic variations for the banner type.
   * - **brand** - results in a purple banner
   * - **neutral** - results in a gray banner
   * - **success** - results in a green banner
   * - **warning** - results in a yellow banner
   * - **alert** - results in a red banner
   */
  variant?: 'brand' | 'neutral' | 'success' | 'warning' | 'alert';
}

const variantToIconAssetsMap: {
  [key: string]: {
    name: 'notifications' | 'forum' | 'check-circle' | 'warning' | 'dangerous';
    title: string;
  };
} = {
  brand: {
    name: 'notifications',
    title: 'attention',
  },
  neutral: {
    name: 'forum',
    title: 'notice',
  },
  success: {
    name: 'check-circle',
    title: 'success',
  },
  warning: {
    name: 'warning',
    title: 'warning',
  },
  alert: {
    name: 'dangerous',
    title: 'alert',
  },
};

/**
 * ```ts
 * import {Banner} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 *
 * Example usage:
 *
 * ```tsx
 * <Banner
 *   onDismiss={handleDismiss}
 *   text={
 *     <>
 *       <BannerTitle>Some title</Banner.Title>
 *       <BannerDescription>Some description</Banner.Description>
 *     </>
 *   }
 * />
 * ```
 */
export const Banner = ({
  action,
  className,
  // TODO: verify brand is the default variant and not neutral
  dismissable,
  onDismiss,
  orientation,
  variant = 'brand',
  text,
  ...other
}: Props) => {
  const [dismissed, setDismissed] = useState(false);

  function handleDismiss(e: any) {
    e.preventDefault();
    onDismiss && onDismiss();
    setDismissed(true);
  }

  if (dismissed) {
    return null;
  }

  const isHorizontal = !orientation;

  const componentClassName = clsx(
    // Base styles
    styles['banner'],
    className,
    // Variants
    variant === 'neutral' && styles['banner--neutral'],
    variant === 'brand' && styles['banner--brand'],
    variant === 'alert' && styles['banner--alert'],
    variant === 'warning' && styles['banner--warning'],
    variant === 'success' && styles['banner--success'],
    // Other options
    isHorizontal && styles['banner--horizontal'],
    dismissable && styles['banner--dismissable'],
  );

  return (
    <article className={componentClassName} {...other}>
      {dismissable && (
        <Button
          className={styles['banner__close-btn']}
          onClick={handleDismiss}
          variant="icon"
        >
          <Icon name={'close'} purpose="informative" title={'dismiss module'} />
        </Button>
      )}

      <Icon
        className={styles['banner__icon']}
        name={variantToIconAssetsMap[variant].name}
        purpose="informative"
        title={variantToIconAssetsMap[variant].title}
      />

      <div className={clsx(styles['banner__textAndAction'])}>
        <div className={clsx(styles['banner__textContent'])}>{text}</div>
        {action && (
          <div className={clsx(styles['banner__action'])}>{action}</div>
        )}
      </div>
    </article>
  );
};
Banner.displayName = 'Banner';
