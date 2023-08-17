import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './FieldNote.stories';

describe('<FieldNote />', () => {
  generateSnapshots(stories);
});
