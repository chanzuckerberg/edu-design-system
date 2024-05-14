import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './ButtonGroup-v2.stories';

describe('<ButtonGroup /> (v2)', () => {
  generateSnapshots(stories as StoryFile);
});
