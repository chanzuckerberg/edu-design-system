import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './NumberIcon.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<NumberIcon />', () => {
  consoleWarnMockHelper();
  generateSnapshots(stories);
});
