import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import type { MutableRefObject, ReactNode } from 'react';
import React from 'react';
import type { ExtractProps } from '../../util/utility-types';
import type { Size } from '../../util/variant-types';
import Heading from '../Heading';
import { Icon, type IconName } from '../Icon/Icon';
import styles from './Modal.module.css';

type Variant = 'brand';

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
   *
   * **Default is `false`**.
   */
  hideCloseButton?: boolean;
  /**
   * A ref to an element that should receive focus when the modal first opens.
   *
   * If undefined, the first focusable element (usually the close button) will be used.
   *
   * ```
   * const inputFieldRef = useRef();
   *
   * <Modal initialFocus={inputFieldRef}>
   *   ...
   *   <InputField ref={inputFieldRef} />
   * </Modal>
   * ```
   */
  initialFocus?: MutableRefObject<HTMLElement | null>;
  /**
   * Toggles scrollable variant of the modal. If modal is scrollable, footer is not, and vice versa.
   * Also adds border and shadow to the footer indicate sticky status and tabindex to body for keyboard scrolling.
   * Prop should be dependent on whether content overflows at the mobile level.
   * Tabindex for keyboard scroll is on the body, however, due to focus outline
   * not having high contrast on the brand header and being overlapped by the footer.
   *
   * **Default is `false`**.
   */
  isScrollable?: boolean;
  /**
   * Method called when the close button is clicked. Use this to hide the modal.
   * This should be used to also reset the `open` state.
   * @see https://headlessui.com/react/dialog
   *
   * This is required even if you don't have a close button so the ESC key can close the modal.
   *
   * ```
   * const [isOpen, setIsOpen] = useState(true);
   * // ....
   *
   * <Modal open={isOpen} onClose={() => setIsOpen(false)}>
   *  ...
   * </Modal>
   * ```
   */
  onClose: () => void;
  /**
   * Max size of the modal. Defaults to 'lg'.
   * Will still break responsively.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  /**
   * Color variants of the modal.
   */
  variant?: Variant;
};

type ModalProps = ModalContentProps & {
  /**
   * Whether or not the modal is visible. Recommend using `useState` to set this
   * variable instead of a boolean literal, to avoid component control issues.
   * @see https://headlessui.com/react/dialog
   *
   * ```
   * const [isOpen, setIsOpen] = useState(true);
   * // ....
   *
   * <Modal open={isOpen}>
   *  ...
   * </Modal>
   * ```
   */
  open: boolean;
  /**
   * Additional classnames passed in for the modal container.
   */
  modalContainerClassName?: string;
};

type ModalTitleProps = ExtractProps<typeof Heading> & {
  /**
   * Contents for the modal title.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type ModalBodyProps = {
  /**
   * Child node(s) that can be nested inside component. `Modal.Header`,
   * `Modal.Body`, and `Model.Footer` are the only permissible children of the Modal.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles focusable variant of the modal. Used to attach a tabIndex for keyboard scrolling
   * and focus indicator outline.
   * Scrolling functionality exists on Modal since the header also needs to scroll.
   * Defaults to false since modal default is not scrollable.
   */
  isFocusable?: boolean;
};

type ModalHeaderProps = {
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
  variant?: Variant;
  /**
   * Placeholder for brand asset.
   */
  brandAsset?: ReactNode;
  /**
   * CSS class names that can be appended to the brand asset.
   */
  assetClassName?: string;
};

type ModalFooterProps = {
  /**
   * Child node(s) to place inside the Modal footer.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles sticky variant of the footer. If modal is scrollable, footer is sticky.
   * Also adds border and shadow to indicate sticky status.
   * Defaults to false since modal default is not scrollable.
   */
  isSticky?: boolean;
};

type ModalStepperProps = {
  /**
   * Indicates which step is the active step. Must be one or more.
   */
  activeStep: number;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Indicates how many steps to represent. Must be one or more and
   * greater than or equal to activeStep.
   */
  totalSteps: number;
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
 * EDS Wrapper for the HeadlessUI Dialog component
 * @see https://headlessui.dev/react/dialog
 *
 * NOTE: You must have at least one focusable element in the modal contents, for keyboard
 * accessibility reasons. (The close button counts as a focusable element.) Use `initialFocus`
 * to choose a different element.
 *
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
 * Component defines the body of the modal.
 */
const ModalBody = ({
  children,
  className,
  isFocusable,
  ...other
}: ModalBodyProps) => (
  <div
    className={clsx(styles['modal-body'], className)}
    // This element is tabbable to allow keyboard users to scroll long content.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    tabIndex={isFocusable ? 0 : undefined}
    {...other}
  >
    {children}
  </div>
);

/**
 * Component defines the Footer section of the modal.
 */
const ModalFooter = ({
  children,
  className,
  isSticky = false,
  ...other
}: ModalFooterProps) => {
  return (
    <div
      className={clsx(
        styles['modal-footer'],
        isSticky && styles['modal-footer--sticky'],
        className,
      )}
      {...other}
    >
      {children}
    </div>
  );
};

/**
 * Component defines the Header section of the modal.
 */
const ModalHeader = ({
  assetClassName,
  brandAsset,
  children,
  className,
  variant,
  ...other
}: ModalHeaderProps) => {
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

/**
 * Stepper for the modal to indicate page status.
 * TODO: Separate the stepper from the modal, and make into a standalone component.
 */
const ModalStepper = ({
  activeStep,
  className,
  totalSteps,
  ...other
}: ModalStepperProps) => {
  const componentClassName = clsx(styles['modal-stepper'], className);
  if (process.env.NODE_ENV !== 'production') {
    if (totalSteps < 1) {
      throw new Error('Must have more than one step in totalSteps.');
    }
    if (activeStep < 1) {
      throw new Error('activeStep must be one or more.');
    }
    if (totalSteps < activeStep) {
      throw new Error('activeStep cannot exceed totalSteps');
    }
  }

  const stepIcons = [];
  for (let i = 0; i < totalSteps; i++) {
    const isActivestep = i + 1 === activeStep;
    const icon: IconName = isActivestep ? 'circle' : 'empty-circle';
    const title = isActivestep ? `Active Step ${i + 1}` : `Step ${i + 1}`;
    stepIcons.push(
      <Icon
        key={i}
        name={icon}
        purpose="informative"
        size="0.5rem"
        title={title}
      />,
    );
  }
  return (
    <div className={componentClassName} {...other}>
      {stepIcons}
    </div>
  );
};

/**
 * Component defines the Title section of the modal.
 */
const ModalTitle = ({
  children,
  className,
  preset = 'headline-md',
  ...other
}: ModalTitleProps) => (
  <Dialog.Title as={React.Fragment}>
    <Heading as="h2" className={className} preset={preset} {...other}>
      {children}
    </Heading>
  </Dialog.Title>
);

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

Modal.displayName = 'Modal';
VariantModalHeader.displayName = 'Modal.Header';
ModalTitle.displayName = 'Modal.Title';
FocusableModalBody.displayName = 'Modal.Body';
StickyModalFooter.displayName = 'Modal.Footer';
ModalStepper.displayName = 'Modal.Stepper';

Modal.Header = VariantModalHeader;
Modal.Title = ModalTitle;
Modal.Body = FocusableModalBody;
Modal.Footer = StickyModalFooter;
Modal.Stepper = ModalStepper;
