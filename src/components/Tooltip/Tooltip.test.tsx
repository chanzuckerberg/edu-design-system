import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Tooltip } from './Tooltip';
import * as TooltipStoryFile from './Tooltip.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { Interactive, InteractiveDisabled } = composeStories(TooltipStoryFile);

describe('<Tooltip />', () => {
  generateSnapshots(TooltipStoryFile as StoryFile);

  it('should close tooltip via escape key', async () => {
    const user = userEvent.setup();
    // disable animation for test
    render(<Interactive duration={0} />);
    const trigger = await screen.findByRole('button');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('should close tooltip via escape key for disabled buttons', async () => {
    const user = userEvent.setup();
    // disable animation for test
    render(<InteractiveDisabled duration={0} />);
    const trigger = await screen.findByTestId('disabled-child-tooltip-wrapper');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('describes the trigger with the tooltip while it shows', async () => {
    const user = userEvent.setup();
    render(<Interactive duration={0} />);
    const trigger = await screen.findByRole('button');
    expect(trigger).not.toHaveAttribute('aria-describedby');
    await user.hover(trigger);
    const tooltip = screen.getByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
    expect(tooltip).toContainElement(screen.getByTestId('tooltip-content'));
  });

  it('shows on keyboard focus', async () => {
    const user = userEvent.setup();
    render(<Interactive duration={0} />);
    await user.tab();
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.tab();
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('hides when the trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<Interactive duration={0} />);
    const trigger = await screen.findByRole('button');
    await user.hover(trigger);
    await user.click(trigger);
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('toggles on click when triggered by click', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip duration={0} text="Tooltip text" trigger="click">
        <button>Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.click(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.click(trigger);
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('never shows when disabled', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip disabled duration={0} text="Tooltip text" visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button'));
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('ignores the trigger when visibility is controlled', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip duration={0} text="Tooltip text" visible={false}>
        <button>Trigger</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button'));
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('calls onShow and onHide as it shows and hides', async () => {
    const user = userEvent.setup();
    const onShow = vi.fn();
    const onHide = vi.fn();
    render(
      <Tooltip duration={0} onHide={onHide} onShow={onShow} text="Tooltip text">
        <button>Trigger</button>
      </Tooltip>,
    );
    expect(onShow).not.toHaveBeenCalled();
    expect(onHide).not.toHaveBeenCalled();
    await user.hover(screen.getByRole('button'));
    expect(onShow).toHaveBeenCalledTimes(1);
    await user.keyboard('{Escape}');
    expect(onHide).toHaveBeenCalledTimes(1);
  });

  it('keeps the ref on its child', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Tooltip text="Tooltip text">
        <button ref={ref}>Trigger</button>
      </Tooltip>,
    );
    expect(ref.current).toBe(screen.getByRole('button'));
  });

  it('attaches to an element passed by reference', async () => {
    const user = userEvent.setup();
    const Example = () => {
      const ref = React.useRef<HTMLButtonElement>(null);
      return (
        <>
          <button aria-describedby="existing-description" ref={ref}>
            Trigger
          </button>
          <Tooltip duration={0} reference={ref} text="Tooltip text" />
        </>
      );
    };
    render(<Example />);
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(trigger).toHaveAttribute(
      'aria-describedby',
      screen.getByRole('tooltip').id,
    );
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-describedby', 'existing-description');
  });

  it('appends to the trigger parent when interactive', async () => {
    const user = userEvent.setup();
    render(
      <div data-testid="parent">
        <Tooltip duration={0} interactive text="Tooltip text">
          <button>Trigger</button>
        </Tooltip>
      </div>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('parent')).toContainElement(
      screen.getByRole('tooltip'),
    );
  });

  it('keeps the tooltip size and stacking defaults', () => {
    render(
      <Tooltip duration={0} text="Tooltip text" visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveStyle({ zIndex: '9999' });
    expect(tooltip.firstElementChild).toHaveStyle({ maxWidth: '350px' });
  });
});
