import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './Card.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Card />', () => {
  generateSnapshots(stories as StoryFile);
});
