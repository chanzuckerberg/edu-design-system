import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ScrollWrapper.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

// Pull out the stories that mutate state, to avoid act() warnings
const { DefaultScrolled, ContainScrolled, ...rest } = stories;

describe('<ScrollWrapper />', () => {
  generateSnapshots(rest as StoryFile);
});
