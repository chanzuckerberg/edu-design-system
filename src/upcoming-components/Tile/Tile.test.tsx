import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Tile.stories';

describe('<Tile />', () => {
  generateSnapshots(stories);
});
