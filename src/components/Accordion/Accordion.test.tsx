import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { userEvent } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Accordion } from './Accordion';
import * as stories from './Accordion.stories';

const { Default } = composeStories(stories);

describe('<Accordion />', () => {
  generateSnapshots(stories);

  it('should open and close Accordion panel clicking Accordion button', () => {
    render(<Default />);
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
    const accordionButton = screen.getByTestId('accordion-button');
    userEvent.click(accordionButton);
    expect(screen.getByTestId('accordion-panel')).toBeInTheDocument();
    userEvent.click(accordionButton);
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
  });

  it('should open and close Accordion panel with space and enter keys on the Accordion button', () => {
    render(<Default />);
    const accordionButton = screen.getByTestId('accordion-button');
    accordionButton.focus();
    userEvent.keyboard('{space}');
    expect(screen.getByTestId('accordion-panel')).toBeInTheDocument();
    userEvent.keyboard('{space}');
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
    userEvent.keyboard('{enter}');
    expect(screen.getByTestId('accordion-panel')).toBeInTheDocument();
    userEvent.keyboard('{enter}');
    expect(screen.queryByTestId('accordion-panel')).not.toBeInTheDocument();
  });

  it('should call onClose callback when accordion closes', () => {
    const onClose = jest.fn();
    render(
      <Accordion headingAs="h2">
        <Accordion.Item defaultOpen>
          <Accordion.Button data-testid="accordion-button" onClose={onClose}>
            <Accordion.Title>Accordion Button</Accordion.Title>
          </Accordion.Button>
          <Accordion.Panel>Accordion Panel</Accordion.Panel>
        </Accordion.Item>
      </Accordion>,
    );
    const accordionButton = screen.getByTestId('accordion-button');
    userEvent.click(accordionButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
