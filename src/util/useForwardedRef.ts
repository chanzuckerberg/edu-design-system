import { useRef, useEffect, type ForwardedRef, type RefObject } from 'react';

/**
 * Safely access a forwarded ref, which may or may not be present.
 */
export default function useForwardedRef<T>(ref: ForwardedRef<T>): RefObject<T> {
  const innerRef = useRef<T>(null);

  // Keep the internal and forwarded refs in sync.
  useEffect(() => {
    if (!ref) {
      return;
    } else if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  }, [ref]);

  return innerRef;
}
