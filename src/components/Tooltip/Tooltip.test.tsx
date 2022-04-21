import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { userEvent } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as TooltipStoryFile from './Tooltip.stories';

const { Interactive } = composeStories(TooltipStoryFile);

describe('<Tooltip /> stories', () => {
  beforeEach(() => {
    // prevents expected console warns about deprecation during testing
    jest.spyOn(console, 'warn').mockImplementation();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  generateSnapshots(TooltipStoryFile, {
    // Tippy renders tooltip as a child of <body> and hence is why baseElement needs to be targetted
    getElement: (wrapper) => {
      return wrapper.baseElement;
    },
  });
});

describe('<Tooltip />', () => {
  it('should close tooltip via escape key', async () => {
    // Test fails if animation is enabled https://github.com/atomiks/tippyjs-react/blob/master/test/Tippy.test.js#L65
    render(<Interactive animation={false} />);
    const trigger = await screen.findByRole('button');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await userEvent.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await userEvent.keyboard('{esc}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('should display warning message when attempting to use dark variant', () => {
    const consoleWarnMock = jest
      .spyOn(global.console, 'warn')
      .mockImplementation();
    render(<Interactive variant="dark" />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toBeCalledWith(
      'The dark variant is deprecated and will be removed in an upcoming release. Please use the default light variant instead.',
    );
    consoleWarnMock.mockRestore();
  });
});
