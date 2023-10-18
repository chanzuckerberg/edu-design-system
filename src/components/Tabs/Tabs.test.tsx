import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './Tabs.stories';
import Tab from '../Tab';

const { Default } = composeStories(stories);

describe('<Tabs />', () => {
  generateSnapshots(stories);

  it('should focus and select with keyboard controls', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const firstTab = screen.getByRole('tab', { name: 'Tab Title 1' });
    const secondTab = screen.getByRole('tab', { name: 'Tab Title 2' });
    firstTab.focus();

    await user.keyboard('{arrowright}');
    expect(secondTab).toHaveFocus();

    await user.keyboard('{arrowleft}');
    expect(firstTab).toHaveFocus();

    await user.keyboard('{arrowdown}');
    expect(secondTab).toHaveFocus();

    await user.keyboard('{arrowup}');
    expect(firstTab).toHaveFocus();

    await user.keyboard('{arrowdown}');
    await user.keyboard('{arrowright}');
    await user.keyboard('{enter}');
    expect(screen.getByRole('tab', { name: 'Tab Title 3' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('changes the active tab when activeIndex changes', () => {
    const { rerender } = render(<Default activeIndex={0} />);
    expect(screen.getByRole('heading', { name: 'Tab 1' })).toBeInTheDocument();

    rerender(<Default activeIndex={1} />);
    expect(screen.getByRole('heading', { name: 'Tab 2' })).toBeInTheDocument();
  });

  it('does not include invalid characters in tab ids', () => {
    render(
      <Default id="foo">
        <Tab data-testid="tab-1" title="Tab Title 1">
          Tab numero uno
        </Tab>
      </Default>,
    );

    expect(screen.getByTestId('tab-1')).toHaveAttribute(
      'aria-labelledby',
      'foo-Tab-Title-1',
    );
  });
});
