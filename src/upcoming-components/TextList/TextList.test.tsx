import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './TextList.stories';

describe('<TextList />', () => {
  generateSnapshots(stories);
});
