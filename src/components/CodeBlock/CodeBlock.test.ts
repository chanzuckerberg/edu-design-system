import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './CodeBlock.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<CodeBlock />', () => {
  generateSnapshots(stories as StoryFile);

  // TODO(next-major): add in vite tests to render the button, stub out the pastboard calls, and test copy content
});
