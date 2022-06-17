import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Feature.stories';

describe('<Feature />', () => {
  generateSnapshots(stories);
});
