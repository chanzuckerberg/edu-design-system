import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Card.stories';

describe('<Card />', () => {
  generateSnapshots(stories as StoryFile);
});
