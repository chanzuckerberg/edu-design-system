import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Table.stories';

describe('<Table />', () => {
  generateSnapshots(stories as StoryFile);
});
