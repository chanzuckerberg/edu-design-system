import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './FileUploadField.stories';

describe('<FileUploadField />', () => {
  generateSnapshots(stories);
});
