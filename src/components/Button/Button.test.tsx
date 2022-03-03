import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders the text in the button', () => {
  render(<Button text="Click" />);

  expect(screen.getByRole('button')).toHaveTextContent('Click');
});

test('fires callback on click', () => {
  const onClick = jest.fn();
  render(<Button text="Click" onClick={onClick} />);

  userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalled();
});

test('renders as a link when provided href', () => {
  render(<Button text="test link" href="/test-url" />);

  expect(screen.getByRole('link')).toBeDefined();
});
