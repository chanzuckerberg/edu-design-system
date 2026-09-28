import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { describe } from 'vitest';
import * as stories from './FieldNote.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<FieldNote />', () => {
  generateSnapshots(stories as StoryFile);
});
