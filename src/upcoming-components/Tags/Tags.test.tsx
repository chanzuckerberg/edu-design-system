import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Tags.stories';

describe('<Tags />', () => {
  generateSnapshots(stories);
});
