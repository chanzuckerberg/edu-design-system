import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import type { MutableRefObject, ReactNode } from 'react';
import React from 'react';

import { assertEdsUsage } from '../../util/logging';
import type { ExtractProps } from '../../util/utility-types';
import type { Size } from '../../util/variant-types';

import Button from '../Button';
import Heading from '../Heading';
import ScrollWrapper from '../ScrollWrapper';
import Text from '../Text';

import styles from './Modal.module.css';

type ModalContentProps = {
  // Component API
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
   * Method called when the close button is clicked. Use this to hide the modal.
   * This should be used to also reset the `open` state.
   *
   * This is required even if you don't have a close button so the ESC key can close the modal.
   *
   * Closing is cancellable by passing in a function that returns `void` or by not altering the state.
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
  // Design API
  /**
   * Determine how the height of the modal container is calculated when `size` is `"lg"`:
   * - `"fixed"` applies the fixed dimensions, which will not adjust
   * - `"auto"` applies a floating height dimension, that will fit to the content (can be smaller or larger than `"default"`)
   * - `"max"` applies the maximum height within the viewport, leaving space along the top and bottom edges
   * - `"dynamic"` manages the height for you, with intelligent presets and scroll truncation as needed
   *
   * **Default is `"fixed"`**.
   */
  height?: 'fixed' | 'auto' | 'max' | 'dynamic';
  open?: boolean;
  /**
   * Emphasis used on the backgound overlay (behind the modal)
   *
   * **Default is `"low"`**.
   */
  overlayEmphasis?: 'low' | 'high';
  /**
   * Fixed sizes for the modal's height and width. Used in conjunction with `height` when using size `lg`.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'sm' | 'lg'> | 'full';
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
  // Component API
  /**
   * Contents for the modal title.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type ModalSubTitleProps = ExtractProps<typeof Text> & {
  // Component API
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
  // Component API
  /**
   * Child node(s) that can be nested inside component. `Modal.Header`,
   * `Modal.Body`, and `Model.Footer` are the only permissible children of the Modal.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Determine how the height of the modal container is calculated when `size` is `"lg"`:
   * - `"fixed"` applies the fixed dimensions, which will not adjust
   * - `"auto"` applies a floating height dimension, that will fit to the content (can be smaller or larger than `"default"`)
   * - `"max"` applies the maximum height within the viewport, leaving space along the top and bottom edges
   * - `"dynamic"` manages the height for you, with intelligent presets and scroll truncation as needed
   *
   * **Default is `"fixed"`**.
   */
  height?: ModalContentProps['height'];
};

type ModalHeaderProps = {
  // Component API
  /**
   * Child node(s) to place inside the Modal header.
   * Should include the <Modal.Title>
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
};

type ModalFooterProps = {
  // Component API
  /**
   * Child node(s) to place inside the Modal footer.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
};

type Context = {
  height?: ModalContentProps['height'];
};

const ModalContext = React.createContext<Context>({});

/**
 * Helper function to determine whether a set of children contain a `ModalTitle` or `Modal.Title` child
 *
 * @param children component children (ReactNode)
 * @returns boolean representing whether the set of children (recursive) has a `ModalTitle` or `Modal.Title`
 */
function childrenHaveModalTitle(children?: ReactNode): boolean {
  // TODO: this could be a common utility function for other use cases, or from a library
  const childrenArray = React.Children.toArray(children);
  return childrenArray.some((child) => {
    // `ReactNode` covers strings, numbers, bigints and promises as of React 19,
    // none of which carry `props`.
    if (typeof child !== 'object' || !('props' in child)) {
      return false;
    }
    const { children: grandchildren } = child.props as {
      children?: ReactNode;
    };
    if (
      child.type &&
      typeof child.type !== 'string' &&
      (child.type?.name === 'ModalTitle' || child.type?.name === 'Modal.Title')
    ) {
      return true;
    } else if (grandchildren) {
      return childrenHaveModalTitle(grandchildren);
    }
    return false;
  });
}

/**
 * The actual modal, without the dark overlay behind it.
 *
 * This is only exported for testing purposes; please do not import and use this directly.
 */
const ModalContent = (props: ModalContentProps) => {
  const {
    children,
    className,
    height = 'fixed',
    hideCloseButton = false,
    open,
    onClose,
    size = 'lg',
    ...other
  } = props;

  const componentClassName = clsx(
    styles['modal__content'],
    height && styles[`modal__content--height-${height}`],
    size && styles[`modal__content--${size}`],
    open && styles[`modal__content--is-open`],
    className,
  );

  return (
    <ModalContext.Provider value={{ height }}>
      <div className={componentClassName} {...other}>
        {!hideCloseButton && (
          <Button
            aria-label="close"
            className={styles['modal__close-button']}
            context="default"
            icon="close"
            iconLayout="icon-only"
            onClick={onClose}
            rank="tertiary"
            variant="neutral"
          ></Button>
        )}
        {children}
      </div>
    </ModalContext.Provider>
  );
};

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standard | Central overlay with focus trap, used for focused tasks or messages. | Form entry; settings dialogs; confirmations. |
 * | Confirmation | Asks the user to confirm or cancel a critical action. | Deletion prompts; submitting irreversible actions. |
 * | Alert | Displays an important message, usually with a single dismiss button. | Error notifications; access denied messages. |
 * | Full-screen | Takes up the entire viewport for complex or immersive tasks. | Onboarding; mobile workflows; media viewers. |
 * | Success/Feedback | Provides positive feedback after a completed action. | Success confirmation; "Thanks for submitting" messages. |
 *
 * ### Best Practices
 *
 * * Modals are disruptive and should be used sparingly.
 * * Use a modal to request minimal amounts of information from a user. Don't request large forms of information inside a modal.
 * * Don't use a modal when a separate, designated URL is desired.
 * * Show one modal at a time. Don't place a modal on top of another modal. This can create usability issues.
 * * For important error notifications, use Inline Notification or Banner.
 * * For short messaging confirming successful interactions, such as "Email sent", use Inline Notification or Toast.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use a primary title, body text, and a primary CTA. All other modal content is optional.
 * * Use a verb-noun question or statement for the primary title.
 * * Ensure people can scan the heading and CTAs and know what to do even if they skip the body text.
 * * Keep primary titles and subtitles to a max of 2 lines each.
 * * Use either a short phrase or a full sentence for subtitles.
 * * Keep section titles to less than 1 line; preferably a short phrase.
 * * Break up information with section titles for scanability.
 * * Try to avoid scrolling text within a modal.
 *
 * ### Don'ts
 *
 * * Include long headings or body text. The more words, the less likely people are to read any of it.
 * * Include long passages of informative text in a modal. Use a short summary and then link to a help article, FAQ etc.
 *
 * ## Resources
 *
 * * https://headlessui.dev/react/dialog
 */
export const Modal = (props: ModalProps) => {
  const {
    'aria-label': ariaLabel,
    initialFocus,
    modalContainerClassName,
    onClose,
    open,
    overlayEmphasis = 'low',
    ...rest
  } = props;

  assertEdsUsage(
    [!childrenHaveModalTitle(rest.children) && !ariaLabel],
    "You must use the Modal.Title helper component or pass in an aria-label when using the Modal. The Modal uses the Modal.Title to describe the modal to screen readers using aria-labelledby. If you're not using the Modal.Title component, you can pass in an aria-label instead.",
    'error',
  );

  // check to make sure folks aren't using size="lg" with "height"
  assertEdsUsage(
    [rest.size !== 'lg' && typeof rest.height !== 'undefined'],
    'Height is only supported when size is set to "lg"',
  );

  // check to make sure we only use height=dynamic from now on
  assertEdsUsage(
    [rest.height !== 'dynamic' && typeof rest.height !== 'undefined'],
    `Height value ${rest.height} is deprecated and will be removed in a future version of EDS`,
  );

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
        <div
          className={clsx(
            styles['modal__overlay'],
            overlayEmphasis &&
              styles[`modal__overlay--emphasis-${overlayEmphasis}`],
          )}
        />
        <DialogPanel className={styles['modal__panel']}>
          <ModalContent onClose={onClose} open={open} {...rest} />
        </DialogPanel>
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
  height,
  ...other
}: ModalBodyProps) => (
  <div
    className={clsx(styles['modal-body'], className)}
    // This element is tabbable to allow keyboard users to scroll long content.
    tabIndex={height === 'dynamic' ? 0 : undefined}
    {...other}
  >
    {height === 'dynamic' ? (
      <ScrollWrapper shadowType="contain">{children}</ScrollWrapper>
    ) : (
      children
    )}
  </div>
);

/**
 * Component defines the Footer section of the modal.
 */
const ModalFooter = ({ children, className, ...other }: ModalFooterProps) => {
  return (
    <div className={clsx(styles['modal-footer'], className)} {...other}>
      {children}
    </div>
  );
};

/**
 * Component defines the Header section of the modal.
 */
const ModalHeader = ({ children, className, ...other }: ModalHeaderProps) => {
  const componentClassName = clsx(styles['modal-header'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

/**
 * Component defines the Title section of the modal.
 */
const ModalTitle = ({
  children,
  className,
  preset = 'title-lg',
  ...other
}: ModalTitleProps) => {
  const componentClassName = clsx(styles['modal-title'], className);
  return (
    <DialogTitle as={React.Fragment}>
      <Heading
        as="h2"
        className={componentClassName}
        preset={preset}
        {...other}
      >
        {children}
      </Heading>
    </DialogTitle>
  );
};

const ModalSubTitle = ({
  children,
  className,
  preset = 'body-md',
  ...other
}: ModalSubTitleProps) => {
  const componentClassName = clsx(styles['modal-sub-title'], className);
  return (
    <Text as="div" className={componentClassName} preset={preset} {...other}>
      {children}
    </Text>
  );
};

const FocusableModalBody = (props: ModalBodyProps) => {
  const { height } = React.useContext(ModalContext);
  return <ModalBody height={height} {...props} />;
};

Modal.displayName = 'Modal';
ModalTitle.displayName = 'Modal.Title';
ModalSubTitle.displayName = 'Modal.SubTitle';
FocusableModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.SubTitle = ModalSubTitle;
Modal.Body = FocusableModalBody;
Modal.Footer = ModalFooter;
