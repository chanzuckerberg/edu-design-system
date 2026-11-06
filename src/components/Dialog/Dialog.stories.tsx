import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};

import isChromatic from 'chromatic/isChromatic';
import React from 'react';
import { useState } from 'react';
import { userEvent, within } from 'storybook/test';

import { Dialog } from './Dialog';
import { chromaticViewports } from '../../util/viewports';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import InputField from '../InputField';
import Modal from '../Modal';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      subtitle:
        'Dialogs ask the user to confirm or cancel a single action. They replace the browser’s built-in confirm prompt.',
    },
    // Using this motion preference for components where they trigger animations on mount
    chromatic: { delay: 500, prefersReducedMotion: 'reduce' },
    layout: 'fullscreen',
  },
  args: {
    children:
      'Your edits to this lesson plan haven’t been saved. If you leave now, they’ll be lost.',
    confirmLabel: 'Discard changes',
    title: 'Discard your changes?',
  },
  tags: ['autodocs', 'beta', 'version:1.0.0'],
} as Meta<typeof Dialog>;

type Args = React.ComponentProps<typeof Dialog>;
type Story = StoryObj<typeof Dialog>;
type InteractiveArgs = Omit<Args, 'onCancel' | 'onConfirm' | 'open'>;

/**
 * Wrapper for triggering `Dialog` with a button
 */
function InteractiveExample(args: InteractiveArgs) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-spacing-size-3 flex justify-center">
      <Button onClick={() => setOpen(true)} rank="primary">
        Open the dialog
      </Button>
      <Dialog
        {...args}
        onCancel={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        open={open}
      />
    </div>
  );
}

/**
 * Opens the dialog from its trigger, for visual regression testing. Only runs in Chromatic, so
 * the Storybook UI never opens a dialog on its own.
 */
const openInChromatic: Story['play'] = async ({ canvasElement }) => {
  if (isChromatic()) {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole('button'));
  }
};

const sharedParameters: Story['parameters'] = {
  layout: 'centered',
  snapshot: {
    skip: true,
  },
};

/**
 * Clicking on a trigger item (in this case `Button`) opens the dialog. Focus starts on the
 * primary button, so Enter takes the default action. The secondary button, ESC, and a click on
 * the overlay all cancel.
 *
 * In Chromatic this snapshots at every available viewport: the dialog fills the viewport at the
 * smallest breakpoint, floats at half the viewport width at tablet widths, and a quarter at
 * desktop widths.
 */
export const Default: Story = {
  parameters: {
    ...sharedParameters,
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.ipadPro,
        chromaticViewports.chromebook,
        chromaticViewports.macbookPro,
      ],
    },
  },
  render: (args) => <InteractiveExample {...args} />,
  play: openInChromatic,
};

/**
 * Use `confirmVariant="critical"` when the default action destroys something or can't be undone.
 */
export const Critical: Story = {
  args: {
    children: 'This removes the file for everyone in your class.',
    confirmLabel: 'Delete file',
    confirmVariant: 'critical',
    title: 'Delete “Unit 3 notes”?',
  },
  parameters: sharedParameters,
  render: Default.render,
  play: openInChromatic,
};

/**
 * The body takes any React node, so it can carry formatted text.
 */
export const FormattedBody: Story = {
  args: {
    children: (
      <>
        <strong>3 students</strong> haven’t submitted yet. Closing the
        assignment marks their work as missing.
      </>
    ),
    confirmLabel: 'Close assignment',
    title: 'Close this assignment?',
  },
  parameters: sharedParameters,
  render: Default.render,
  play: openInChromatic,
};

/**
 * `cancelLabel` relabels the secondary button, for example to translate it.
 */
export const CustomCancelLabel: Story = {
  args: {
    cancelLabel: 'Keep editing',
  },
  parameters: sharedParameters,
  render: Default.render,
  play: openInChromatic,
};

/**
 * Opens the modal, types a note, then tries to close it with the close button, so the snapshot
 * shows the confirming `Dialog` stacked above the modal. Only runs in Chromatic, so the
 * Storybook UI never opens either on its own.
 */
const openNoteAndClose: Story['play'] = async ({ canvasElement }) => {
  if (isChromatic()) {
    const canvas = within(canvasElement);
    await userEvent.click(
      await canvas.findByRole('button', { name: 'Open the modal' }),
    );

    // the modal and dialog render in portals, outside the story's canvas
    const page = within(document.body);
    await userEvent.type(
      await page.findByLabelText('Note'),
      'Follow up with the team',
    );
    await userEvent.click(page.getByRole('button', { name: 'close' }));
    await page.findByRole('alertdialog');
  }
};

/**
 * A `Dialog` in place of `Modal`'s `warnOnClose`. Type in the field, then try to close the modal
 * with the close button, ESC, or a click on the overlay. Closing clears the note, so the modal
 * asks first while there's one to lose; an empty modal closes straight away.
 *
 * `warnOnClose` stays off. The modal's `onClose` decides instead, and the footer's Cancel
 * button goes through the same check. The `Dialog` renders inside `Modal.Body` so it stacks
 * above the modal.
 */
export const ConfirmingModalClose: Story = {
  parameters: sharedParameters,
  render: () => {
    function ConfirmingModalCloseExample() {
      const [modalOpen, setModalOpen] = useState(false);
      const [dialogOpen, setDialogOpen] = useState(false);
      const [draft, setDraft] = useState('');

      const closeModal = () => {
        setDialogOpen(false);
        setModalOpen(false);
        // closing discards the draft, which is what makes the dialog worth showing
        setDraft('');
      };
      // the close button, ESC, overlay clicks, and the footer's Cancel all ask first
      const requestClose = () =>
        draft === '' ? closeModal() : setDialogOpen(true);

      return (
        <div className="p-spacing-size-3 flex justify-center">
          <Button onClick={() => setModalOpen(true)} rank="primary">
            Open the modal
          </Button>
          <Modal onClose={requestClose} open={modalOpen} size="sm">
            <Modal.Header>
              <Modal.Title>Add a note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputField
                label="Note"
                onChange={(event) => setDraft(event.target.value)}
                value={draft}
              />
              <Dialog
                confirmLabel="Discard note"
                confirmVariant="critical"
                onCancel={() => setDialogOpen(false)}
                onConfirm={closeModal}
                open={dialogOpen}
                title="Discard your note?"
              >
                Closing clears the note you started.
              </Dialog>
            </Modal.Body>
            <Modal.Footer>
              <ButtonGroup>
                <Button onClick={closeModal} rank="primary">
                  Save note
                </Button>
                <Button onClick={requestClose} rank="secondary">
                  Cancel
                </Button>
              </ButtonGroup>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
    return <ConfirmingModalCloseExample />;
  },
  play: openNoteAndClose,
};
