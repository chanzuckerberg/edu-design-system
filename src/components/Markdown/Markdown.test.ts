import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './Markdown.stories';

import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Markdown />', () => {
  generateSnapshots(stories as StoryFile);
});
