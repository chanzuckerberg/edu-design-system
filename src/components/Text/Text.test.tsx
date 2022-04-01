import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { Text } from './Text';
import * as TextStoryFile from './Text.stories';

describe('<Text />', () => {
  generateSnapshots(TextStoryFile);

  it('should add the passthrough className', () => {
    render(
      <Text size="body" className="passthrough">
        Some Text
      </Text>,
    );
    expect(screen.getByText('Some Text').classList).toContain('passthrough');
  });
  it('should handle refs', () => {
    const HelperComponent = ({ as }: { as: 'p' | 'span' }) => {
      const refContainerSpan = React.useRef(null);
      return (
        <Text as={as} ref={refContainerSpan}>
          Ref container parent test {as}
        </Text>
      );
    };
    render(<HelperComponent as="p" />);
    expect(screen.getByText('Ref container parent test p')).toBeTruthy();
    render(<HelperComponent as="span" />);
    expect(screen.getByText('Ref container parent test span')).toBeTruthy();
  });
});
