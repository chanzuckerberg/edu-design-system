import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './StackedBlock.stories';

describe('<StackedBlock />', () => {
  generateSnapshots(stories);
});
