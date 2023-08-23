import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './ProgressBar.stories';

describe('<ProgressBar />', () => {
  generateSnapshots(stories as StoryFile);
});
