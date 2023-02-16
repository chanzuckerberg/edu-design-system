import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { Text } from './Text';
import * as TextStoryFile from './Text.stories';

describe('<Text />', () => {
  generateSnapshots(TextStoryFile);

  it('should add the passthrough className', () => {
    render(
      <Text className="passthrough" size="body">
        Some Text
      </Text>,
    );
    expect(screen.getByText('Some Text').classList).toContain('passthrough');
  });

  it('should handle refs', async () => {
    const user = userEvent.setup();
    const HelperComponent = ({ as }: { as: 'p' | 'span' }) => {
      const refContainer = React.useRef(null);
      const onButtonClick = () => {
        expect(refContainer.current).toBe(
          screen.getByText(`Ref container parent test ${as}`),
        );
      };
      return (
        <>
          <Text as={as} ref={refContainer}>
            Ref container parent test {as}
          </Text>
          <button onClick={onButtonClick}>Test ref</button>
        </>
      );
    };
    const { rerender } = render(<HelperComponent as="p" />);
    expect(screen.getByText('Ref container parent test p')).toBeTruthy();
    await user.click(screen.getByRole('button'));

    rerender(<HelperComponent as="span" />);
    expect(screen.getByText('Ref container parent test span')).toBeTruthy();
    await user.click(screen.getByRole('button'));
  });

  it('should console warn if attempting to use "info" variant', () => {
    const consoleWarnMock = jest
      .spyOn(global.console, 'warn')
      .mockImplementation();
    render(<Text variant="info">Some Text 2</Text>);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      'Info variant is deprecated, please consider another variant.',
    );
    consoleWarnMock.mockRestore();
  });
});
