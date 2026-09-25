import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import type { MutableRefObject, ReactNode } from 'react';
import React from 'react';

import {
  assertEdsUsage,
  assertNoRemovedProp,
  type WithRemovedProps,
} from '../../util/logging';
import type { ExtractProps } from '../../util/utility-types';
import type { Size } from '../../util/variant-types';

import Button from '../Button';
import Heading from '../Heading';
import { useSemanticIcon } from '../Icon';
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
   * Contents of the modal. Only `Modal.Header`, `Modal.Body`, and `Modal.Footer` are allowed
   * as direct children; anything else logs an error.
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
  /**
   * CSS properties defined for the modal's content element. Includes the component's CSS Custom Properties:
   *
   * - `--modal-content__border`
   */
  style?: ModalContentCSSProperties;
  // Design API
  open?: boolean;
  /**
   * The modal's footprint at each breakpoint:
   * - `"sm"` is a compact floating surface that sizes to its content, up to 480px tall
   * - `"lg"` fills the viewport at the smallest breakpoint, and above it takes the viewport
   *   height less a margin
   * - `"full"` takes the whole viewport at every breakpoint
   *
   * Height is managed for you at all three. The body takes whatever space the header and
   * footer leave over and scrolls once the content outgrows it, so the actions stay on screen
   * however long the content runs. The exception is a viewport under 320px tall, too short to
   * seat the header and footer and still leave a body worth scrolling, where the modal scrolls
   * as a whole instead and the footer does go off screen.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'sm' | 'lg'> | 'full';
};

export interface ModalContentCSSProperties extends React.CSSProperties {
  /**
   * Custom property to customize the border color of this component
   */
  '--modal-content__border'?: string;
}

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
   * `Modal.Body`, and `Modal.Footer` are the only permissible children of the Modal.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
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
 * Helper function to determine whether a set of children has anything other than `Modal.Header`,
 * `Modal.Body`, or `Modal.Footer` at the top level. Fragments are looked through, since they
 * add nothing to the DOM, and empty children (`null`, `false`, `undefined`) are skipped, so
 * conditionally rendered sections are fine.
 *
 * @param children component children (ReactNode)
 * @returns boolean representing whether any top-level child is not one of the three sections
 */
function childrenHaveNonSectionChild(children?: ReactNode): boolean {
  return React.Children.toArray(children).some((child) => {
    if (!React.isValidElement(child)) {
      return true;
    }
    if (child.type === React.Fragment) {
      return childrenHaveNonSectionChild(
        (child.props as { children?: ReactNode }).children,
      );
    }
    return (
      child.type !== ModalHeader &&
      child.type !== ModalBody &&
      child.type !== ModalFooter
    );
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
    hideCloseButton = false,
    open,
    onClose,
    size = 'lg',
    // TODO(next-major): remove, with the asserts below.
    height: removedHeight,
    overlayEmphasis: removedOverlayEmphasis,
    ...other
  } = props as WithRemovedProps<
    ModalContentProps,
    'height' | 'overlayEmphasis'
  >;

  // TODO(next-major): remove.
  assertNoRemovedProp(
    'Modal/.Content',
    'height',
    'It manages its own height now: the body scrolls once the content outgrows the space the header and footer leave over.',
    removedHeight,
  );

  // TODO(next-major): remove.
  assertNoRemovedProp(
    'Modal/.Content',
    'overlayEmphasis',
    'Every modal draws the low-emphasis overlay now.',
    removedOverlayEmphasis,
  );

  assertEdsUsage(
    [childrenHaveNonSectionChild(children)],
    'Modal only takes Modal.Header, Modal.Body, and Modal.Footer as direct children. The modal lays out and scrolls those three sections, so anything else placed alongside them breaks that layout. Move the content into one of the sections, usually Modal.Body.',
    'error',
  );

  const componentClassName = clsx(
    styles['modal__content'],
    size && styles[`modal__content--${size}`],
    open && styles[`modal__content--is-open`],
    className,
  );

  // The close button is semantic: it is the same affordance as every other close in the
  // app, so it is set once through `IconProvider` rather than per modal.
  const closeIcon = useSemanticIcon('close');

  // Shrinks an lg modal to its content when that content is shorter than the lg max height
  // (`100vh - spacing-size-12`). Taller content keeps the CSS max height and the body scrolls.
  const contentRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const content = contentRef.current;
    // the body's ScrollWrapper inner, which holds Modal.Body's children
    const scroller = content?.querySelector<HTMLElement>(
      `:scope > .${styles['modal-body']} > * > *`,
    );
    if (!content || !scroller || size !== 'lg') return;

    const bodyChildren = Array.from(scroller.children) as HTMLElement[];

    const fitToContent = () => {
      const first = bodyChildren[0];
      const last = bodyChildren[bodyChildren.length - 1];
      const bodyContentHeight = first
        ? last.getBoundingClientRect().bottom -
          first.getBoundingClientRect().top +
          parseFloat(getComputedStyle(first).marginTop) +
          parseFloat(getComputedStyle(last).marginBottom)
        : 0;
      // everything around the scroll area: header, footer, body padding, and border
      const chrome = content.offsetHeight - scroller.clientHeight;
      // a little extra room so the body does not scroll by a pixel or two from rounding
      const total = chrome + bodyContentHeight + 4;

      const largeHeight =
        window.innerHeight -
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--eds-spacing-size-12',
          ),
        );
      // an empty value hands max-height back to the stylesheet
      content.style.maxHeight = total < largeHeight ? `${total}px` : '';
    };

    fitToContent();
    const observer = new ResizeObserver(fitToContent);
    [content, scroller, ...bodyChildren].forEach((el) => observer.observe(el));
    window.addEventListener('resize', fitToContent);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', fitToContent);
      content.style.maxHeight = '';
    };
  }, [children, size]);

  return (
    <div className={componentClassName} ref={contentRef} {...other}>
      {!hideCloseButton && (
        <Button
          aria-label="close"
          className={styles['modal__close-button']}
          context="default"
          icon={closeIcon}
          iconLayout="icon-only"
          onClick={onClose}
          rank="tertiary"
          variant="neutral"
        ></Button>
      )}
      {children}
    </div>
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
 * * Avoid applying inline stylistic modifications to the Modal.Title sub-component. Use the defaults or preset props where present.
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
    ...rest
  } = props;

  assertEdsUsage(
    [!childrenHaveModalTitle(rest.children) && !ariaLabel],
    "You must use the Modal.Title helper component or pass in an aria-label when using the Modal. The Modal uses the Modal.Title to describe the modal to screen readers using aria-labelledby. If you're not using the Modal.Title component, you can pass in an aria-label instead.",
    'error',
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
        <div className={styles['modal__overlay']} />
        <DialogPanel className={styles['modal__panel']}>
          <ModalContent onClose={onClose} open={open} {...rest} />
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};

/**
 * Component defines the body of the modal.
 *
 * The body scrolls its content, so however long that content is, it does not push the header
 * and footer off the viewport. Below 320px of viewport height there is no room to scroll the
 * body within and the modal scrolls as a whole, which is the one case where the footer does
 * move off screen.
 *
 * `ScrollWrapper` leaves the region it scrolls in the tab order, which is how a keyboard user
 * reaches the rest of it; this element only sizes that region, so it stays out of the tab
 * order itself.
 */
const ModalBody = (props: ModalBodyProps) => {
  const {
    children,
    className,
    // TODO(next-major): remove, with the assert below.
    height: removedHeight,
    ...other
  } = props as WithRemovedProps<ModalBodyProps, 'height'>;

  // TODO(next-major): remove.
  assertNoRemovedProp(
    'Modal.Body',
    'height',
    'The body scrolls its own content, at every modal size.',
    removedHeight,
  );

  return (
    <div className={clsx(styles['modal-body'], className)} {...other}>
      <ScrollWrapper shadowType="contain">{children}</ScrollWrapper>
    </div>
  );
};

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

Modal.displayName = 'Modal';
ModalTitle.displayName = 'Modal.Title';
ModalSubTitle.displayName = 'Modal.SubTitle';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.SubTitle = ModalSubTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
