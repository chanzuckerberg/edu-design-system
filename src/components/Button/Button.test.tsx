import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './Button';
import * as ButtonStoryFile from './Button.stories';

describe('<Button />', () => {
  generateSnapshots(ButtonStoryFile);

  it('renders the text in the button', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Click');
  });

  it('fires callback on click', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);

    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('renders as a link when provided href', () => {
    render(<Button href="/test-url">test link</Button>);

    expect(screen.getByRole('link')).toBeDefined();
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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
  });
});
