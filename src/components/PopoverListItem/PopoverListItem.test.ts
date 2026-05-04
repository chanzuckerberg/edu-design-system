import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './PopoverListItem.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<PopoverListItem />', () => {
  generateSnapshots(stories as StoryFile);
});
