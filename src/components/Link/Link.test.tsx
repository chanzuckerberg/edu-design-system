import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from './Link';
import * as ButtonStoryFile from './Link.stories';

describe('<Link />', () => {
  generateSnapshots(ButtonStoryFile);

  it('renders the text in the link', () => {
    render(<Link href="/">Click</Link>);

    expect(screen.getByRole('link')).toHaveTextContent('Click');
  });

  it('fires callback on click', () => {
    const onClick = jest.fn();
    render(
      <Link href="/" onClick={onClick}>
        Click
      </Link>,
    );

    userEvent.click(screen.getByRole('link'));
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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const link = screen.getByRole('link');
    expect(link).toHaveFocus();
  });
});
