import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { Heading } from './Heading';
import * as stories from './Heading.stories';

describe('<Heading />', () => {
  generateSnapshots(stories as StoryFile);

  it('should add the passthrough className', () => {
    render(<Heading className="passthrough">Some Heading</Heading>);
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
          <Heading ref={refContainer}>Ref container parent test</Heading>
          <button onClick={onButtonClick}>Test ref</button>
        </>
      );
    };
    render(<HelperComponent />);
    expect(screen.getByText('Ref container parent test')).toBeTruthy();
    await user.click(screen.getByRole('button'));
  });
});
