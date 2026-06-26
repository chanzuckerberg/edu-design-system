import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './ProgressBar.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<ProgressBar />', () => {
  generateSnapshots(stories as StoryFile);

  // TODO(next-major): add in tests for assertions
});
