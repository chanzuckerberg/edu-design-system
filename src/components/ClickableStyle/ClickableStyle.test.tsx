import { render } from '@testing-library/react';
import React from 'react';
import { ClickableStyle } from './ClickableStyle';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<ClickableStyle />', () => {
  const consoleWarnMock = consoleWarnMockHelper();

  it('logs a warning for primary neutral combo', () => {
    render(
      <ClickableStyle as="button" status="neutral" variant="primary">
        Clickable style
      </ClickableStyle>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });

  it('logs a warning for primary success combo', () => {
    render(
      <ClickableStyle status="neutral" variant="primary">
        Clickable style
      </ClickableStyle>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });

  it('logs a warning for primary warning combo', () => {
    render(
      <ClickableStyle status="warning" variant="primary">
        Clickable style
      </ClickableStyle>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });

  it('logs a warning for link success combo', () => {
    render(
      <ClickableStyle status="success" variant="link">
        Clickable style
      </ClickableStyle>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });

  it('logs a warning for link warning combo', () => {
    render(
      <ClickableStyle status="warning" variant="link">
        Clickable style
      </ClickableStyle>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });

  it('logs a warning for link error combo', () => {
    render(
      <ClickableStyle status="error" variant="link">
        Clickable style
      </ClickableStyle>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
  });
});
