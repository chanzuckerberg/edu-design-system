import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './TabGroup.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import TabGroup from '../TabGroup';

const { Default } = composeStories(stories);

describe('<TabGroup />', () => {
  generateSnapshots(stories as StoryFile);

  it('should focus and select with keyboard controls', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const firstTab = screen.getByRole('tab', { name: 'Tab Title 1' });
    const secondTab = screen.getByRole('tab', { name: 'Tab Title 2' });
    firstTab.focus();

    await user.keyboard('{arrowright}');
    expect(secondTab).toHaveFocus();

    await user.keyboard('{arrowleft}');
    expect(firstTab).toHaveFocus();

    await user.keyboard('{arrowdown}');
    expect(secondTab).toHaveFocus();

    await user.keyboard('{arrowup}');
    expect(firstTab).toHaveFocus();

    await user.keyboard('{arrowdown}');
    await user.keyboard('{arrowright}');
    await user.keyboard('{enter}');
    expect(screen.getByRole('tab', { name: 'Tab Title 3' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('changes the active tab when activeIndex changes', () => {
    const { rerender } = render(<Default activeIndex={0} />);
    expect(screen.getByRole('heading', { name: 'Tab 1' })).toBeInTheDocument();

    rerender(<Default activeIndex={1} />);
    expect(screen.getByRole('heading', { name: 'Tab 2' })).toBeInTheDocument();
  });

  it('does not include invalid characters in tab ids', () => {
    render(
      <Default id="foo">
        <TabGroup.Tab data-testid="tab-1" title="Tab Title 1">
          Tab numero uno
        </TabGroup.Tab>
      </Default>,
    );

    expect(screen.getByTestId('tab-1')).toHaveAttribute(
      'aria-labelledby',
      'foo-Tab-Title-1',
    );
  });

  const renderTabs = (
    props: Partial<React.ComponentProps<typeof TabGroup>> = {},
  ) =>
    render(
      <TabGroup {...props}>
        <TabGroup.Tab title="First">First panel</TabGroup.Tab>
        <TabGroup.Tab title="Second">Second panel</TabGroup.Tab>
        <TabGroup.Tab title="Third">Third panel</TabGroup.Tab>
      </TabGroup>,
    );

  /**
   * happy-dom does no layout, so fake the header's scroll metrics and fire a scroll event.
   */
  const scrollHeader = (metrics: {
    scrollLeft: number;
    clientWidth: number;
    scrollWidth: number;
  }) => {
    const header = screen.getByRole('tablist').parentElement as HTMLDivElement;
    Object.entries(metrics).forEach(([key, value]) => {
      Object.defineProperty(header, key, { configurable: true, value });
    });
    fireEvent.scroll(header);
    return header;
  };

  it('calls onChange with the index of the clicked tab', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderTabs({ onChange });

    await user.click(screen.getByRole('tab', { name: 'Third' }));
    await user.click(screen.getByRole('tab', { name: 'First' }));

    expect(onChange.mock.calls).toEqual([[2], [0]]);
    expect(screen.getByText('First panel')).toBeInTheDocument();
  });

  it('wraps keyboard focus from the last tab to the first', async () => {
    const user = userEvent.setup();
    renderTabs({ activeIndex: 2 });
    screen.getByRole('tab', { name: 'Third' }).focus();

    await user.keyboard('{arrowright}');

    expect(screen.getByRole('tab', { name: 'First' })).toHaveFocus();
  });

  it('ignores key presses when no tab has focus', () => {
    renderTabs();
    const firstTab = screen.getByRole('tab', { name: 'First' });

    fireEvent.keyDown(firstTab, { key: 'ArrowRight' });

    expect(document.body).toHaveFocus();
  });

  it('scrolls the tab after the newly selected one into view when the header overflows', async () => {
    const user = userEvent.setup();
    const scrollIntoView = vi
      .spyOn(Element.prototype, 'scrollIntoView')
      .mockImplementation(() => {});
    renderTabs();

    scrollHeader({ scrollLeft: 50, clientWidth: 100, scrollWidth: 300 });
    await user.click(screen.getByRole('tab', { name: 'Second' }));

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    expect(scrollIntoView.mock.contexts[0]).toBe(
      screen.getByRole('tab', { name: 'Third' }),
    );

    // moving left brings the tab before the selected one into view
    await user.click(screen.getByRole('tab', { name: 'First' }));
    expect(scrollIntoView.mock.contexts[1]).toBe(
      screen.getByRole('tab', { name: 'First' }),
    );
  });

  it('does not scroll tabs into view when the header fits', async () => {
    const user = userEvent.setup();
    const scrollIntoView = vi
      .spyOn(Element.prototype, 'scrollIntoView')
      .mockImplementation(() => {});
    renderTabs();

    scrollHeader({ scrollLeft: 0, clientWidth: 300, scrollWidth: 300 });
    await user.click(screen.getByRole('tab', { name: 'Second' }));

    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it('marks the header as scrollable to the left only when scrolled to the end', () => {
    renderTabs();

    const header = scrollHeader({
      scrollLeft: 200,
      clientWidth: 100,
      scrollWidth: 300,
    });

    expect(header.className).toMatch(/scrollable-left/);
    expect(header.className).not.toMatch(/scrollable-right/);
  });

  it('stops measuring the header after unmount', () => {
    vi.useFakeTimers();
    try {
      const { unmount } = renderTabs();

      // the trailing debounced call lands after unmount, when the header is gone
      act(() => {
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('resize'));
      });
      unmount();

      expect(() => vi.advanceTimersByTime(200)).not.toThrow();
    } finally {
      vi.useRealTimers();
    }
  });

  it('renders custom tab buttons with the active state', () => {
    render(
      <TabGroup>
        <TabGroup.Tab title="First">
          <TabGroup.Tab.Button>
            {({ isActive, title }) => (
              <>{`${title} ${isActive ? '(on)' : '(off)'}`}</>
            )}
          </TabGroup.Tab.Button>
          First panel
        </TabGroup.Tab>
        <TabGroup.Tab title="Second">
          <TabGroup.Tab.Button>
            {({ isActive, title }) => (
              <>{`${title} ${isActive ? '(on)' : '(off)'}`}</>
            )}
          </TabGroup.Tab.Button>
          Second panel
        </TabGroup.Tab>
      </TabGroup>,
    );

    expect(screen.getByRole('tab', { name: 'First (on)' })).toBeInTheDocument();
    expect(
      screen.getByRole('tab', { name: 'Second (off)' }),
    ).toBeInTheDocument();
  });

  it('renders nothing meaningful when Tab.Button is used on its own', () => {
    const { container } = render(
      <TabGroup.Tab.Button>{() => <>unused</>}</TabGroup.Tab.Button>,
    );

    expect(container.textContent).toBe('');
  });
});
