import { generateSnapshots } from '@chanzuckerberg/story-utils';
import {
  mockResizeObserver,
  mockIntersectionObserver,
} from 'jsdom-testing-mocks';
import * as stories from './DataTable.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

mockIntersectionObserver();
mockResizeObserver();

describe('<DataTable />', () => {
  generateSnapshots(stories as StoryFile);
});
