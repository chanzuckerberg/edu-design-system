import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './ButtonGroup.stories';

describe('<ButtonGroup />', () => {
  generateSnapshots(stories as StoryFile);
});
