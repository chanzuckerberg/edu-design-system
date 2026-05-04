import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './ButtonGroup.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<ButtonGroup />', () => {
  generateSnapshots(stories as StoryFile);
});
