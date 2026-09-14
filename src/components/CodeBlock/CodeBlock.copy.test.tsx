import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CodeBlock } from './CodeBlock';
import Icon, { IconProvider, type IconName } from '../Icon';

const SNIPPET = 'const answer = 42;';

/**
 * The paths an EDS icon draws. Icons render inline from the spritemap rather than
 * referencing a sprite by id, and the copy button's icon is decorative with no accessible
 * name, so comparing paths against a reference icon is the only way to tell which glyph it
 * drew.
 */
function glyphOf(name: IconName) {
  const { container, unmount } = render(
    <Icon name={name} purpose="decorative" />,
  );
  /* eslint-disable-next-line testing-library/no-container */
  const glyph = container.querySelector('svg')?.innerHTML ?? '';
  unmount();

  return glyph;
}

function copyButton() {
  return screen.getByTestId('copy-button');
}

function copyButtonGlyph() {
  return copyButton().querySelector('svg')?.innerHTML;
}

/**
 * Clicks copy and lets the handler's own `await` on the clipboard settle before returning.
 *
 * The state change lands in a microtask rather than during the event, so something has to
 * flush it, and `act` is what also keeps React quiet about an update outside it. `waitFor`
 * would be the usual choice, but it schedules on timers and these tests need a fake clock
 * for the three-second reset, which deadlocks it.
 */
async function clickCopy() {
  /* eslint-disable-next-line testing-library/no-unnecessary-act, require-await */
  await act(async () => {
    fireEvent.click(copyButton());
  });
}

/**
 * Lives apart from `CodeBlock.test.ts` so that file keeps generating the story snapshots
 * under its own name. These cover the copy interaction it left as a TODO.
 */
describe('<CodeBlock /> copy button', () => {
  let writeText: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    writeText = vi.fn().mockResolvedValue(undefined);
    // happy-dom ships no clipboard, and a real one would want permissions besides.
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('copies the snippet, confirms with a checkmark, then goes back', async () => {
    render(
      <CodeBlock copyStyle="icon" language="ts">
        {SNIPPET}
      </CodeBlock>,
    );

    expect(copyButtonGlyph()).toBe(glyphOf('copy'));

    await clickCopy();

    expect(writeText).toHaveBeenCalledWith(SNIPPET);
    expect(copyButtonGlyph()).toBe(glyphOf('check'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(copyButtonGlyph()).toBe(glyphOf('copy'));
  });

  it('swaps the label instead when the button is labelled', async () => {
    render(
      <CodeBlock copyStyle="text" language="ts">
        {SNIPPET}
      </CodeBlock>,
    );

    expect(copyButton()).toHaveTextContent('Copy');

    await clickCopy();

    expect(writeText).toHaveBeenCalledWith(SNIPPET);
    expect(copyButton()).toHaveTextContent('Copied!');

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(copyButton()).toHaveTextContent('Copy');
  });

  it('takes its resting icon from the provider, and still confirms with a checkmark', async () => {
    render(
      <IconProvider icons={{ copy: 'document' }}>
        <CodeBlock copyStyle="icon" language="ts">
          {SNIPPET}
        </CodeBlock>
      </IconProvider>,
    );

    expect(copyButtonGlyph()).toBe(glyphOf('document'));

    await clickCopy();

    // The confirmation is a transient state rather than a semantic role, so the provider
    // has no say in it.
    expect(copyButtonGlyph()).toBe(glyphOf('check'));

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(copyButtonGlyph()).toBe(glyphOf('document'));
  });

  it('leaves the button alone when the clipboard rejects', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    writeText.mockRejectedValue(new Error('denied'));

    render(
      <CodeBlock copyStyle="icon" language="ts">
        {SNIPPET}
      </CodeBlock>,
    );

    await clickCopy();

    expect(consoleError).toHaveBeenCalled();
    expect(copyButtonGlyph()).toBe(glyphOf('copy'));
  });
});
