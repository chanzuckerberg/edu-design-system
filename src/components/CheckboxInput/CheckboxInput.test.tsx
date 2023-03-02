import { render, screen } from '@testing-library/react';
import React from 'react';
import { CheckboxInput } from './CheckboxInput';

it('forwards refs', () => {
  const someRef = React.createRef<HTMLInputElement>();
  render(<CheckboxInput id="test" ref={someRef} />);
  expect(someRef.current).toBeInstanceOf(HTMLInputElement);
});

describe('indeterminancy', () => {
  it('is indeterminate when "indeterminate" is true', () => {
    render(<CheckboxInput id="test" indeterminate />);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.indeterminate).toEqual(true);
  });

  it('is not indeterminate when "indeterminate" is false', () => {
    render(<CheckboxInput id="test" indeterminate={false} />);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.indeterminate).toEqual(false);
  });

  it('is not indeterminate when "indeterminate" is not present', () => {
    render(<CheckboxInput id="test" />);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.indeterminate).toEqual(false);
  });
});
