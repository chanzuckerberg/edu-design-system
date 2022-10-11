import { render } from '@testing-library/react';
import React, { useRef, type RefObject } from 'react';
import { useMergedRefs } from './useMergedRefs';

it('assigns a value to all provided refs', () => {
  let refA: RefObject<HTMLElement> = { current: null };
  let refB: RefObject<HTMLElement> = { current: null };

  function Component() {
    refA = useRef(null);
    refB = useRef(null);
    const combinedRef = useMergedRefs(refA, refB);
    return <span ref={combinedRef}>hi</span>;
  }

  render(<Component />);

  expect(refA.current?.textContent).toEqual('hi');
  expect(refB.current?.textContent).toEqual('hi');
});
