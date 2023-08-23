import { render, screen } from '@testing-library/react';
import React from 'react';
import useForwardedRef from './useForwardedRef';

type Props = {
  callbackWithRef?: (ref: React.RefObject<HTMLElement>) => void;
};

/**
 * Component for testing our forwarded ref.
 */
const TestComponent = React.forwardRef<HTMLButtonElement, Props>(
  ({ callbackWithRef }, ref) => {
    // Access the forwarded ref.
    const anotherRef = useForwardedRef(ref);

    // If present, pass the forwarded ref to a callback so we can do things with it in our tests.
    React.useEffect(() => {
      if (callbackWithRef) {
        callbackWithRef(anotherRef);
      }
    }, [anotherRef, callbackWithRef]);

    return <button ref={anotherRef}>☕</button>;
  },
);

it('allows refs to be forwarded', () => {
  const someRef = React.createRef<HTMLButtonElement>();
  render(<TestComponent ref={someRef} />);
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(someRef.current).toBeInstanceOf(HTMLButtonElement);
});

it('does not require a ref', () => {
  render(<TestComponent />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

it('allows forward refs to be intercepted and used by the component', () => {
  const someRef = React.createRef<HTMLButtonElement>();

  render(
    <TestComponent
      // We've exposed the ref outside of the compnent via a callback for testing purposes.
      // Normally the component will do things with the ref internally.
      callbackWithRef={(ref) => {
        // Add a data attribute we can write assertions against.
        if (ref.current) {
          ref.current.dataset.coffee = '5';
        }
      }}
      ref={someRef}
    />,
  );

  expect(someRef.current?.dataset.coffee).toEqual('5');
  expect(screen.getByRole('button').dataset.coffee).toEqual('5');
});
