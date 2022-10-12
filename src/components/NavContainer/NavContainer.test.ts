import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './NavContainer.stories';

describe('<NavContainer />', () => {
  generateSnapshots(stories);
});
