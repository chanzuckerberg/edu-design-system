import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './InlineNotification-v2.stories';

describe('<InlineNotification /> (v2)', () => {
  generateSnapshots(stories as StoryFile);
});
