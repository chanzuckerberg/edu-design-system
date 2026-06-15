import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './CodeBlock.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<CodeBlock />', () => {
  generateSnapshots(stories as StoryFile);
});
