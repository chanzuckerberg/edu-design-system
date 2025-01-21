import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react';
import { render, waitFor } from '@testing-library/react';

import React from 'react';
import { ToastNotification } from './ToastNotification';
import * as stories from './ToastNotification.stories';
import type { StoryFile } from '../../util/utility-types';

const { AutoDismiss } = composeStories(stories);

const { AutoDismiss: skip, ...staticStories } = stories;

describe('<ToastNotification />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  generateSnapshots(staticStories as StoryFile);

  it('triggers the onDissmiss after a delay', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<AutoDismiss />);

    await waitFor(() => expect(consoleSpy).toHaveBeenCalledTimes(1));
  });

  describe('emits messages when misused', () => {
    let consoleErrorMock: jest.SpyInstance;
    beforeEach(() => {
      consoleErrorMock = jest.spyOn(console, 'error');
      consoleErrorMock.mockImplementation();
    });

    it('generates an error when onDissmiss and type=auto are misused', async () => {
      // One must use onDismiss if auto is used
      render(
        <ToastNotification dismissType="auto" timeout={50} title="test" />,
      );

      await waitFor(() => expect(consoleErrorMock).toHaveBeenCalledTimes(1));
    });

    it('[EDS-1453] generates an error message when using the dissmissType prop', async () => {
      render(<ToastNotification dissmissType="manual" title="test" />);

      await waitFor(() => expect(consoleErrorMock).toHaveBeenCalledTimes(1));
    });

    it('[EDS-1453] generates no error when using the correct dismissType prop', async () => {
      render(<ToastNotification dismissType="manual" title="test" />);

      await waitFor(() => expect(consoleErrorMock).toHaveBeenCalledTimes(0));
    });
  });
});
