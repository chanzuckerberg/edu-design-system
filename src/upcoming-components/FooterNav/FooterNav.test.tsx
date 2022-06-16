import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './FooterNav.stories';

describe('<FooterNav />', () => {
  generateSnapshots(stories);
});
