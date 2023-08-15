import React from 'react';

let id = 0;
let showWarning = true;

function genId() {
  return ++id;
}

export const useId =
  React.useId ??
  function useId() {
    if (process.env.NODE_ENV !== 'production' && showWarning) {
      console.warn(
        "React < 18: EDS's `useId` is not SSR friendly. We recommend applying an ID package like `uniqueId` or using React 18's built-in `React.useId` https://react.dev/reference/react/useId",
      );
      showWarning = false;
    }
    const id = 'eds-' + genId();
    return id;
  };
