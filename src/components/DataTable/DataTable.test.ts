import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './DataTable.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<DataTable />', () => {
  generateSnapshots(stories as StoryFile);
});
