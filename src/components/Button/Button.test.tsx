import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './Button';
import * as stories from './Button.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Button />', () => {
  beforeEach(() => {
    const consoleMock = jest.spyOn(console, 'error');
    const consoleWarnMock = jest.spyOn(console, 'warn');
    consoleMock.mockImplementation();
    consoleWarnMock.mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  generateSnapshots(stories as StoryFile);

  it('renders the text in the button', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Click');
  });

  it('fires callback on click', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('passes test ids down properly', () => {
    render(<Button data-testid="example-test-id">Click</Button>);
    expect(screen.getByTestId('example-test-id')).toMatchSnapshot();
  });

  it('passes class names down properly', () => {
    render(
      <Button className="exampleClassName" data-testid="example-class-name">
        Click
      </Button>,
    );
    expect(screen.getByTestId('example-class-name')).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click</Button>);

    ref.current!.focus();

    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
  });

  describe('emits warnings when misused', () => {
    it('errors engineers when disable is used', () => {
      const consoleMock = jest.spyOn(console, 'error');
      consoleMock.mockImplementation();
      render(<Button disabled>Click</Button>);

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });

    it('warns when icon-only Button instances contain children', () => {
      const consoleMock = jest.spyOn(console, 'warn');
      consoleMock.mockImplementation();
      render(
        <Button icon="add" iconLayout="icon-only">
          Click
        </Button>,
      );

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });
  });
});
