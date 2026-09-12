import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { hasSlotContent, IconSlot } from './IconSlot';
import type { IconOrContent } from '../../util/utility-types';

describe('<IconSlot />', () => {
  it('renders a string as a decorative icon', () => {
    const { container } = render(<IconSlot content="search" />);

    // A decorative icon is aria-hidden by design, so there is no accessible query for
    // it. Reaching into the container is the only way to assert it rendered.
    /* eslint-disable testing-library/no-container */
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden');
    /* eslint-enable testing-library/no-container */
  });

  it('gives an informative icon its title', () => {
    render(
      <IconSlot content="chevron-down" purpose="informative" title="Expand" />,
    );

    expect(screen.getByTitle('Expand')).toBeInTheDocument();
  });

  it('renders custom content as-is, unwrapped when there is no className', () => {
    const { container } = render(
      <IconSlot content={<span data-testid="custom">Hi</span>} />,
    );

    expect(screen.getByTestId('custom')).toBeInTheDocument();
    expect(container.firstElementChild).toBe(screen.getByTestId('custom'));
  });

  it('wraps custom content so it can carry the className', () => {
    const { container } = render(
      <IconSlot className="wrapper" content={<span>Hi</span>} />,
    );

    expect(container.firstElementChild?.tagName).toBe('SPAN');
    expect(container.firstElementChild).toHaveClass('wrapper');
  });

  it('wraps in the requested element so block content stays valid', () => {
    const { container } = render(
      <IconSlot as="div" className="wrapper" content={<div>Hi</div>} />,
    );

    expect(container.firstElementChild?.tagName).toBe('DIV');
  });

  it.each([[null], [undefined], [false], [true], ['']])(
    'renders nothing for %p',
    (content) => {
      const { container } = render(<IconSlot content={content} />);

      expect(container).toBeEmptyDOMElement();
    },
  );

  it('renders 0 rather than treating it as absent', () => {
    // Guards the `{content && ...}` trap: `0` is a valid ReactNode, and a truthiness
    // check would both skip the slot and leak a stray "0" into the markup.
    const { container } = render(<IconSlot content={0} />);

    expect(container).toHaveTextContent('0');
  });

  describe('hasSlotContent', () => {
    it.each([[null], [undefined], [false], [true], ['']])(
      'reports %p as empty',
      (content) => {
        expect(hasSlotContent(content)).toBe(false);
      },
    );

    it.each([[0], ['search'], [<span key="a">Hi</span>]])(
      'reports %p as present',
      (content) => {
        expect(hasSlotContent(content)).toBe(true);
      },
    );

    // An array is judged by its contents, the way React renders one. Wrapping each case in
    // an extra array because `it.each` spreads the outer one.
    it.each([[[]], [[null, false]], [[[], [null]]]])(
      'reports the array %p as empty',
      (content) => {
        expect(hasSlotContent(content)).toBe(false);
      },
    );

    it('takes a non-array iterable on trust rather than consuming it', () => {
      // React renders any iterable of children, so judging one by its contents would be
      // more accurate — but inspecting it means iterating it, and that exhausts a generator
      // and leaves nothing for the caller to render. Losing valid content is worse than
      // reserving space for an empty collection, so only arrays are looked into.
      function* nothing() {}
      const generator = nothing() as unknown as IconOrContent;

      expect(hasSlotContent(generator)).toBe(true);
      // Still intact for whoever renders it, which is the point.
      expect(Array.from(generator as Iterable<unknown>)).toEqual([]);

      expect(hasSlotContent(new Set() as unknown as IconOrContent)).toBe(true);
    });

    it.each([[[0]], [[<span key="a">Hi</span>]], [[null, 'search']]])(
      'reports the array %p as present',
      (content) => {
        expect(hasSlotContent(content)).toBe(true);
      },
    );

    it('renders no wrapper for an array with nothing in it', () => {
      const { container } = render(
        <IconSlot className="wrapper" content={[]} />,
      );

      // Before, the array itself counted as content and left `<span class="wrapper">`
      // behind, laying out space around nothing.
      expect(container).toBeEmptyDOMElement();
    });
  });
});
