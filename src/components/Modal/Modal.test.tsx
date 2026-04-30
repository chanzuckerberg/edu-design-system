import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Modal } from './Modal';
import * as stories from './Modal.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { Default } = composeStories(stories);

// Headless UI 2.x has polyfilled `Element.prototype.getAnimations` for tests.
mockAnimationsApi();

describe('Modal', () => {
  generateSnapshots(stories as StoryFile);
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

  it('does not print an error if modal uses <Modal.Title>', () => {
    const consoleErrorMock = vi.spyOn(console, 'error');
    consoleErrorMock.mockImplementation(() => {});

    render(
      <Modal onClose={() => {}} open>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>,
    );

    expect(consoleErrorMock).toHaveBeenCalledTimes(0);
    consoleErrorMock.mockRestore();
  });

  it('does not print an error if modal uses aria-label', () => {
    const consoleErrorMock = vi.spyOn(console, 'error');
    consoleErrorMock.mockImplementation(() => {});

    render(
      <Modal aria-label="aria label" onClose={() => {}} open>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>,
    );

    expect(consoleErrorMock).toHaveBeenCalledTimes(0);
    consoleErrorMock.mockRestore();
  });

  it('does print an error if modal does not use <Modal.Title> or aria-label', () => {
    const consoleErrorMock = vi.spyOn(console, 'error');
    consoleErrorMock.mockImplementation(() => {});

    render(
      <Modal onClose={() => {}} open>
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>,
    );

    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    consoleErrorMock.mockRestore();
  });

  it('prints a warning when height is used with size="sm"', () => {
    const consoleWarningMock = vi.spyOn(console, 'warn');
    consoleWarningMock.mockImplementation(() => {});

    render(
      <Modal height="dynamic" onClose={() => {}} open size="sm">
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>,
    );

    expect(consoleWarningMock).toHaveBeenCalledTimes(1);
    consoleWarningMock.mockRestore();
  });
});
