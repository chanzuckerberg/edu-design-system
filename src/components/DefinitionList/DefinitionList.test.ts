import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './DefinitionList.stories';

describe('<DefinitionList />', () => {
  generateSnapshots(stories);
});
