import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Counter } from './Counter';
import * as stories from './Counter.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Counter />', () => {
  beforeEach(() => {
    // Add in mocks for the calls that can occur in implementation to suppress logging in tests
    const consoleMock = jest.spyOn(console, 'error');
    const consoleWarnMock = jest.spyOn(console, 'warn');
    consoleMock.mockImplementation();
    consoleWarnMock.mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  generateSnapshots(stories as StoryFile);

  it('formats the count and total as "x / y"', () => {
    render(<Counter count={3} data-testid="counter" total={10} />);

    expect(screen.getByTestId('counter')).toHaveTextContent(/^3 \/ 10$/);
  });

  it('leaves the count in the default treatment when it is within the total', () => {
    render(<Counter count={10} data-testid="counter" total={10} />);

    expect(screen.getByTestId('counter').firstElementChild).not.toHaveClass(
      'counter__count--invalid',
    );
  });

  it('marks the count invalid when it exceeds the total', () => {
    render(<Counter count={11} data-testid="counter" total={10} />);

    expect(screen.getByTestId('counter').firstElementChild).toHaveClass(
      'counter__count--invalid',
    );
  });

  it('formats the count as a whole percentage of the total', () => {
    render(
      <Counter
        count={3}
        data-testid="counter"
        total={10}
        variant="percentage"
      />,
    );

    expect(screen.getByTestId('counter')).toHaveTextContent(/^30%$/);
  });

  it('rounds a percentage that does not divide evenly', () => {
    render(
      <Counter
        count={1}
        data-testid="counter"
        total={3}
        variant="percentage"
      />,
    );

    expect(screen.getByTestId('counter')).toHaveTextContent(/^33%$/);
  });

  it('reports a percentage over 100 when the count exceeds the total', () => {
    render(
      <Counter
        count={12}
        data-testid="counter"
        total={10}
        variant="percentage"
      />,
    );

    const counter = screen.getByTestId('counter');

    expect(counter).toHaveTextContent(/^120%$/);
    expect(counter.firstElementChild).toHaveClass('counter__count--invalid');
  });

  it('reports zero percent rather than a non-finite value against a total of zero', () => {
    render(
      <Counter
        count={3}
        data-testid="counter"
        total={0}
        variant="percentage"
      />,
    );

    expect(screen.getByTestId('counter')).toHaveTextContent(/^0%$/);
  });

  describe('emits messages when misused', () => {
    let consoleErrorMock: jest.SpyInstance, consoleWarnMock: jest.SpyInstance;
    beforeEach(() => {
      consoleWarnMock = jest.spyOn(console, 'warn');
      consoleErrorMock = jest.spyOn(console, 'error');
      consoleWarnMock.mockImplementation();
      consoleErrorMock.mockImplementation();
    });

    it('warns when given a negative value', () => {
      render(<Counter count={3} total={-10} />);

      expect(consoleErrorMock).toHaveBeenCalledTimes(0);
      expect(consoleWarnMock).toHaveBeenCalledWith(
        'Counter values must not be negative (received 3 / -10)',
      );
    });

    it('errors when asked for a percentage of a total of zero', () => {
      render(<Counter count={3} total={0} variant="percentage" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(0);
      expect(consoleErrorMock).toHaveBeenCalledWith(
        'Counter cannot report 3 as a percentage of 0; the percentage variant requires a total greater than zero',
      );
    });

    it('errors when asked for a percentage of a negative total', () => {
      render(<Counter count={3} total={-10} variant="percentage" />);

      expect(consoleErrorMock).toHaveBeenCalledWith(
        'Counter cannot report 3 as a percentage of -10; the percentage variant requires a total greater than zero',
      );
    });

    it('stays quiet about a total of zero in the fraction variant', () => {
      render(<Counter count={3} data-testid="counter" total={0} />);

      expect(screen.getByTestId('counter')).toHaveTextContent(/^3 \/ 0$/);
      expect(consoleErrorMock).toHaveBeenCalledTimes(0);
      expect(consoleWarnMock).toHaveBeenCalledTimes(0);
    });
  });
});
