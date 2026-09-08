import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { hasSlotContent, IconSlot } from './IconSlot';

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
  });
});
