import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { DataBar } from './DataBar';
import * as stories from './DataBar.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<DataBar />', () => {
  const warnMock = consoleWarnMockHelper();
  generateSnapshots(stories);
  it('should warn if there is no way of providing the Data Bar an accessible name', () => {
    render(
      <DataBar
        max={100}
        segments={[
          { value: 25, text: 'Segment 1' },
          { value: 10, text: 'Segment 2' },
          { value: 15, text: 'Segment 3' },
        ]}
      />,
    );
    expect(warnMock).toHaveBeenCalledTimes(1);
    expect(warnMock).toHaveBeenCalledWith(
      'You must provide an accessible name for the data bar',
    );
  });
  it('should focus with the tab key and the left and right arrow keys', () => {
    render(
      <DataBar
        data-testid="databar-test"
        id="databar"
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
