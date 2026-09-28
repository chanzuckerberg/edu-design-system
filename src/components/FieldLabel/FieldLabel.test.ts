import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './FieldLabel.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<FieldLabel />', () => {
  generateSnapshots(stories as StoryFile);
});
