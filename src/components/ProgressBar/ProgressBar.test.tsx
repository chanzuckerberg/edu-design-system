import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ProgressBar.stories';

describe('<ProgressBar />', () => {
  generateSnapshots(stories);
});
