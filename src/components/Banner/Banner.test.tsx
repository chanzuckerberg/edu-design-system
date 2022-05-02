import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import * as BannerStoryFile from './Banner.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<Banner />', () => {
  const consoleWarnMock = consoleWarnMockHelper();

  generateSnapshots(BannerStoryFile);

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
