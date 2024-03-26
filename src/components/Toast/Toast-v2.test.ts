import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';

import * as stories from './Toast.stories';

describe('<Toast /> (v2)', () => {
  generateSnapshots(stories as StoryFile);
});
