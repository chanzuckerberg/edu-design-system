import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './Tag.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Tag />', () => {
  generateSnapshots(stories as StoryFile);
});
