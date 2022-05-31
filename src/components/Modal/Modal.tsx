import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { MutableRefObject, ReactNode } from 'react';
import styles from './Modal.module.css';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from '../../';
import Icon from '../Icon';

type Variant = 'brand' | undefined;

type ModalContentProps = {
  /**
   * The size of the modal.
   *
   * This controls the maximum width of the modal, but not the height.
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * Hides the close button in the top right of the modal.
   */
  hideCloseButton?: boolean;
  /**
   * Optional aria-label for the modal.
   *
   * If undefined, the headingText of the Modal.Header will be used.
   * If there is no Modal.Header, an ariaLabel is required.
   */
  ariaLabel?: string;
  /**
   * Method called when the close button is clicked. Use this to hide the modal.
   *
   * This is required even if you don't have a close button so the ESC key can close the modal.
   */
  onClose: () => void;
  /**
   * A ref to an element that should receive focus when the modal first opens.
   *
   * If undefined, the first focusable element (usually the close button) will be used.
   *
   * @example
   * const inputFieldRef = useRef();
   *
   * <Modal initialFocus={inputFieldRef}>
   *   ...
   *   <InputField ref={inputFieldRef} />
   * </Modal>
   */
  initialFocus?: MutableRefObject<HTMLElement | null>;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Contents of the modal.
   */
  children: ReactNode;
  /**
   * Color variants of the modal.
   */
  variant?: Variant;
};

type ModalProps = ModalContentProps & {
  /**
   * Whether or not the modal is visible.
   */
  open: boolean;
};

const VariantContext = React.createContext<Variant>(undefined);

function childrenHaveModalTitle(children?: ReactNode): boolean {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.some((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return false;
    } else if (
      'props' in child &&
      child.type &&
      typeof child.type !== 'string' &&
      child.type?.name === 'ModalTitle'
    ) {
      return true;
    } else if ('props' in child && child.props.children) {
      return childrenHaveModalTitle(child.props.children);
    }
    return false;
  });
}

/**
 * The actual modal, without the dark overlay behind it.
 *
 * This is only for testing purposes; please do not import and use this directly.
 */
export const ModalContent = (props: ModalContentProps) => {
  const {
    children,
    className,
    hideCloseButton = false,
    onClose,
    size = 'medium',
    variant,
  } = props;

  const componentClassName = clsx(
    styles['content'],
    size === 'small' && styles['small'],
    size === 'medium' && styles['medium'],
    size === 'large' && styles['large'],
    className,
  );

  const closeButtonIconClassName = clsx(
    styles['close-button__icon'],
    variant === 'brand' && styles['close-button__icon--brand'],
  );

  return (
    <VariantContext.Provider value={variant}>
      <div className={componentClassName}>
        {!hideCloseButton && (
          <button className={styles['close-button']} onClick={onClose}>
            <Icon
              className={closeButtonIconClassName}
              name="close"
              purpose="informative"
              size="1.5rem"
              title="close modal"
            />
          </button>
        )}

        {children}
      </div>
    </VariantContext.Provider>
  );
};

/**
 * ```ts
 * import {Modal} from "@chanzuckerberg/eds";
 * ```
 *
 * Modal wrapping the Headless UI Diaglog component https://headlessui.dev/react/dialog
 *
 * NOTE: You must have at least one focusable element in the modal contents, for keyboard
 * accessibility reasons. (The close button counts as a focusable element.)
 *
 * @example
 * <Modal>
 *   <Modal.Header>
 *     <Modal.Title>{modalTitle}</Modal.Title>
 *   </Modal.Header>
 *   <Modal.Body>{modalBodyContent}</Modal.Body>
 *   <Modal.Footer>{modalFooterContent}</Modal.Footer>
 * </Modal>
 */
export const Modal = (props: ModalProps) => {
  const { ariaLabel, initialFocus, onClose, open, ...rest } = props;
  const { children } = rest;

  if (process.env.NODE_ENV !== 'production') {
    const hasModalTitle = childrenHaveModalTitle(children);
    if (!hasModalTitle && !ariaLabel) {
      throw new Error(
        "You must use the Modal.Title helper component or pass in an aria-label when using the Modal. The Modal uses the Modal.Title to describe the modal to screen readers using aria-labelledby. If you're not using the Modal.Title component, you can pass in an aria-label instead.",
      );
    }
  }

  return (
    <Transition
      as={React.Fragment}
      enter={styles['modal__transition--enter']}
      enterFrom={styles['modal__transition--enterFrom']}
      enterTo={styles['modal__transition--enterTo']}
      leave={styles['modal__transition--leave']}
      leaveFrom={styles['modal__transition--leaveFrom']}
      leaveTo={styles['modal__transition--leaveTo']}
      show={open}
    >
      <Dialog
        aria-label={ariaLabel}
        className={styles['modal']}
        initialFocus={initialFocus}
        // Passing onClose to the Dialog allows it to close the modal when the ESC key is triggered.
        onClose={onClose}
      >
        <Dialog.Overlay className={styles['overlay']} />

        <ModalContent onClose={onClose} {...rest} />
      </Dialog>
    </Transition>
  );
};

type ModalHeaderArgs = React.ComponentProps<typeof ModalHeader>;

const VariantModalHeader = (args: ModalHeaderArgs) => {
  const variant = React.useContext(VariantContext);
  return <ModalHeader {...args} variant={variant} />;
};

Modal.Header = VariantModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
