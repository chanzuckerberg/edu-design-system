import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { Heading } from './Heading';
import * as stories from './Heading.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<Heading />', () => {
  const consoleWarnMock = consoleWarnMockHelper();

  generateSnapshots(stories as StoryFile);

  it('should add the passthrough className', () => {
    render(
      <Heading className="passthrough" size="h1">
        Some Heading
      </Heading>,
    );
    expect(screen.getByText('Some Heading').classList).toContain('passthrough');
  });

  it('should handle refs', async () => {
    const user = userEvent.setup();
    const HelperComponent = () => {
      const refContainer = React.useRef(null);
      const onButtonClick = () => {
        expect(refContainer.current).toBe(
          screen.getByText('Ref container parent test'),
        );
      };
      return (
        <>
          <Heading ref={refContainer} size="h1">
            Ref container parent test
          </Heading>
          <button onClick={onButtonClick}>Test ref</button>
        </>
      );
    };
    render(<HelperComponent />);
    expect(screen.getByText('Ref container parent test')).toBeTruthy();
    await user.click(screen.getByRole('button'));
  });

  it('should display warning message when attempting to use h7 size', () => {
    const { Heading7 } = composeStories(stories);
    render(<Heading7 />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      `The h7 size is deprecated and will be removed in an upcoming release.\n`,
      'Please bump this heading up to a larger size if possible.',
    );
  });
});
