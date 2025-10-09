import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import * as stories from './Card.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

mockResizeObserver();

// Pull out the stories that mutate state, to avoid act() warnings
const { RadioCardsSelected, CheckboxCardsSelected, ...rest } = stories;

describe('<Card />', () => {
  generateSnapshots(rest as StoryFile);
});
