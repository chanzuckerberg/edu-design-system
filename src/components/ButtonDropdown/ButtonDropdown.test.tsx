import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ButtonDropdown.stories';

describe('<ButtonDropdown />', () => {
  generateSnapshots(stories);
});
