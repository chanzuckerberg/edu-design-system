import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { Heading } from './Heading';
import * as HeadingStoryFile from './Heading.stories';

describe('<Heading />', () => {
  generateSnapshots(HeadingStoryFile);

  it('should add the passthrough className', () => {
    render(
      <Heading size="h1" className="passthrough">
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
          <Heading size="h1" ref={refContainer}>
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
});
