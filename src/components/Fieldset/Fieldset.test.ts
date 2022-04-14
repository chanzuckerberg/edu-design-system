import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as FieldsetStoryFile from './Fieldset.stories';

describe('<Fieldset />', () => {
  generateSnapshots(FieldsetStoryFile);
});
