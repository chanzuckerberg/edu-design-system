import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as TooltipStoryFile from './Tooltip.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

const { Interactive, InteractiveDisabled } = composeStories(TooltipStoryFile);

describe('<Tooltip />', () => {
  const warnMock = consoleWarnMockHelper();

  generateSnapshots(TooltipStoryFile, {
    // Tippy renders tooltip as a child of <body> and hence is why baseElement needs to be targetted
    getElement: (wrapper) => {
      return wrapper.baseElement;
    },
  });

  it('should close tooltip via escape key', async () => {
    const user = userEvent.setup();
    // disable animation for test
    render(<Interactive duration={0} />);
    const trigger = await screen.findByRole('button');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('should close tooltip via escape key for disabled buttons', async () => {
    const user = userEvent.setup();
    // disable animation for test
    render(<InteractiveDisabled duration={0} />);
    const trigger = await screen.findByTestId('disabled-child-tooltip-wrapper');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('should display warning message when attempting to use dark variant', () => {
    render(<Interactive variant="dark" />);
    expect(warnMock).toHaveBeenCalledTimes(1);
    expect(warnMock).toHaveBeenCalledWith(
      'The dark variant is deprecated and will be removed in an upcoming release. Please use the default light variant instead.',
    );
  });
});
