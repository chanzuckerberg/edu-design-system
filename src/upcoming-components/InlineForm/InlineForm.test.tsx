import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './InlineForm.stories';

describe('<InlineForm />', () => {
  generateSnapshots(stories);
});
