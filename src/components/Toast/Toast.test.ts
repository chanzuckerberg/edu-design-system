import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Toast.stories';

describe('<Toast />', () => {
  generateSnapshots(stories as StoryFile);
});
