import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './InputLabel.stories';

describe('<InputLabel />', () => {
  generateSnapshots(stories as StoryFile);
});
