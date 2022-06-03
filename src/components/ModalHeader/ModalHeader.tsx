import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './ModalHeader.module.css';

export type Props = {
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Adjusts height, color, and text of the header.
   */
  variant?: 'brand';
  /**
   * Placeholder for brand asset.
   */
  brandAsset?: ReactNode;
};

export const ModalHeader = ({
  brandAsset,
  children,
  className,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['modal-header'],
    variant === 'brand' && styles['modal-header--brand'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {variant === 'brand' && brandAsset && (
        <div className={styles['modal-header__brand-asset']}>{brandAsset}</div>
      )}
      {children}
    </div>
  );
};
