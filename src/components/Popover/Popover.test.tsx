import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Popover.stories';

describe('<Popover />', () => {
  generateSnapshots(stories);
});
