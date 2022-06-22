import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './ModalHeader.module.css';

export type Props = {
  /**
   * Child node(s) to place inside the Modal header.
   * Should include the <Modal.Title>
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
  /**
   * CSS class names that can be appended to the brand asset.
   */
  assetClassName?: string;
};

export const ModalHeader = ({
  assetClassName,
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
  const brandAssetClassName = clsx(
    styles['modal-header__brand-asset'],
    assetClassName,
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
      {variant === 'brand' && brandAsset && (
        <div className={brandAssetClassName}>{brandAsset}</div>
      )}
    </div>
  );
};
