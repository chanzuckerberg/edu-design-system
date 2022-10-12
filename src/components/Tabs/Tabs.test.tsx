import {generateSnapshots} from '@chanzuckerberg/story-utils';
import {userEvent} from '@storybook/testing-library';
import {composeStories} from '@storybook/testing-react';
import {render, screen} from '@testing-library/react';
import React from 'react';
import * as stories from './Tabs.stories';

const {Default} = composeStories(stories);

describe('<Tabs />', () => {
  generateSnapshots(stories);

  it('should focus and select with keyboard controls', () => {
    render(<Default />);
    const firstTab = screen.getByRole('tab', {name: 'Tab Title 1'});
    const secondTab = screen.getByRole('tab', {name: 'Tab Title 2'});
    firstTab.focus();

    userEvent.keyboard('{arrowright}');
    expect(secondTab).toHaveFocus();
    userEvent.keyboard('{arrowleft}');
    expect(firstTab).toHaveFocus();
    userEvent.keyboard('{arrowdown}');
    expect(secondTab).toHaveFocus();
    userEvent.keyboard('{arrowup}');
    expect(firstTab).toHaveFocus();

    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{arrowright}');
    userEvent.keyboard('{enter}');
    expect(screen.getByRole('tab', {name: 'Tab Title 3'})).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('changes the active tab when activeIndex changes', () => {
    const {rerender} = render(<Default activeIndex={0} />);
    expect(screen.getByRole('heading', {name: 'Tab 1'})).toBeInTheDocument();

    rerender(<Default activeIndex={1} />);
    expect(screen.getByRole('heading', {name: 'Tab 2'})).toBeInTheDocument();
  });
});
