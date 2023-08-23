import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './SearchBar.stories';

describe('<SearchField />', () => {
  generateSnapshots(stories as StoryFile);
});
