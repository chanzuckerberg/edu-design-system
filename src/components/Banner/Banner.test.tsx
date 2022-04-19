import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Banner } from './Banner';
import * as BannerStoryFile from './Banner.stories';

describe('<Banner />', () => {
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
});
