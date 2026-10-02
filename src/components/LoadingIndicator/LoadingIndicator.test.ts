import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './LoadingIndicator.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<LoadingIndicator />', () => {
  generateSnapshots(stories as StoryFile);
});
