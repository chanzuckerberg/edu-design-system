import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DataBar } from './DataBar';
import * as stories from './DataBar.stories';

describe('<DataBar />', () => {
  generateSnapshots(stories);
  it('should focus with the tab key and the left and right arrow keys', () => {
    render(
      <DataBar
        data-testid="databar-test"
        label="databar"
        max={100}
        segments={[
          { value: 25, text: 'Segment 1' },
          { value: 10, text: 'Segment 2' },
          { value: 15, text: 'Segment 3' },
        ]}
      />,
    );
    screen.getByTestId('databar-test').focus();
    userEvent.tab();
    expect(screen.getByLabelText('Segment 1')).toHaveFocus();
    userEvent.keyboard('{arrowright}');
    expect(screen.getByLabelText('Segment 2')).toHaveFocus();
    userEvent.keyboard('{arrowleft}');
    expect(screen.getByLabelText('Segment 1')).toHaveFocus();
  });
});
