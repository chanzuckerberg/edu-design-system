import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './Button';

test('renders the text in the button', () => {
  render(<Button text="Click" />);

  expect(screen.getByRole('button')).toHaveTextContent('Click');
});

test('fires callback on click', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} text="Click" />);

  userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalled();
});

test('renders as a link when provided href', () => {
  render(<Button href="/test-url" text="test link" />);

  expect(screen.getByRole('link')).toBeDefined();
});
