import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Label.stories';

describe('<Label />', () => {
  generateSnapshots(stories as StoryFile);
});
