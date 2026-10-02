import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './NumberIcon.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<NumberIcon />', () => {
  generateSnapshots(stories as StoryFile);
});
