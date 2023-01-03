import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Skeleton.stories';

describe('<Skeleton />', () => {
  generateSnapshots(stories);
});
