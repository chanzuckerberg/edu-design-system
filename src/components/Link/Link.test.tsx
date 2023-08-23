import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from './Link';
import * as stories from './Link.stories';

describe('<Link />', () => {
  generateSnapshots(stories as StoryFile);

  it('renders the text in the link', () => {
    render(<Link href="/">Click</Link>);

    expect(screen.getByRole('link')).toHaveTextContent('Click');
  });

  it('fires callback on click', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <Link href="/" onClick={onClick}>
        Click
      </Link>,
    );

    await user.click(screen.getByRole('link'));
    expect(onClick).toHaveBeenCalled();
  });

  it('passes test ids down properly', () => {
    render(
      <Link data-testid="example-test-id" href="/">
        Click
      </Link>,
    );
    expect(screen.getByTestId('example-test-id')).toMatchSnapshot();
  });

  it('passes class names down properly', () => {
    render(
      <Link
        className="exampleClassName"
        data-testid="example-class-name"
        href="/"
      >
        Click
      </Link>,
    );
    expect(screen.getByTestId('example-class-name')).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <Link href="/" ref={ref}>
        Click
      </Link>,
    );

    ref.current!.focus();

    const link = screen.getByRole('link');
    expect(link).toHaveFocus();
  });
});
