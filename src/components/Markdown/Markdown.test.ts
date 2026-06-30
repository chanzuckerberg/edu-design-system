import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Markdown.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Markdown />', () => {
  generateSnapshots(stories as StoryFile);
});
