import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { Badge } from './Badge';
import * as stories from './Badge.stories';

describe('<Badge />', () => {
  generateSnapshots(stories);

  it('throws an error if Badge.Text length is > 3', () => {
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

  it('throws an error if name and icon are both missing', () => {
    // expect console error from react, suppressed.
    const consoleErrorMock = jest.spyOn(console, 'error');
    consoleErrorMock.mockImplementation();
    expect(() => {
      render(
        <Badge>
          <div className="fpo">Ava</div>
          {/* @ts-expect-error 'icon` is required; testing exception */}
          <Badge.Icon />
        </Badge>,
      );
    }).toThrow(/Icon must be passed to the Badge sub-component/);
    consoleErrorMock.mockRestore();
  });
});
