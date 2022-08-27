import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './SearchField.stories';

describe('<SearchField />', () => {
  generateSnapshots(stories);
});
