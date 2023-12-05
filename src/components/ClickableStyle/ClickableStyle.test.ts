import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';

import * as stories from './ClickableStyle.stories';

describe('<Button />', () => {
  generateSnapshots(stories as StoryFile);
});
