import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Counter.stories';

describe('<Counter />', () => {
  generateSnapshots(stories);
});
