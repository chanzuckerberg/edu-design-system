import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import type { MutableRefObject, ReactNode } from 'react';
import React from 'react';
import { Icon } from '../Icon/Icon';
import type { Props as ModalBodyProps } from '../ModalBody/ModalBody';
import { ModalBody } from '../ModalBody/ModalBody';
import type { Props as ModalFooterProps } from '../ModalFooter/ModalFooter';
import { ModalFooter } from '../ModalFooter/ModalFooter';
import type { Props as ModalHeaderProps } from '../ModalHeader/ModalHeader';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { ModalStepper } from '../ModalStepper/ModalStepper';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import styles from './Modal.module.css';

type Variant = 'brand' | undefined;

type ModalContentProps = {
  /**
   * Optional aria-label for the modal.
   *
   * If undefined, the headingText of the Modal.Header will be used.
   * If there is no Modal.Header, an aria-label is required.
   */
  'aria-label'?: string;
  /**
   * Additional classnames passed in for styling.
   */
  className?: string;
  /**
   * Contents of the modal.
   */
  children: ReactNode;
  /**
   * Hides the close button in the top right of the modal.
   */
  hideCloseButton?: boolean;
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
   * Toggles scrollable variant of the modal. If modal is scrollable, footer is not, and vice versa.
   * Also adds border and shadow to the footer indicate sticky status and tabindex to body for keyboard scrolling.
   * Prop should be dependent on whether content overflows at the mobile level.
   * Tabindex for keyboard scroll is on the body, however, due to focus outline
   * not having high contrast on the brand header and being overlapped by the footer.
   * Defaults to false since modal default is not scrollable.
   */
  isScrollable?: boolean;
  /**
   * Method called when the close button is clicked. Use this to hide the modal.
   *
   * This is required even if you don't have a close button so the ESC key can close the modal.
   */
  onClose: () => void;
  /**
   * Max size of the modal. Defaults to 'lg'.
   * Will still break responsively.
   */
  size?: 'sm' | 'md' | 'lg';
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
  /**
   * Additional classnames passed in for the modal container.
   */
  modalContainerClassName?: string;
};

type Context = {
  isScrollable?: boolean;
  variant?: Variant;
};

const ModalContext = React.createContext<Context>({});

function childrenHaveModalTitle(children?: ReactNode): boolean {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.some((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return false;
    } else if (
      'props' in child &&
      child.type &&
      typeof child.type !== 'string' &&
      (child.type?.name === 'ModalTitle' || child.type?.name === 'Modal.Title')
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
    isScrollable,
    onClose,
    size = 'lg',
    variant,
    ...other
  } = props;

  const componentClassName = clsx(
    styles['modal__content'],
    isScrollable && styles['modal__content--scrollable'],
    (size === 'md' || size === 'lg') && styles['modal__content--md'],
    size === 'lg' && styles['modal__content--lg'],
    className,
  );

  const closeIconClassName = clsx(
    styles['modal__close-icon'],
    variant === 'brand' && styles['modal__close-icon--brand'],
  );

  return (
    <ModalContext.Provider value={{ isScrollable, variant }}>
      <div className={componentClassName} {...other}>
        {!hideCloseButton && (
          <button className={styles['modal__close-button']} onClick={onClose}>
            <Icon
              className={closeIconClassName}
              name="close"
              purpose="informative"
              size="1.5rem"
              title="close modal"
            />
          </button>
        )}

        {children}
      </div>
    </ModalContext.Provider>
  );
};

/**
 * `import {Modal} from "@chanzuckerberg/eds";`
 *
 * Modal wrapping the Headless UI Diaglog component https://headlessui.dev/react/dialog
 *
 * NOTE: You must have at least one focusable element in the modal contents, for keyboard
 * accessibility reasons. (The close button counts as a focusable element.)
 *
 * Example usage:
 *
 * ```tsx
 * <Modal>
 *   <Modal.Header>
 *     <Modal.Title>{modalTitle}</Modal.Title>
 *   </Modal.Header>
 *   <Modal.Body>{modalBodyContent}</Modal.Body>
 *   <Modal.Footer>
 *     <Modal.Stepper />
 *     {modalFooterContent}
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
export const Modal = (props: ModalProps) => {
  const {
    'aria-label': ariaLabel,
    initialFocus,
    modalContainerClassName,
    onClose,
    open,
    ...rest
  } = props;
  const { children } = rest;

  if (process.env.NODE_ENV !== 'production') {
    const hasModalTitle = childrenHaveModalTitle(children);
    if (!hasModalTitle && !ariaLabel) {
      throw new Error(
        "You must use the Modal.Title helper component or pass in an aria-label when using the Modal. The Modal uses the Modal.Title to describe the modal to screen readers using aria-labelledby. If you're not using the Modal.Title component, you can pass in an aria-label instead.",
      );
    }
  }

  const componentClassName = clsx(styles['modal'], modalContainerClassName);

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
        className={componentClassName}
        initialFocus={initialFocus}
        // Passing onClose to the Dialog allows it to close the modal when the ESC key is triggered.
        onClose={onClose}
      >
        <Dialog.Overlay className={styles['modal__overlay']} />

        <ModalContent onClose={onClose} {...rest} />
      </Dialog>
    </Transition>
  );
};

/**
 * Variations of the subcomponent to pass props from parent Modal component.
 * Same prop passed directly to subcomponent has priority over prop passed from Modal component.
 */
const VariantModalHeader = (props: ModalHeaderProps) => {
  const { variant } = React.useContext(ModalContext);
  return <ModalHeader variant={variant} {...props} />;
};

const FocusableModalBody = (props: ModalBodyProps) => {
  const { isScrollable } = React.useContext(ModalContext);
  return <ModalBody isFocusable={isScrollable} {...props} />;
};

const StickyModalFooter = (props: ModalFooterProps) => {
  const { isScrollable } = React.useContext(ModalContext);
  return <ModalFooter isSticky={isScrollable} {...props} />;
};

Modal.Header = VariantModalHeader;
Modal.Title = ModalTitle;
Modal.Body = FocusableModalBody;
Modal.Footer = StickyModalFooter;
Modal.Stepper = ModalStepper;
