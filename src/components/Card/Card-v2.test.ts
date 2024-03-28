import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';

import * as stories from './Card-v2.stories';

describe('<Card /> (v2)', () => {
  generateSnapshots(stories as StoryFile);
});
