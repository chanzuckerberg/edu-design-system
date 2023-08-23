import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './DragDrop.stories';

describe('<DragDrop />', () => {
  generateSnapshots(stories as StoryFile);
});
