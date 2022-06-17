import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './OverflowList.stories';

describe('<OverflowList />', () => {
  generateSnapshots(stories);
});
