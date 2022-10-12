import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as FieldNoteStoryFile from './FieldNote.stories';

describe('<FieldNote />', () => {
  generateSnapshots(FieldNoteStoryFile);
});
