import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import * as stories from './InputField.stories';

describe('<InputField />', () => {
  generateSnapshots(stories as StoryFile);
});
