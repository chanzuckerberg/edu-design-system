import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Dialog } from './Dialog';
import * as stories from './Dialog.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { ConfirmingModalClose, Default } = composeStories(stories);

// Headless UI 2.x has polyfilled `Element.prototype.getAnimations` for tests.
mockAnimationsApi();

const renderDialog = (
  props: Partial<React.ComponentProps<typeof Dialog>> = {},
) => {
  const onCancel = vi.fn();
  const onConfirm = vi.fn();
  render(
    <Dialog
      confirmLabel="Discard changes"
      onCancel={onCancel}
      onConfirm={onConfirm}
      open
      title="Discard your changes?"
      {...props}
    >
      Your edits will be lost.
    </Dialog>,
  );
  return { onCancel, onConfirm };
};

describe('<Dialog />', () => {
  generateSnapshots(stories as StoryFile);

  it('is initially closed', () => {
    render(<Default />);
    expect(screen.queryByRole('alertdialog')).toBeFalsy();
  });

  it('opens from its trigger', async () => {
    const user = userEvent.setup();
    render(<Default />);
    await user.click(
      await screen.findByRole('button', { name: 'Open the dialog' }),
    );
    expect(await screen.findByRole('alertdialog')).toBeInTheDocument();
  });

  it('is named by its title and described by its body', async () => {
    renderDialog();
    const dialog = await screen.findByRole('alertdialog', {
      name: 'Discard your changes?',
    });
    expect(dialog).toHaveAccessibleDescription('Your edits will be lost.');
  });

  it('focuses the primary button when it opens', async () => {
    renderDialog();
    const confirmButton = await screen.findByRole('button', {
      name: 'Discard changes',
    });
    await waitFor(() => expect(confirmButton).toHaveFocus());
  });

  it('calls onConfirm from the primary button', async () => {
    const user = userEvent.setup();
    const { onCancel, onConfirm } = renderDialog();
    await user.click(
      await screen.findByRole('button', { name: 'Discard changes' }),
    );
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onCancel).not.toHaveBeenCalled();
  });

  it('calls onCancel from the secondary button', async () => {
    const user = userEvent.setup();
    const { onCancel, onConfirm } = renderDialog();
    await user.click(await screen.findByRole('button', { name: 'Cancel' }));
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it('calls onCancel on ESC', async () => {
    const user = userEvent.setup();
    const { onCancel } = renderDialog();
    await screen.findByRole('alertdialog');
    await user.keyboard('{Escape}');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('labels the secondary button with cancelLabel', async () => {
    renderDialog({ cancelLabel: 'Keep editing' });
    expect(
      await screen.findByRole('button', { name: 'Keep editing' }),
    ).toBeInTheDocument();
  });

  describe('Enter key', () => {
    it('confirms once when focus is on the primary button', async () => {
      const user = userEvent.setup();
      const { onConfirm } = renderDialog();
      const confirmButton = await screen.findByRole('button', {
        name: 'Discard changes',
      });
      await waitFor(() => expect(confirmButton).toHaveFocus());
      await user.keyboard('{Enter}');
      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('confirms when focus is on an input in the body', async () => {
      const user = userEvent.setup();
      const onConfirm = vi.fn();
      render(
        <Dialog
          confirmLabel="Rename"
          onCancel={() => {}}
          onConfirm={onConfirm}
          open
          title="Rename this file?"
        >
          <input aria-label="File name" />
        </Dialog>,
      );
      await user.click(await screen.findByRole('textbox'));
      await user.keyboard('{Enter}');
      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('leaves Enter to the secondary button when it has focus', async () => {
      const user = userEvent.setup();
      const { onCancel, onConfirm } = renderDialog();
      const cancelButton = await screen.findByRole('button', {
        name: 'Cancel',
      });
      cancelButton.focus();
      await user.keyboard('{Enter}');
      expect(onCancel).toHaveBeenCalledTimes(1);
      expect(onConfirm).not.toHaveBeenCalled();
    });
  });

  describe('confirming before a Modal closes', () => {
    it('closes an untouched modal without asking', async () => {
      const user = userEvent.setup();
      render(<ConfirmingModalClose />);
      await user.click(
        await screen.findByRole('button', { name: 'Open the modal' }),
      );
      await screen.findByRole('dialog');
      await user.keyboard('{Escape}');
      await waitFor(() => {
        expect(screen.queryByRole('dialog')).toBeFalsy();
      });
      expect(screen.queryByRole('alertdialog')).toBeFalsy();
    });

    it('asks before closing a modal with a draft, and keeps it open on cancel', async () => {
      const user = userEvent.setup();
      render(<ConfirmingModalClose />);
      await user.click(
        await screen.findByRole('button', { name: 'Open the modal' }),
      );
      await user.type(await screen.findByLabelText('Note'), 'Half a thought');
      await user.click(screen.getByRole('button', { name: 'close' }));

      // the modal footer has a Cancel too, so look inside the dialog
      await user.click(
        within(await screen.findByRole('alertdialog')).getByRole('button', {
          name: 'Cancel',
        }),
      );
      await waitFor(() => {
        expect(screen.queryByRole('alertdialog')).toBeFalsy();
      });
      expect(screen.getByLabelText('Note')).toHaveValue('Half a thought');
    });

    it('closes the modal once the user confirms', async () => {
      const user = userEvent.setup();
      render(<ConfirmingModalClose />);
      await user.click(
        await screen.findByRole('button', { name: 'Open the modal' }),
      );
      await user.type(await screen.findByLabelText('Note'), 'Half a thought');
      await user.click(screen.getByRole('button', { name: 'close' }));

      await user.click(
        await screen.findByRole('button', { name: 'Discard note' }),
      );
      await waitFor(() => {
        expect(screen.queryByRole('dialog')).toBeFalsy();
      });
    });
  });
});
