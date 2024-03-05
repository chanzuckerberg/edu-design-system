import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './PopoverContainer.stories';

describe('<PopoverContainer />', () => {
  generateSnapshots(stories as StoryFile);
});
