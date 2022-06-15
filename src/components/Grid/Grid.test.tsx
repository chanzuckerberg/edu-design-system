import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Grid.stories';

describe('<Grid />', () => {
  generateSnapshots(stories);
});
