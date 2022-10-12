import {generateSnapshots} from '@chanzuckerberg/story-utils';
import {screen} from '@testing-library/react';
import * as stories from './Drawer.stories';

describe('<Drawer />', () => {
  generateSnapshots(stories, {
    getElement: async () => {
      const filters = await screen.findByRole('dialog');
      return filters.parentElement; // eslint-disable-line testing-library/no-node-access
    },
  });
});
