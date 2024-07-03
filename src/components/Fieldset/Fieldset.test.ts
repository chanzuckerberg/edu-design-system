import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Fieldset.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Fieldset />', () => {
  generateSnapshots(stories as StoryFile);
});
