import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Layout.stories';

describe('<Layout />', () => {
  generateSnapshots(stories as StoryFile);
});
