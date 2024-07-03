import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react';
import { render, waitFor } from '@testing-library/react';

import React from 'react';
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
});
