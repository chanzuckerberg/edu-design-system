import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import * as stories from './Card.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

mockResizeObserver();

describe('<Card />', () => {
  generateSnapshots(stories as StoryFile);
});
