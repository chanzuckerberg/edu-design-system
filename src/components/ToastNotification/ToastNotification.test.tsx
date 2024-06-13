import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories, type StoryFile } from '@storybook/testing-react';
import { render, waitFor } from '@testing-library/react';

import React from 'react';
import * as stories from './ToastNotification.stories';

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
});
