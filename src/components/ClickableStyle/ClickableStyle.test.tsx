import { render } from '@testing-library/react';
import React from 'react';
import { ClickableStyle } from './ClickableStyle';

describe('<ClickableStyle />', () => {
  test('throws an error for primary neutral combo', () => {
    expect(() => {
      render(<ClickableStyle status="neutral" variant="primary" />);
    }).toThrow(/Invalid prop combo/);
  });

  test('throws an error for primary success combo', () => {
    expect(() => {
      render(<ClickableStyle status="success" variant="primary" />);
    }).toThrow(/Invalid prop combo/);
  });

  test('throws an error for primary warning combo', () => {
    expect(() => {
      render(<ClickableStyle status="warning" variant="primary" />);
    }).toThrow(/Invalid prop combo/);
  });

  test('throws an error for link success combo', () => {
    expect(() => {
      render(<ClickableStyle status="success" variant="link" />);
    }).toThrow(/Invalid prop combo/);
  });

  test('throws an error for link warning combo', () => {
    expect(() => {
      render(<ClickableStyle status="warning" variant="link" />);
    }).toThrow(/Invalid prop combo/);
  });

  test('throws an error for link error combo', () => {
    expect(() => {
      render(<ClickableStyle status="error" variant="link" />);
    }).toThrow(/Invalid prop combo/);
  });
});
