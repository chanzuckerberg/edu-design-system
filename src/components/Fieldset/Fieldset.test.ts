import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './Fieldset.stories';

describe('<Fieldset />', () => {
  generateSnapshots(stories as StoryFile);
});
