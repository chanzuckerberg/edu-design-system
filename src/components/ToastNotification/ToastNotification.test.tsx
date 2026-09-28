import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, waitFor } from '@testing-library/react';

import React from 'react';
import {
  describe,
  beforeEach,
  afterEach,
  expect,
  it,
  type Mock,
  vi,
} from 'vitest';
import { ToastNotification } from './ToastNotification';
import * as stories from './ToastNotification.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { AutoDismiss } = composeStories(stories);

/**
 * A valid color that none of the statuses use, so the assertions cannot pass on a status color by
 * coincidence and the override is what actually paints the icon.
 */
const CUSTOM_ICON_COLOR = 'rebeccapurple';

const STATUSES = ['informational', 'favorable', 'warning', 'critical'] as const;

const { AutoDismiss: skip, ...staticStories } = stories;

describe('<ToastNotification />', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  generateSnapshots(staticStories as StoryFile);

  it('triggers the onDissmiss after a delay', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(<AutoDismiss />);

    await waitFor(() => expect(consoleSpy).toHaveBeenCalledTimes(1));
  });

  describe('the icon custom property', () => {
    it('is left alone when the caller does not set it, so the status color applies', () => {
      const { container } = render(
        <ToastNotification status="critical" title="test" />,
      );

      const toast = container.firstElementChild as HTMLElement;

      expect(toast.style.getPropertyValue('--toast__icon')).toBe('');
    });

    it.each(STATUSES)(
      'takes a caller value over the %s status color',
      (status) => {
        const { container } = render(
          <ToastNotification
            status={status}
            style={{ '--toast__icon': CUSTOM_ICON_COLOR }}
            title="test"
          />,
        );

        const toast = container.firstElementChild as HTMLElement;

        // The status class and the caller's inline value land on the same element, which is what
        // lets the inline value win. This asserts the two coexist; that the cascade resolves in
        // the inline value's favor is covered by the Chromatic snapshots, since jsdom does not
        // apply the stylesheet.
        expect(toast.className).toContain(`toast--status-${status}`);
        expect(toast).toHaveStyle({ '--toast__icon': CUSTOM_ICON_COLOR });
      },
    );

    it('keeps the caller value alongside the other toast custom properties', () => {
      const { container } = render(
        <ToastNotification
          status="critical"
          style={{
            '--toast__bg': 'black',
            '--toast__fg': 'white',
            '--toast__icon': CUSTOM_ICON_COLOR,
          }}
          title="test"
        />,
      );

      expect(container.firstElementChild).toHaveStyle({
        '--toast__bg': 'black',
        '--toast__fg': 'white',
        '--toast__icon': CUSTOM_ICON_COLOR,
      });
    });
  });

  describe('emits messages when misused', () => {
    let consoleErrorMock: Mock;
    beforeEach(() => {
      consoleErrorMock = vi.spyOn(console, 'error');
      consoleErrorMock.mockImplementation(() => {});
    });

    it('generates an error when onDismiss and type=auto are misused', async () => {
      // One must use onDismiss if auto is used
      render(
        <ToastNotification dismissType="auto" timeout={50} title="test" />,
      );

      await waitFor(() => expect(consoleErrorMock).toHaveBeenCalledTimes(1));
    });
  });
});
