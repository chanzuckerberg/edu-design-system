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
        "React < 18: EDS's `useId` is not SSR friendly and can lead to race conditions. We recommend importing `uniqueId` and setting the id prop directly, or using React 18's built-in `React.useId` https://react.dev/reference/react/useId",
      );
      showWarning = false;
    }
    const id = 'eds-' + genId();
    return id;
  };
