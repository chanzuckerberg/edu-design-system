import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from './Link';
import * as stories from './Link.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Link />', () => {
  beforeEach(() => {
    const consoleMock = jest.spyOn(console, 'warn');
    consoleMock.mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

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

  describe('emits warnings when misused', () => {
    it('warns when inline links are using emphasis=low', () => {
      const consoleMock = jest.spyOn(console, 'warn');
      consoleMock.mockImplementation();
      render(
        <Link context="inline" emphasis="low">
          Click
        </Link>,
      );

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });

    it('warns when inline links have icons specified', () => {
      const consoleMock = jest.spyOn(console, 'warn');
      consoleMock.mockImplementation();
      render(
        <Link context="inline" icon="open-in-new">
          Click
        </Link>,
      );

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });

    it('warns when chevron-right is not used in low emphasis mode', () => {
      const consoleMock = jest.spyOn(console, 'warn');
      consoleMock.mockImplementation();
      render(
        <Link emphasis="high" icon="chevron-right">
          Click
        </Link>,
      );

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });

    it('warns when size is used with context standalone', () => {
      const consoleMock = jest.spyOn(console, 'warn');
      consoleMock.mockImplementation();
      render(
        <Link context="inline" size="lg">
          Click
        </Link>,
      );

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });
  });
});
