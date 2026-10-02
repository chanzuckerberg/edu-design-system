import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './SelectionChip.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<SelectionChip />', () => {
  generateSnapshots(stories as StoryFile);
});
