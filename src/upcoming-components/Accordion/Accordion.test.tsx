import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Accordion.stories';

describe('<Accordion />', () => {
  generateSnapshots(stories);
});
