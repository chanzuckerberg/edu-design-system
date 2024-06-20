import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';

import * as stories from './AppNotification.stories';

describe('<AppNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
