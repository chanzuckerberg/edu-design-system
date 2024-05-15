import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';

import * as stories from './ToastNotification.stories';

describe('<ToastNotification /> (v2)', () => {
  generateSnapshots(stories as StoryFile);
});
