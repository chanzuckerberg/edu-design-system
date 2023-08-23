import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Toggle.stories';

describe('<Toggle />', () => {
  generateSnapshots(stories as StoryFile);
});
