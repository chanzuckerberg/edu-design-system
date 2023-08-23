import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Tag.stories';

describe('<Tag />', () => {
  generateSnapshots(stories);
});
