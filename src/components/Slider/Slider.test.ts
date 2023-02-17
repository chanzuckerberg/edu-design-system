import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Slider.stories';

describe('<Slider />', () => {
  generateSnapshots(stories);
});
