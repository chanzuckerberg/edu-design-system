import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';

import * as stories from './InputChip.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<InputChip />', () => {
  generateSnapshots(stories as StoryFile);
});
