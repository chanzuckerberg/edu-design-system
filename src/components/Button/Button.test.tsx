import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './Button';
import * as stories from './Button.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Button />', () => {
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
});
