import {generateSnapshots} from '@chanzuckerberg/story-utils';
import {composeStories} from '@storybook/testing-react';
import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import {Heading} from './Heading';
import * as HeadingStoryFile from './Heading.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<Heading />', () => {
  const consoleWarnMock = consoleWarnMockHelper();

  generateSnapshots(HeadingStoryFile);

  it('should add the passthrough className', () => {
    render(
      <Heading className="passthrough" size="h1">
        Some Heading
      </Heading>,
    );
    expect(screen.getByText('Some Heading').classList).toContain('passthrough');
  });

  it('should handle refs', async () => {
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
    userEvent.click(screen.getByRole('button'));
  });

  it('should display warning message when attempting to use h6 size', () => {
    const {Heading6} = composeStories(HeadingStoryFile);
    render(<Heading6 />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      `The h6 size is deprecated and will be removed in an upcoming release.\n`,
      'Please bump this heading up to a larger size if possible.',
    );
  });

  it('should display warning message when attempting to use h7 size', () => {
    const {Heading7} = composeStories(HeadingStoryFile);
    render(<Heading7 />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      `The h7 size is deprecated and will be removed in an upcoming release.\n`,
      'Please bump this heading up to a larger size if possible.',
    );
  });
});
