import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Textarea.stories';

describe('<Textarea />', () => {
  generateSnapshots(stories);
});
