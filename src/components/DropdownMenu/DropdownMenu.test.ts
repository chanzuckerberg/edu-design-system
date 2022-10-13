import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './DropdownMenu.stories';

describe('<DropdownMenu />', () => {
  generateSnapshots(stories);
});
