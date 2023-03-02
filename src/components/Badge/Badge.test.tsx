import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { Badge } from './Badge';
import * as stories from './Badge.stories';

describe('<Badge />', () => {
  generateSnapshots(stories);

  test('throws an error if Badge.Text length is > 3', () => {
    // expect console error from react, suppressed.
    const consoleErrorMock = jest.spyOn(console, 'error');
    consoleErrorMock.mockImplementation();
    expect(() => {
      render(
        <Badge>
          <div className="fpo">Ava</div>
          <Badge.Text>1000</Badge.Text>
        </Badge>,
      );
    }).toThrow(/Max badge text length is 3/);
    consoleErrorMock.mockRestore();
  });
});
