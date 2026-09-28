import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './Icon.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Icon />', () => {
  generateSnapshots(stories as StoryFile);
});
