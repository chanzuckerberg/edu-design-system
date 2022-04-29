import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './DataBar.stories';

describe('<DataBar />', () => {
  generateSnapshots(stories);
});
