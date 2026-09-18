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

  /**
   * v19 removed `height` and `overlayEmphasis`. Untyped code never sees the type error that
   * replaced them, and React's own reporting is uneven: it names an unknown camelCase prop
   * but forwards an unknown lowercase one to the DOM without comment. So `Modal` reports the
   * removal itself and keeps the prop off the DOM either way.
   *
   * TODO(next-major): remove, with `assertNoRemovedProp`.
   */
  describe('the removed props', () => {
    // Written the way unmigrated JavaScript would, past the types that reject it.
    const legacy = (propName: string, value: unknown) =>
      ({ [propName]: value }) as Record<string, unknown>;

    it.each([
      ['Modal', 'height', 'auto'],
      ['Modal', 'overlayEmphasis', 'high'],
    ])('reports %s.%s and keeps it off the DOM', (_component, prop, value) => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      // React reports the camelCase prop on its own; that is not what is under test here.
      const error = vi.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <Modal
          aria-label="aria label"
          onClose={() => {}}
          open
          {...legacy(prop, value)}
        >
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>Modal body content.</Modal.Body>
        </Modal>,
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining(`Modal/.Content no longer takes \`${prop}\``),
      );

      const content = screen
        .getByText('Modal body content.')
        .closest('[class*="modal__content"]');
      expect(content?.getAttribute(prop.toLowerCase())).toBeNull();

      warn.mockRestore();
      error.mockRestore();
    });

    it('reports Modal.Body height and keeps it off the DOM', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

      render(
        <Modal aria-label="aria label" onClose={() => {}} open>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body {...legacy('height', 'auto')}>
            Modal body content.
          </Modal.Body>
        </Modal>,
      );

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('Modal.Body no longer takes `height`'),
      );

      const body = screen
        .getByText('Modal body content.')
        .closest('[class*="modal-body"]');
      expect(body?.getAttribute('height')).toBeNull();

      warn.mockRestore();
    });
  });

  it.each(['sm', 'lg', 'full'] as const)(
    'gives the body a scrollable region at size="%s"',
    (size) => {
      render(
        <Modal aria-label="aria label" onClose={() => {}} open size={size}>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>Modal body content.</Modal.Body>
          <Modal.Footer>Modal footer content.</Modal.Footer>
        </Modal>,
      );

      // `ScrollWrapper` leaves the region it scrolls in the tab order, which is how a
      // keyboard user reaches content taller than the modal. Every size gets one now.
      const scrollableRegion = screen
        .getByText('Modal body content.')
        .closest('[tabindex="0"]');
      expect(scrollableRegion).toBeTruthy();
    },
  );
});
