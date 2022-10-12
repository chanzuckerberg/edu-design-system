import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Hr.stories';

describe('<Hr />', () => {
  generateSnapshots(stories);
});
