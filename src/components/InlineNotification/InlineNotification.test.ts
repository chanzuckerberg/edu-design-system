import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './InlineNotification.stories';

describe('<InlineNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
