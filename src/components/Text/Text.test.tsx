import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Text from './Text';
import * as TextStoryFile from './Text.stories';

describe('<Text />', () => {
  generateSnapshots(TextStoryFile);

  it('should add the passthrough className', () => {
    render(
      <Text size="body" className="passthrough">
        Some Text
      </Text>,
    );
    expect(screen.getByText('Some Text').classList).toContain('passthrough');
  });
});
