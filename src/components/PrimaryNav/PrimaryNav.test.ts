import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './PrimaryNav.stories';

describe('<PrimaryNav />', () => {
  generateSnapshots(stories);
});
