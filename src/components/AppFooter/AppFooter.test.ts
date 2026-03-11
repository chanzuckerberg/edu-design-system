import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './AppFooter.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<AppFooter />', () => {
  generateSnapshots(stories as StoryFile);
});
