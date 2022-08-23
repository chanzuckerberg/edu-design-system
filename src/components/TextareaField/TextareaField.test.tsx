import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './TextareaField.stories';

describe('<TextareaField />', () => {
  generateSnapshots(stories);
});
