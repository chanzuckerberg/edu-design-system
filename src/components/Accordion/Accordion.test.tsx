import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Accordion } from './Accordion';
import * as stories from './Accordion.stories';

const { Default } = composeStories(stories);

describe('<Accordion />', () => {
  generateSnapshots(stories);

  it('should open and close Accordion panel clicking Accordion button', async () => {
    const user = userEvent.setup();
    render(<Default />);
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
    const accordionButton = screen.getByTestId('accordion-button');
    await user.click(accordionButton);
    expect(screen.getByTestId('accordion-panel')).toBeInTheDocument();
    await user.click(accordionButton);
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
  });

  it('should open and close Accordion panel with space and enter keys on the Accordion button', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const accordionButton = screen.getByTestId('accordion-button');
    accordionButton.focus();
    await user.keyboard(' ');
    expect(screen.getByTestId('accordion-panel')).toBeInTheDocument();
    await user.keyboard(' ');
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
    await user.keyboard('{enter}');
    expect(screen.getByTestId('accordion-panel')).toBeInTheDocument();
    await user.keyboard('{enter}');
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
  });

  it('should call onClose callback when accordion closes', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Accordion headingAs="h2">
        <Accordion.Row defaultOpen>
          <Accordion.Button data-testid="accordion-button" onClose={onClose}>
            Accordion Button
          </Accordion.Button>
          <Accordion.Panel>Accordion Panel</Accordion.Panel>
        </Accordion.Row>
      </Accordion>,
    );
    const accordionButton = screen.getByTestId('accordion-button');
    await user.click(accordionButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
