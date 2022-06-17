import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Header.stories';

describe('<Header />', () => {
  generateSnapshots(stories);
});
