import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Badge.stories';

describe('<Badge />', () => {
  generateSnapshots(stories);
});
