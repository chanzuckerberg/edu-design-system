import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Toggle.stories';

describe('<Toggle />', () => {
  generateSnapshots(stories);
});
