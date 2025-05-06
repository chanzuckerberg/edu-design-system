import { generateSnapshots, wait } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import React from 'react';
import { Modal } from './Modal';
import * as stories from './Modal.stories';
import '../../../jest/helpers/removeModalTransitionStylesJestSerializer';
import type { StoryFile } from '../../util/utility-types';

const { Default } = composeStories(stories);

// Headless UI 2.x has polyfilled `Element.prototype.getAnimations` for tests.
mockAnimationsApi();

describe('Modal', () => {
  generateSnapshots(stories as StoryFile, {
    getElement: async () => {
      const user = userEvent.setup();
      const nonInteractiveModal = screen.queryByTestId('non-interactive');
      if (nonInteractiveModal) return nonInteractiveModal;

      const openModalButton = await screen.findByRole('button', {
        name: 'Open the modal',
      });
      await user.click(openModalButton);
      const modal = await screen.findByRole('dialog');

      // Give Headless UI's transition/style classes time to settle.
      await wait(50);

      return modal;
    },
  });

  it('is initially closed', () => {
    render(<Default />);
    expect(screen.queryByRole('dialog')).toBeFalsy();
  });

  it('shows the modal when the open modal button is clicked', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const openModalButton = await screen.findByRole('button', {
      name: 'Open the modal',
    });
    await user.click(openModalButton);
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeTruthy();
  });

  it('closes the modal on close button click', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const openModalButton = await screen.findByRole('button', {
      name: 'Open the modal',
    });
    await user.click(openModalButton);
    const closeButton = await screen.findByRole('button', {
      name: 'close',
    });
    await user.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeFalsy();
    });
  });

  it('closes the modal on ESC key press', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const openModalButton = await screen.findByRole('button', {
      name: 'Open the modal',
    });
    await user.click(openModalButton);
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeFalsy();
    });
  });

  it('does not throw an error if modal uses <Modal.Title>', () => {
    const modalWithTitle = (
      <Modal onClose={() => {}} open>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithTitle);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('does not throw an error if modal uses aria-label', () => {
    const modalWithAriaLabel = (
      <Modal aria-label="aria label" onClose={() => {}} open>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithAriaLabel);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('does throw an error if modal does not use <Modal.Title> or aria-label', () => {
    const modalWithoutTitleOrAriaLabel = (
      <Modal onClose={() => {}} open>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithoutTitleOrAriaLabel);
    };

    // expect console error from react, suppressed.
    const consoleErrorMock = jest.spyOn(console, 'error');
    consoleErrorMock.mockImplementation();
    expect(renderMethod).toThrow(Error);
    consoleErrorMock.mockRestore();
  });

  it('prints a warning when height is used with size="sm"', () => {
    const modalWithoutTitleOrAriaLabel = (
      <Modal height="auto" onClose={() => {}} open size="sm">
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithoutTitleOrAriaLabel);
    };

    // expect console error from react, suppressed.
    const consoleWarningMock = jest.spyOn(console, 'warn');
    consoleWarningMock.mockImplementation();
    expect(renderMethod).not.toThrow();
    expect(consoleWarningMock).toHaveBeenCalledTimes(1);
    consoleWarningMock.mockRestore();
  });
});
