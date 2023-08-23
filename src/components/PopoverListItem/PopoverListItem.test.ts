import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './PopoverListItem.stories';

describe('<PopoverListItem />', () => {
  generateSnapshots(stories as StoryFile);
});
