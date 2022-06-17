import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Footer.stories';

describe('<Footer />', () => {
  generateSnapshots(stories);
});
