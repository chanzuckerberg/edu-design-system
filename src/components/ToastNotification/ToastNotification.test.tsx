import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, waitFor } from '@testing-library/react';

import React from 'react';
import { describe, expect, it, type Mock, vi } from 'vitest';
import { ToastNotification } from './ToastNotification';
import * as stories from './ToastNotification.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { AutoDismiss } = composeStories(stories);

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
