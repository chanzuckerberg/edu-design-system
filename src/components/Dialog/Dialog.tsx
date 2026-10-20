import {
  Description,
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessDialog,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import type { KeyboardEvent, ReactNode } from 'react';
import React from 'react';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';
import Text from '../Text';

import styles from './Dialog.module.css';

type DialogProps = {
  // Component API
  /**
   * The question or message the dialog asks the user to respond to. Accepts formatted content,
   * such as text with emphasis or a short list.
   */
  children: ReactNode;
  /**
   * Additional classnames passed in for styling.
   *
   * This is applied to the dialog's surface, not the overlay behind it.
   */
  className?: string;
  /**
   * Label for the secondary button, which cancels.
   *
   * **Default is `"Cancel"`**.
   */
  cancelLabel?: string;
  /**
   * Label for the primary button, which runs the default action. Name the action, for example
   * `"Discard changes"` or `"Delete file"`, rather than `"OK"` or `"Yes"`.
   */
  confirmLabel: string;
  /**
   * Called when the user cancels: the secondary button, the ESC key, or a click on the overlay.
   * Use this to hide the dialog.
   */
  onCancel: () => void;
  /**
   * Called when the user takes the default action: the primary button, or the Enter key while
   * focus isn't on another button or a link. Use this to act and hide the dialog.
   */
  onConfirm: () => void;
  /**
   * Whether the dialog is visible.
   */
  open: boolean;
  /**
   * Short title for the dialog, which also names it for screen readers. Use a verb-noun question
   * or statement, for example `"Discard your changes?"`.
   */
  title: string;
  // Design API
  /**
   * Status (color) of the primary button. Use `"critical"` when the default action destroys
   * something or can't be undone.
   *
   * **Default is `"default"`**.
   */
  confirmVariant?: 'default' | 'critical';
};

/**
 * Elements that already respond to Enter themselves, so the dialog leaves Enter to them.
 */
const OWNS_ENTER_KEY =
  'button, a[href], textarea, select, summary, [contenteditable]:not([contenteditable="false"])';

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Dialog} from "@chanzuckerberg/eds";`
 *
 * A small, focused prompt that asks the user to confirm or cancel an action. Use it in place of
 * the browser's `window.confirm()`, which can't be styled or given formatted content.
 *
 * ## Usage
 *
 * * Ask one question with one default action. For anything with more content or more choices,
 *   use `Modal`.
 * * The primary button runs the default action and receives focus when the dialog opens, so
 *   Enter confirms. The secondary button cancels, as do ESC and a click on the overlay.
 * * Set `confirmVariant="critical"` when the action is destructive.
 *
 * ### Confirming before a `Modal` closes
 *
 * `Modal`'s `warnOnClose` uses `window.confirm()`. To ask with a `Dialog` instead, leave
 * `warnOnClose` off and decide in the modal's `onClose`: close straight away when nothing would
 * be lost, otherwise open the `Dialog`. Render the `Dialog` inside `Modal.Body` so it stacks
 * above the modal.
 *
 * ## Content & Accessibility
 *
 * * Use a verb-noun question for the title, and a primary label that names the action.
 * * Keep the body to a sentence or two that says what happens next.
 * * The dialog is announced as an `alertdialog`, named by its title and described by its body.
 */
export const Dialog = ({
  cancelLabel = 'Cancel',
  children,
  className,
  confirmLabel,
  confirmVariant = 'default',
  onCancel,
  onConfirm,
  open,
  title,
}: DialogProps) => {
  const confirmButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      event.key !== 'Enter' ||
      event.nativeEvent.isComposing ||
      (event.target as HTMLElement).closest(OWNS_ENTER_KEY)
    ) {
      return;
    }
    event.preventDefault();
    onConfirm();
  };

  return (
    <Transition
      as={React.Fragment}
      enter={styles['dialog__transition--enter']}
      enterFrom={styles['dialog__transition--enterFrom']}
      enterTo={styles['dialog__transition--enterTo']}
      leave={styles['dialog__transition--leave']}
      leaveFrom={styles['dialog__transition--leaveFrom']}
      leaveTo={styles['dialog__transition--leaveTo']}
      show={open}
    >
      <HeadlessDialog
        className={styles['dialog']}
        initialFocus={confirmButtonRef}
        // ESC and overlay clicks close through here, and both mean cancel.
        onClose={onCancel}
        role="alertdialog"
      >
        <div className={styles['dialog__overlay']} />
        <DialogPanel
          className={clsx(styles['dialog__content'], className)}
          onKeyDown={handleKeyDown}
        >
          <DialogTitle as={React.Fragment}>
            <Heading
              as="h2"
              className={styles['dialog__title']}
              preset="title-md"
            >
              {title}
            </Heading>
          </DialogTitle>
          <Description as={React.Fragment}>
            <Text as="div" className={styles['dialog__body']} preset="body-md">
              {children}
            </Text>
          </Description>
          <ButtonGroup className={styles['dialog__footer']}>
            <Button
              onClick={onConfirm}
              rank="primary"
              ref={confirmButtonRef}
              size="md"
              variant={confirmVariant}
            >
              {confirmLabel}
            </Button>
            <Button onClick={onCancel} rank="secondary" size="md">
              {cancelLabel}
            </Button>
          </ButtonGroup>
        </DialogPanel>
      </HeadlessDialog>
    </Transition>
  );
};

Dialog.displayName = 'Dialog';
