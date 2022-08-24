import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Radio.stories';

describe('<Radio />', () => {
  generateSnapshots(stories);
});
