import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Icon-v2.stories';

describe('<Icon /> (v2)', () => {
  generateSnapshots(stories as StoryFile);
});
