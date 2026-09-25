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
          if (this.className.includes('modal__content')) return 300;
          if (this.className.includes('modal-header')) return 60;
          if (this.className.includes('modal-footer')) return 80;
          return 0;
        },
      );
      vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(
        function (this: HTMLElement) {
          // a 1px border top and bottom
          if (this.className.includes('modal__content')) return 298;
          if (this.className.includes('scroll-wrapper__inner')) return 100;
          return 0;
        },
      );
      vi.spyOn(
        HTMLElement.prototype,
        'getBoundingClientRect',
      ).mockImplementation(function (this: HTMLElement) {
        // the first child starts at 0 and the last one ends at `bodyContentHeight`;
        // a child added after opening ends 150px further down
        const bottom = {
          last: bodyContentHeight,
          added: bodyContentHeight + 150,
        }[this.dataset.testid ?? ''];
        return { top: 0, bottom: bottom ?? 0 } as DOMRect;
      });
      // hidden children render no boxes
      vi.spyOn(HTMLElement.prototype, 'getClientRects').mockImplementation(
        function (this: HTMLElement) {
          return (this.hidden ? [] : [{}]) as unknown as DOMRectList;
        },
      );
    });

    afterEach(() => {
      document.documentElement.style.removeProperty('--eds-spacing-size-12');
      vi.unstubAllGlobals();
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

    it('keeps an lg modal full-bleed below the sm breakpoint', () => {
      // only the modal's sm query; Headless UI runs its own through matchMedia too
      const matchMedia = window.matchMedia.bind(window);
      vi.spyOn(window, 'matchMedia').mockImplementation((query) =>
        query === '(min-width: 600px)'
          ? ({ ...matchMedia(query), matches: false } as MediaQueryList)
          : matchMedia(query),
      );
      bodyContentHeight = 100;
      renderModal();

      expect(getContent().style.maxHeight).toBe('');
    });

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

    it('re-fits when the body content resizes', () => {
      const callbacks: ResizeObserverCallback[] = [];
      vi.stubGlobal(
        'ResizeObserver',
        class {
          constructor(callback: ResizeObserverCallback) {
            callbacks.push(callback);
          }
          observe() {}
          disconnect() {}
        },
      );
      bodyContentHeight = 100;
      renderModal();
      expect(getContent().style.maxHeight).toBe('304px');

      // content that grows after opening, such as an image loading in
      bodyContentHeight = 200;
      act(() => {
        callbacks.forEach((callback) => callback([], {} as ResizeObserver));
      });

      expect(getContent().style.maxHeight).toBe('404px');
    });

    it('re-fits when a body child is added after opening', async () => {
      bodyContentHeight = 100;
      renderModal();
      expect(getContent().style.maxHeight).toBe('304px');

      // a stateful child rendering a new sibling
      const added = document.createElement('p');
      added.dataset.testid = 'added';
      added.style.margin = '0';
      screen.getByTestId('last').after(added);

      // 200px around the scroll area + 250px of body content + 4px
      await waitFor(() => {
        expect(getContent().style.maxHeight).toBe('454px');
      });
    });

    it('re-fits when a body child only changes its margins', async () => {
      bodyContentHeight = 100;
      renderModal();
      expect(getContent().style.maxHeight).toBe('304px');

      // a stateful child toggling a margin, which resizes nothing
      screen.getByTestId('first').style.marginTop = '20px';

      // 200px around the scroll area + 100px of body content + 20px of margin + 4px
      await waitFor(() => {
        expect(getContent().style.maxHeight).toBe('324px');
      });
    });

    it('fits an lg modal without a body to its header and footer', () => {
      render(
        <Modal aria-label="aria label" onClose={() => {}} open>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Footer>Modal footer content.</Modal.Footer>
        </Modal>,
      );

      const content = screen
        .getByText('Modal Title')
        .closest<HTMLElement>('[class*="modal__content"]')!;
      // 60px header + 80px footer + 2px border + 4px
      expect(content.style.maxHeight).toBe('146px');
    });

    it('skips a hidden child at the end of the body', () => {
      bodyContentHeight = 100;
      render(
        <Modal aria-label="aria label" onClose={() => {}} open>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            <p data-testid="first" style={{ margin: 0 }}>
              First
            </p>
            <p data-testid="last" style={{ margin: 0 }}>
              Last
            </p>
            <p hidden>Hidden</p>
          </Modal.Body>
        </Modal>,
      );

      // measured to the last visible child, not the hidden one's empty box
      expect(getContent().style.maxHeight).toBe('304px');
    });

    it('stops observing body children once they are removed', async () => {
      const observed = new Set<Element>();
      vi.stubGlobal(
        'ResizeObserver',
        class {
          observe(el: Element) {
            observed.add(el);
          }
          disconnect() {
            observed.clear();
          }
        },
      );
      bodyContentHeight = 100;
      renderModal();
      const last = screen.getByTestId('last');
      expect(observed.has(last)).toBe(true);

      last.remove();

      await waitFor(() => {
        expect(observed.has(last)).toBe(false);
      });
    });

    it('still fits on open without ResizeObserver', () => {
      vi.stubGlobal('ResizeObserver', undefined);
      bodyContentHeight = 100;
      renderModal();

      expect(getContent().style.maxHeight).toBe('304px');
    });

    it('measures a plain-text body, and re-fits when the text changes', async () => {
      // one 40px line for short text, two for long
      vi.spyOn(Range.prototype, 'getBoundingClientRect').mockImplementation(
        function (this: Range) {
          return {
            height: this.toString().length > 20 ? 80 : 40,
          } as DOMRect;
        },
      );
      render(
        <Modal aria-label="aria label" onClose={() => {}} open>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>Plain text body.</Modal.Body>
        </Modal>,
      );

      const scroller = screen.getByText('Plain text body.');
      const content = scroller.closest<HTMLElement>(
        '[class*="modal__content"]',
      )!;
      // 200px around the scroll area + 40px of text + 4px
      expect(content.style.maxHeight).toBe('244px');

      // how React updates text: in place, on the existing text node
      (scroller.firstChild as Text).data =
        'Plain text body, now long enough to wrap.';

      await waitFor(() => {
        expect(content.style.maxHeight).toBe('284px');
      });
    });
  });
});
