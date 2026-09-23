import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
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
      <Tooltip content="Tooltip text" duration={0} trigger="click">
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
      <Tooltip content="Tooltip text" disabled duration={0} visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button'));
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('ignores the trigger when visibility is controlled', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" duration={0} visible={false}>
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
      <Tooltip
        content="Tooltip text"
        duration={0}
        onHide={onHide}
        onShow={onShow}
      >
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
      <Tooltip content="Tooltip text">
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
          <Tooltip content="Tooltip text" duration={0} reference={ref} />
        </>
      );
    };
    render(<Example />);
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(trigger).toHaveAttribute(
      'aria-describedby',
      `existing-description ${screen.getByRole('tooltip').id}`,
    );
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-describedby', 'existing-description');
  });

  it('leaves aria-expanded alone on a reference that sets its own', async () => {
    const user = userEvent.setup();
    const Example = () => {
      const ref = React.useRef<HTMLButtonElement>(null);
      return (
        <>
          <button aria-expanded="false" ref={ref}>
            Trigger
          </button>
          <Tooltip
            content="Tooltip text"
            duration={0}
            interactive
            reference={ref}
          />
        </>
      );
    };
    render(<Example />);
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('adds to a description the trigger already has', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" duration={0}>
        <button aria-describedby="existing-description">Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(trigger).toHaveAttribute(
      'aria-describedby',
      `existing-description ${screen.getByRole('tooltip').id}`,
    );
    await user.keyboard('{Escape}');
    expect(trigger).toHaveAttribute('aria-describedby', 'existing-description');
  });

  it('stays open on a second click when hideOnClick is false', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip
        content="Tooltip text"
        duration={0}
        hideOnClick={false}
        trigger="click"
      >
        <button>Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    await user.click(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.click(document.body);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
  });

  it('toggles on click, but ignores outside clicks, when hideOnClick is toggle', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip
        content="Tooltip text"
        duration={0}
        hideOnClick="toggle"
        trigger="click"
      >
        <button>Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    await user.click(document.body);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.click(trigger);
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('appends to the trigger parent when interactive', async () => {
    const user = userEvent.setup();
    render(
      <div data-testid="parent">
        <Tooltip content="Tooltip text" duration={0} interactive>
          <button>Trigger</button>
        </Tooltip>
      </div>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).not.toHaveAttribute('aria-describedby');
    expect(screen.getByTestId('parent')).toContainElement(
      screen.getByRole('tooltip'),
    );
  });

  it('leaves aria-expanded alone on a child that sets its own', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" duration={0} interactive>
        <button aria-expanded="false">Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('keeps the tooltip size and stacking defaults', () => {
    render(
      <Tooltip content="Tooltip text" duration={0} visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveStyle({ maxWidth: '350px', zIndex: '9999' });
  });

  it('fades out before unmounting', async () => {
    const user = userEvent.setup();
    render(<Interactive />);
    const trigger = await screen.findByRole('button');
    await user.hover(trigger);
    const bubble = screen.getByRole('tooltip').firstElementChild;
    await waitFor(() =>
      expect(bubble).toHaveAttribute('data-state', 'visible'),
    );
    expect(bubble).toHaveAttribute('data-animation', 'fade');
    expect(bubble).toHaveStyle({ transitionDuration: '200ms' });
    await user.keyboard('{Escape}');
    expect(bubble).toHaveAttribute('data-state', 'hidden');
    expect(bubble).toBeInTheDocument();
    await waitFor(() => expect(bubble).not.toBeInTheDocument());
  });

  it('shows and hides at once when animation is off', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip animation={false} content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button'));
    const bubble = screen.getByRole('tooltip').firstElementChild;
    expect(bubble).toHaveAttribute('data-state', 'visible');
    expect(bubble).not.toHaveAttribute('data-animation');
    expect(bubble).toHaveStyle({ transitionDuration: '0ms' });
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('delays showing and hiding separately', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" delay={[50, null]} duration={0}>
        <button>Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    expect(await screen.findByTestId('tooltip-content')).toBeInTheDocument();
    await user.unhover(trigger);
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('shows at once when only hiding is delayed', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" delay={[null, 50]} duration={0}>
        <button>Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.unhover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument(),
    );
  });

  it('attaches to an element passed directly', async () => {
    const user = userEvent.setup();
    const Example = () => {
      const [element, setElement] = React.useState<HTMLButtonElement | null>(
        null,
      );
      return (
        <>
          <button ref={setElement}>Trigger</button>
          {element && (
            <Tooltip content="Tooltip text" duration={0} reference={element} />
          )}
        </>
      );
    };
    render(<Example />);
    await user.tab();
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-describedby',
      screen.getByRole('tooltip').id,
    );
    await user.tab();
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('passes event methods through to an element passed by reference', async () => {
    const user = userEvent.setup();
    const onKeyDown = vi.fn((event: KeyboardEvent) => event.defaultPrevented);
    const Example = () => {
      const ref = React.useRef<HTMLDivElement>(null);
      return (
        <>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div ref={ref} tabIndex={0}>
            Trigger
          </div>
          <Tooltip
            content="Tooltip text"
            duration={0}
            reference={ref}
            trigger="click"
          />
        </>
      );
    };
    render(<Example />);
    document.addEventListener('keydown', onKeyDown);
    await user.tab();
    // Space on a non-button trigger calls preventDefault to stop the page scrolling
    await user.keyboard(' ');
    document.removeEventListener('keydown', onKeyDown);
    expect(onKeyDown).toHaveReturnedWith(true);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
  });

  it('appends to the element appendTo returns', async () => {
    const user = userEvent.setup();
    const container = document.createElement('div');
    document.body.appendChild(container);
    const appendTo = vi.fn(() => container);
    render(
      <Tooltip appendTo={appendTo} content="Tooltip text" duration={0}>
        <button>Trigger</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button');
    await user.hover(trigger);
    expect(appendTo).toHaveBeenCalledWith(trigger);
    expect(container).toContainElement(screen.getByRole('tooltip'));
    container.remove();
  });

  it('draws the arrow unless arrow is false', () => {
    const { rerender } = render(
      <Tooltip content="Tooltip text" duration={0} visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    const bubble = () => screen.getByRole('tooltip').firstElementChild;
    expect(bubble()?.children).toHaveLength(2);

    rerender(
      <Tooltip arrow={false} content="Tooltip text" duration={0} visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    expect(bubble()?.children).toHaveLength(1);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
  });

  it('keeps a wide trigger from stretching the bubble past maxWidth', async () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(
      DOMRect.fromRect({ width: 800, height: 40 }),
    );
    const { rerender } = render(
      <Tooltip content="Tooltip text" duration={0} visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    const tooltip = screen.getByRole('tooltip');
    await waitFor(() =>
      expect(tooltip.style.minWidth).toBe('min(800px, 350px)'),
    );

    rerender(
      <Tooltip content="Tooltip text" duration={0} maxWidth="none" visible>
        <button>Trigger</button>
      </Tooltip>,
    );
    await waitFor(() => expect(tooltip.style.minWidth).toBe('800px'));
    expect(tooltip).toHaveStyle({ maxWidth: 'none' });
  });
});
