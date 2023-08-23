import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './LayoutContainer.stories';

describe('<LayoutContainer />', () => {
  generateSnapshots(stories as StoryFile);
});
