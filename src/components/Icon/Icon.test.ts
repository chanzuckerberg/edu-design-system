import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Icon.stories';

describe('<Icon />', () => {
  generateSnapshots(stories as StoryFile);
});
