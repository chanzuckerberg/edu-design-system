import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './SearchBar.stories';

describe('<SearchField />', () => {
  generateSnapshots(stories);
});
