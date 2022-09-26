import type { RefCallback, Ref } from 'react';

/**
 * Assign a value to a ref function or object.
 */
function assignRef<Val>(ref: Ref<Val>, value: Val) {
  if (ref == null) return;
  if (typeof ref === 'function') {
    ref(value);
  } else {
    // @ts-expect-error RefObjects have a readonly type, but we're going to assign to it anyway.
    ref.current = value;
  }
}

/**
 * Assign one value to multiple refs.
 *
 * Typically used for DOM nodes. For example, when a component forwards a ref but also needs its
 * own ref for DOM calculations.
 *
 * @example
 *
 * const combinedRef = useMergedRefs(refA, refB);
 * return <span ref={combinedRef}>hi</span>;
 */
export function useMergedRefs<Val>(...refs: Ref<Val>[]): RefCallback<Val> {
  return function (value: Val) {
    for (const ref of refs) {
      assignRef(ref, value);
    }
  };
}
