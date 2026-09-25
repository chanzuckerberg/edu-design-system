import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
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

  it('does print an error if the header holds only childless elements', () => {
    const consoleErrorMock = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <Modal onClose={() => {}} open>
        <Modal.Header>
          <hr />
        </Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
      </Modal>,
    );

    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    consoleErrorMock.mockRestore();
  });

  describe('direct children', () => {
    it('does not print an error for sections, fragments, and empty children', () => {
      const consoleErrorMock = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      const showFooter = false;

      render(
        <Modal aria-label="aria label" onClose={() => {}} open>
          <>
            <Modal.Header>Modal Title</Modal.Header>
            <Modal.Body>Modal body content.</Modal.Body>
          </>
          {null}
          {showFooter && <Modal.Footer>Modal footer content.</Modal.Footer>}
        </Modal>,
      );

      expect(consoleErrorMock).not.toHaveBeenCalled();
      consoleErrorMock.mockRestore();
    });

    it.each([
      ['an element', <div key="stray">Stray content</div>],
      ['text', 'Stray content'],
      [
        'an element inside a fragment',
        <React.Fragment key="stray">
          <p>Stray content</p>
        </React.Fragment>,
      ],
    ])('prints an error for %s', (_description, stray) => {
      const consoleErrorMock = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(
        <Modal aria-label="aria label" onClose={() => {}} open>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>Modal body content.</Modal.Body>
          {stray}
        </Modal>,
      );

      expect(consoleErrorMock).toHaveBeenCalledWith(
        expect.stringContaining(
          'Modal only takes Modal.Header, Modal.Body, and Modal.Footer',
        ),
      );
      consoleErrorMock.mockRestore();
    });

    it('prints an error for Modal.Content used on its own', () => {
      const consoleErrorMock = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(
        <Modal.Content onClose={() => {}} open>
          <Modal.Body>Modal body content.</Modal.Body>
          <div>Stray content</div>
        </Modal.Content>,
      );

      expect(consoleErrorMock).toHaveBeenCalledWith(
        expect.stringContaining(
          'Modal only takes Modal.Header, Modal.Body, and Modal.Footer',
        ),
      );
      consoleErrorMock.mockRestore();
    });
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

  /**
   * An lg modal shrinks to its content when that content is shorter than the lg max height
   * (`100vh - spacing-size-12`). The test DOM has no layout, so these tests stand in for it:
   * the modal is 300px with a 100px scroll area (200px of header, footer, and border), the
   * window is 900px, and spacing-size-12 is 48px, which puts the lg max height at 852px.
   */
  describe('fitting to its content', () => {
    let bodyContentHeight = 0;

    beforeEach(() => {
      document.documentElement.style.setProperty('--eds-spacing-size-12', '48');
      vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(900);
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(
        function (this: HTMLElement) {
          return this.className.includes('modal__content') ? 300 : 0;
        },
      );
      vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(
        function (this: HTMLElement) {
          return this.className.includes('scroll-wrapper__inner') ? 100 : 0;
        },
      );
      vi.spyOn(
        HTMLElement.prototype,
        'getBoundingClientRect',
      ).mockImplementation(function (this: HTMLElement) {
        // the first child starts at 0 and the last one ends at `bodyContentHeight`
        return (
          this.dataset.testid === 'last'
            ? { top: 0, bottom: bodyContentHeight }
            : { top: 0, bottom: 0 }
        ) as DOMRect;
      });
    });

    afterEach(() => {
      document.documentElement.style.removeProperty('--eds-spacing-size-12');
    });

    const renderModal = (size?: 'sm' | 'lg' | 'full') =>
      render(
        <Modal aria-label="aria label" onClose={() => {}} open size={size}>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            <p data-testid="first" style={{ margin: 0 }}>
              First
            </p>
            <p data-testid="last" style={{ margin: 0 }}>
              Last
            </p>
          </Modal.Body>
          <Modal.Footer>Modal footer content.</Modal.Footer>
        </Modal>,
      );

    const getContent = () =>
      screen
        .getByTestId('first')
        .closest<HTMLElement>('[class*="modal__content"]')!;

    it('caps an lg modal at its content height, plus 4px, when that is shorter', () => {
      bodyContentHeight = 100;
      renderModal();

      // 200px around the scroll area + 100px of body content + 4px
      expect(getContent().style.maxHeight).toBe('304px');
    });

    it('leaves the max height to the stylesheet when the content is taller', () => {
      bodyContentHeight = 1000;
      renderModal();

      expect(getContent().style.maxHeight).toBe('');
    });

    it.each(['sm', 'full'] as const)(
      'leaves a size="%s" modal alone',
      (size) => {
        bodyContentHeight = 100;
        renderModal(size);

        expect(getContent().style.maxHeight).toBe('');
      },
    );

    it('re-fits when the window resizes', () => {
      bodyContentHeight = 100;
      renderModal();
      expect(getContent().style.maxHeight).toBe('304px');

      // a window short enough that the content no longer fits
      vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(300);
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      expect(getContent().style.maxHeight).toBe('');
    });
  });
});
