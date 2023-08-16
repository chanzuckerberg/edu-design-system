import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './NumberIcon.stories';

describe('<NumberIcon />', () => {
  generateSnapshots(stories as StoryFile);
});
