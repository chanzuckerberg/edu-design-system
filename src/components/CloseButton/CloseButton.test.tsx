// import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';
import CloseButton from './CloseButton';
// import * as CloseButtonStoryFile from './CloseButton.stories';

describe('<CloseButton />', () => {
  // TODO(Icon): uncomment this test and its imports above when Icon component is done
  // generateSnapshots(CloseButtonStoryFile);

  // TODO(Icon): Unskip this when the Icon component is done
  it.skip('forwards refs', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<CloseButton ref={ref} onClose={() => console.log('closing...')} />);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
  });
});
