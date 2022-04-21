import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Banner } from './Banner';
import * as BannerStoryFile from './Banner.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<Banner />', () => {
  const consoleWarnMock = consoleWarnMockHelper();

  generateSnapshots(BannerStoryFile);

  it('dismisses when dismissed if dismissable', () => {
    render(
      <Banner
        data-testid="banner-test"
        description="suuuuup"
        dismissable={true}
        title="Helloooooo"
      />,
    );

    expect(screen.getByTestId('banner-test')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByTestId('banner-test')).not.toBeInTheDocument();
  });
  it('should display warning message when attempting to use isFlat', () => {
    const { Flat } = composeStories(BannerStoryFile);
    render(<Flat />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toBeCalledWith(
      'The isFlat style is deprecated and will be removed in an upcoming release.\n',
      'Please remove this prop to use the default elevated style (with a border and drop shadow) instead.',
    );
    consoleWarnMock.mockRestore();
  });
});
