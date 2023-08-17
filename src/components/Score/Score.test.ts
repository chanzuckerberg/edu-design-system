import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Score.stories';

describe('<Score />', () => {
  generateSnapshots(stories as StoryFile);
});
